<template>
    <header class="header">
        <div class="headerImg">
        <img src="../assets/icon-left-font.jpg"  alt="Logo Groupomania Connect" />
        </div>
        <nav id="navbar">
            <router-link to="/list" title="Accueil"><i class="fas fa-home"></i></router-link>
            <router-link to="/message" title="Publier"><i class="far fa-edit"></i></router-link> 
            <router-link to="/account" title="Votre compte"><i class="far fa-user-circle"></i></router-link>
            <router-link to="/" title="Déconnexion"><i @click="deconnect" class="far fa-times-circle"></i></router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        deconnect() {
            localStorage.clear();
            this.$router.push("/");
        }
    }
}
</script>

<style lang="css">
.headerImg img{
    width:50%;
}

.header{
    width:80%;
    display:flex;
    margin: 30px;
    padding: 15px;
}
#navbar {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 10px;
}
#navbar i {
    font-size: 1.2em;
    color:black;
}
 @media screen and (max-width: 768px) {
	.header {
       flex-wrap: wrap;  
      justify-content: center;
       
    }
    .headerImg img {
    width: 87%;
    }
}


 

</style>