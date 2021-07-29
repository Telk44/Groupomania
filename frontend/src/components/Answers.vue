<template>
            <!-- Liste des commentaires  -->
    <div class="bloc"> 
        <div v-for="answer in answers" :key="answer.id" class="blocanswers" >                        
           <span class="textdate"> <i class="fas fa-user-circle">  </i> 
           posté par {{ answer.User.firstname }} {{ answer.User.lastname }}
           le  {{ answer.createdAt | moment( " DD.MM.YY à HH:mm") }}</span>
           <br>{{ answer.content }}
           <a class="blocactions">
                <i class="fas fa-trash-alt" v-if="answer.userId == userId || isAdmin == true" 
                @click="deleteAnswer(answer.id)" title="supprimer"> </i>
                
          </a>
        </div>

        <!-- Poster un commentaire  -->    
        <div class="addAnswer">
           <div> <textarea type="text"  name="content" class="form-control" v-model="content" placeholder="Ecrivez un commentaire" required></textarea></div>
            <div><button class ="btnpost" v-on:click="createAnswer()">Post</button> </div>        
        </div>
    </div>
</template>

<script >

export default {
    name: "Answers",

    data() {
        return {
            answer: "",
            answers: [],
            content:"",
            isAdmin: "",
            userId: "",
        }
    },
    props: {
        messageId: Number,
        messageUserId: Number,
    },
    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));
        this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
        console.log(localStorage);

        let url = "http://localhost:3000/api/answers/" + this.messageId + "/display";
        let options = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.answers = data;
                console.log(this.answers)
            })
            .catch(error => console.log(error))
    },

    methods: {
        createAnswer() {
            let inputContent = {
                "content": this.content,
                "messageId": this.messageId
            }
            if (!this.content) {
                alert("Commentaire requis");
            } else {              
                let url = "http://localhost:3000/api/answers/new"
                let options = {
                    method: "POST",
                    body: JSON.stringify(inputContent),
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }
                fetch(url, options)
                    .then(res => res.json())
                    .then((res) => {
                        console.log(res)
                        if (res.ok) {
                            this.content = {}
                        } 
                    })
                    .then(window.location.reload())
                    .catch(error => console.log(error))
            }
        },
           deleteAnswer(id) {
            let url = `http://localhost:3000/api/answers/${ id }`;
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                })
                .catch(error => console.log(error))
        },
    },
}
</script>

<style lang="css">
.deleteAnswer{
    text-align: end;
}
.blocanswers {
  width:80%;
  margin:10px 0px;
  padding:10px;
  border-radius: 8px; 
  background-color: #f4f0f0;
  overflow: hidden;
  font-size: 16px;
 
}
/* #addpost{
    display: flex;
    flex-direction: column;
    border:none;
    align-items: flex-start;
}  */
.blocanswer textarea:focus {
  border-color: white;
  box-shadow: 0px 0px 6px grey;
}
.btnpost{
    width:40px;
    border-radius: 8px;
    padding:8px 36px 8px 8px;
    background-color: rgb(30, 41, 70);
    color:white;
    border:none
}

</style>