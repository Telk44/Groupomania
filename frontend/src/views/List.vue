<template>
     <div>
        <Navbar></Navbar>
        <ListMessages/> 
     </div> 
</template>


<script>
import Navbar from '../components/Navbar'
import ListMessages from '../components/ListMessages'

export default {
    name: 'List',
    components: {
        Navbar,
        ListMessages,
        
    },
}
</script>
  
<style lang="css">


   
.blocsignup h1 {
   margin-top: 0;
   padding: 10px;
   color: black;
}
</style>