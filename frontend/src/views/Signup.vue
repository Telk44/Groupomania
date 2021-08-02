<template>
          <div class="blocsignup">  
            <img src="../assets/icon.svg"  alt="Logo Groupomania Connect" width="30%" />        
            <h3>Formulaire d'inscription</h3>
            <form v-on:submit.prevent="signup" id="form-signup" >
              <div class="form-group">
                <!-- <label for="lastname"> Nom </label> -->
                <input type="text" id="lastname" name="lastname" title="Votre nom" class="form-control"  placeholder="Nom" required 
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.lastname"/>
              </div>
              <div class="form-group">
                <!-- <label for="firstname">Prénom </label> -->
                <input type="text" id="firstname" name="firstname"  title="Votre prénom" placeholder="Prénom" class="form-control" required 
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.firstname"/>
              </div>
             <!--  <div class="form-group">
                <label for="jobtitle">Fonction </label>
                <input type="text" id="jobtitle" name="jobtitle" class="form-control" required
                pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" v-model="inputSignup.jobtitle"/>
              </div>  -->
              <div class="form-group">
                <!-- <label for="email">E-mail </label> -->
                <input type="email" id="email" name="email" title="Votre email" class="form-control"  placeholder="Email" required 
                pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" v-model="inputSignup.email"/>
              </div>
              <div class="form-group">
                <!-- <label for="password">Mot de passe </label> -->
                <input type="password" id="password" name="password" title="Votre mot de passe" class="form-control"  placeholder="Mot de passe" required
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" v-model="inputSignup.password"/>
              </div>  
              <p> Minimum 8 caractères dont 1 Majuscule, 1 minuscule et un chiffre</p>
              <button title="Inscription">Inscription</button>                                       
            </form> 
             
              <nav class="navlogsign"><p>Vous avez déjà un compte ? <router-link to="/">Connectez-vous</router-link></p></nav> 
          </div> 
</template>


<script>

export default {
    name: 'Signup',

    data() {
        return {
            inputSignup: {
                lastname: "",
                firstname: "",
                jobtitle: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        signup() {
            let inputDatas = {
                "lastname": this.inputSignup.lastname,
                "firstname": this.inputSignup.firstname,
                /* "jobtitle": this.inputSignup.jobtitle, */
                "email": this.inputSignup.email,
                "password": this.inputSignup.password
            }
            console.log(inputDatas)
            let url = "http://localhost:3000/api/auth/signup"
            let options = {
                method: "POST",
                body: JSON.stringify(inputDatas),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log(options)
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                    localStorage.setItem("userId", res.userId);
                    localStorage.setItem("token", res.token);
                    console.log(localStorage)
                    this.$router.push("/");
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="css">

form {
	margin-top: 25px;
}
button {
  width: 120px;
  height: 40px;
  border: 1px solid black(255, 255, 255);
  border-radius: 1px;
  padding: 10px;
  margin: 15px 0px 25px 0px;
  background-color: rgb(255, 255, 255);
  
}
button:hover {
	opacity: .85;
  background-color: #d44c5c;
	-webkit-transition: .3s ease-in;
	transition: .3s ease-out;
}
/* label {
  display: block;
  width: 25%; 
  text-align: right; 
  font-size: 1em;
  margin: auto;
} */
input, textarea {
  width: 70%;
  height: 2em;
  box-sizing: content-box;  
  outline: none;
  border:none;
  box-shadow: 0px 0px 15px 8px rgba(19, 18, 18, 0.027);
  border-radius: 5px;
  padding: 10px;
  margin: auto;
}

input:hover, textarea:hover {
  border-color: white;
  box-shadow: 0px 0px 5px #6f6d6e;
  
}

.form-group {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 15px;
  margin: auto;
 }

.blocsignup {
  color: white;
  margin: auto;
  width: 40%; 
  box-shadow: 0px 0px 15px 8px rgba(19, 18, 18, 0.027);
	padding-top: 20px;
  border-radius: 10px;
  text-align: center;
  margin-top: 50px;
  align-items: center;
}
.blocsignup p, .blocsignup h3 {
	color: black;
  padding: 0 15px 0 15px;
}
.blocsignup p{
  font-size:12px
}
.navlogsign {
  height: 50px;
  width: 100%;
}
.navlogsign a {
  color: grey;
  font-size: 1em;
}
.navlogsign a:hover, .navlogsign a:focus {
  color: #573517;
}
@media screen and (max-width: 768px) {
    .blocsignup {
      width: auto; 
  }
}
@media screen and (max-width: 450px) {
	.blocsignup {
  width: auto; 
  align-content: center;
  font-size: 0.7em;
}

}
</style>