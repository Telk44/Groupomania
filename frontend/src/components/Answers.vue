<template>
            <!-- Liste des commentaires  -->
    <div class="bloc"> 
        <div v-for="answer in answers" :key="answer.id" class="blocanswers" >                        
             {{ answer.content }} 
           {{ answer.userId.firstname }} {{ answer.userId.lastname }}
        </div>

    <!-- Poster un commentaire  -->    
        <div class="addAnswer">
           <div> <textarea type="text"  name="content" class="form-control" v-model="content" placeholder="Ecrivez un commentaire"></textarea></div>
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
        }
    },
    props: {
        messageId: Number,
        messageUserId: Number,
    },
    mounted() {
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
                    } /* else {
                        alert("Commentaire envoyé");
                    } */
                })
                .then(window.location.reload())
                .catch(error => console.log(error))
        }
    },
}
</script>

<style lang="css">



.blocanswers {
  width:40%;
  margin:10px 0px;
  padding:10px;
  border-radius: 8px; 
  background-color: #f4f0f0;
  overflow: hidden;
  font-size: 12px;
  
}
#addpost{
    display: flex;
    flex-direction: column;
    border:none;
    align-items: flex-start;
} 
.blocanswer textarea:focus {
  border-color: white;
  box-shadow: 0px 0px 6px grey;
}
.btnpost{
    width:40px;
    border-radius: 8px;
    padding:8px;
    background-color: rgb(30, 41, 70);
    color:white;
    border:none
}

</style>