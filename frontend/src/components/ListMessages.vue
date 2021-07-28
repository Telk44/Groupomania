<template>

  <div>
     <!-- Liste des messages -->   
      <div v-for="message in messages" :key="message.id" class="bloclist">
          <div class="blocauthor">
            <i class="fas fa-user-circle">  </i>
            <span class="textauthor">{{ message.user.firstname }} {{ message.user.lastname }}</span>
            <div class="textdate"> {{ message.createdAt | moment( " DD.MM.YY à HH:mm") }}</div>
             
          </div>
          <div class="blocmessage">
              <!-- <h4> {{ message.title }} </h4> -->
              <p> {{ message.content }} </p>
            </div>  
          <a class="blocactions">
                <i class="fas fa-trash-alt" v-if="message.userId == userId || isAdmin == true" 
                @click="deleteMessage(message.id)" title="supprimer"> </i>
                
          </a>
    <Answers :messageId="message.id" :messageUserId="message.userId" />
    </div>
  </div> 
      
</template>

<script>
import Answers from "@/components/Answers.vue";
export default {
    name: "ListMessages",
    components: {
        Answers
    },

    data() {
        return {
            firstname: "",
            lastname: "",
            jobtitle: "",
            userId: "",
            isAdmin: "",
            messages: []
        }
    },
    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));
        this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
        console.log(localStorage);

        let url = "http://localhost:3000/api/messages";
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
                this.messages = data;
                console.log(this.messages)

            })
            .catch(error => console.log(error))
    },

    methods: {
        deleteMessage(messageid) {
            let url = `http://localhost:3000/api/messages/${ messageid }`;
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
.textauthor{
  font-size: 12px;
  margin-left: 5px;
}
.textdate{
  font-size: 10px;
  padding-left: 22px;
}
.bloclist {
  width: 70%;
  margin: auto;
  margin-top: 25px;
  padding: 25px;
  box-shadow: 0px 0px 15px 8px rgba(19, 18, 18, 0.027);
  border-radius: 5px;
  
}
h4 {
  font-size: 1;
}
/* .blocauthor i {
  color: #0c2444;
  font-size: 1.5em;
  padding: 0;
  
} */

.blocactions {
  width: 100%;
  font-size: 1.5em;
  margin: 0 auto;
 /*  flex-direction: row; */
  
}
/* .blocactions i{
  margin-bottom: 10px;
  align-items: right
  ;
} */

.blocauthor p {
  font-size: 1em;
}
.blocmessage {
  width: 100%;
  margin: 0 auto;
  border-radius: 2px; 
  border-bottom: 1px solid black;
  /* border: 1px solid black; */
  text-align: left;
  overflow: hidden;
}

.fa-trash-alt{
    color: #d44c5c;
    font-size: 0.6em;
}

/* 
@media screen and (max-width: 450px) {
	.bloclist {
    width: auto; 
    box-shadow: inset 0px 0px 0px 8px white;
    border: 1px solid black;
    font-size: 0.7em;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    
  }
  label, input, textarea {
    width: 75%;
    text-align: center;
  }

} */
</style>