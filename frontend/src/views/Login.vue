<template>
     
        <div class="blocsignup">
            <img src="../assets/icon.svg"  alt="Logo Groupomania Connect" width="30%" />
           
            <h3>Bienvenue, sur le réseau social de l'entreprise</h3>
            <form v-on:submit.prevent="login" id="form-login" >
              <div class="form-group">
                <!-- <label for="email">E-mail :</label> -->
                <input type="email" id="email" name="email" class="form-control"  placeholder="Email" required v-model="inputLogin.email"/>
              </div>
              <div class="form-group">
                <!-- <label for="password">Mot de passe :</label> -->
                <input type="password" id="password" name="password" class="form-control"  placeholder="Mot de passe" required v-model="inputLogin.password"/>
              </div>   
              <button type="submit">Connect</button>                                     
            </form> 
              
             <nav class="navlogsign"><p>Pas encore inscrit ? <router-link to="/signup">Rejoignez-nous !</router-link></p></nav>
        </div>  
</template>


<script>

export default {
    name: 'Login',

    data() {
        return {
            inputLogin: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            let loginDatas = {
                "email": this.inputLogin.email,
                "password": this.inputLogin.password
            }
            console.log(loginDatas)
            let url = "http://localhost:3000/api/auth/login"
            let options = {
                method: "POST",
                body: JSON.stringify(loginDatas),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                    if (res.userId && res.token) {
                        localStorage.setItem("userId", res.userId)
                        localStorage.setItem("token", res.token)
                        localStorage.setItem("isAdmin", res.isAdmin);
                        console.log(localStorage)
                        this.$router.push("list");
                        /* alert(" Bienvenue sur Groupomania Connect ! Connectez-vous dès à présent ! "); */
                    } else {
                        alert(" Mot de passe incorrect ! ");
                    }
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="css">

</style>