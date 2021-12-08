<template>
    <!-- <h1>Welcome! {{user.name}}</h1> -->
    <User />    
</template>

<script>
import User from '../components/User.vue'
export default {
  components: { User },
    name:'Home',
    mounted() 
    {
        let user=localStorage.getItem('user-info');
        if(!user) 
        {
            this.$router.push({name:'Login'})
        }
    }
}
</script>