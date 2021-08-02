<template>
     <section>
         <Navbar></Navbar>
          <div class="blocsignup">          
            <h3>Créer une publication</h3>
            <form id="form-signup" >
              
                <!-- <label for="title">Titre du message :</label> -->
                <!-- <input type="text" id="title" name="title" placeholder="Titre" class="form-control" required v-model="inputMessage.title"/> -->
                <input type="text" title="Quoi de neuf?" id="content" name="content" rows="10" class="form-control" required v-model="inputMessage.content" placeholder="Quoi de neuf ?"/>
             <!--  <label for="image" class="new-post_form-label">Image</label>
                <input type="file"  placeholder="upload image"/> -->
            </form>              
             <button title="Publier" v-on:click="sendMessage" >Publier</button> 
          </div> 
     </section> 
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'Message',
    components: {
        Navbar
    },

    data() {
        return {
            inputMessage: {
                /* title: "", */
                content: "",
                /* url_image: null */
            },
            userId: ""
        }
    },
    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));
        console.log(this.userId)
    },
    methods: {

      /*   onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        },
 */
        sendMessage() {
            let deliverMessage = {
                /* "title": this.inputMessage.title, */
                "content": this.inputMessage.content,
                "userId": this.userId
            }
            console.log(deliverMessage)
            let url = "http://localhost:3000/api/messages/new"
            let options = {
                method: "POST",
                body: JSON.stringify(deliverMessage),
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
                        window.location.reload();
                        this.inputMessage = {} // Retour à 0 des inputs 
                    } else {
                       /*  alert("Message bien reçu "); */
                    }
                })
                .then(this.$router.push("/list"))
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="css">

 section {
    display: flex;
    margin: auto;
    flex-direction: column;
}
.parametres {
    margin-top: 0;
    margin-bottom: 25px;
}
a {
    cursor: pointer;
}
 textarea {
    height: auto;
    resize:none;
} 

@media screen and (max-width: 768px) {
	section {
    flex-direction: column;
    margin-top: 25px;
}
} 

</style>