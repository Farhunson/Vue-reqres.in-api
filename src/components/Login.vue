<template>
    <main class="form-signin">
      <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <input v-model="email" type="email" class="form-control" placeholder="E-mail" required>

          <input v-model="password" type="password" class="form-control" placeholder="Password" required>
      
        <button v-on:click="login" class="Sign-in-btn" type="submit">Sign in</button>
      </form>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data() 
    {
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            console.warn(result)
            if(result.status==200 && result.data.length>0) 
              {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'});
              }
        }
    }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.Sign-in-btn {
  display: block;
  width: 100%;
  border: none;
  background-color: #41B883;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
}

.Sign-in-btn:hover {
  background-color: #ddd;
  color: black;
}

</style>
