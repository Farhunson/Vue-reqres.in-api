<template>
  <div>
    <h1 style="color: #b3b8cd;">Users List</h1>
      <ul class="card-wrapper">
        <li
          class="card-container"
          v-for="user in state.users.data"
          :key="user.id"
        >
          <div class="image-container">
              <img class="round" :src="user.avatar" alt="" />
          </div>
          <div class="name-container">
              <span>{{ user.first_name }} {{ user.last_name }}</span>
          </div>
          <p class="email">{{ user.email }}</p>        
        </li>
      </ul>
      <button class="prevnextbtn" @click="prev" :disabled="state.users.page == 1">Prev</button>
      <button class="prevnextbtn" @click="next" :disabled="state.users.page == 2">Next</button>
    
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
export default {
  setup() {
    //data users akan disimpan disini
    const state = reactive({
      users: {},
    });
    //ketika pertama dimuat, akan langsung mengambil data API
    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });
    // //method untuk button next
    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }
    //method untuk button previous
    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }
    //semua variable dan method harus kita return agar bisa dipakai
    return {
      state,
      next,
      prev,
    };
  },
};
</script>

<style>

body {
    font-family: sans-serif;
    /* display: flex; */
    align-items: center;
    /* justify-content: center; */
    margin : 30px;

}


.card-wrapper {
  display: flex;
  max-width: 1024px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 20px;
  margin-top: 10px;
  list-style-type:none;
}

.card-container {
  text-align: center;
  height: 250px;
  width: 240px;
  margin: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background: #231e39;
  color: #b3b8cd;
  box-shadow: 0px 15px 25px -15px rgba(65, 184, 131, 1);
  transition-duration: 2.5s;

}

.card-container:hover {
  transform: translateY(-15px);
  transition: transform 1s ease-in;
  border: 5px solid #41B883;
  box-shadow: 0px 25px 40px -10px rgba(65, 184, 131, 1);

}

.round {
  border: 1px solid #41B883;
  border-radius: 50%;
  padding: 7px;
  width: 50%;

}
.name-container {
    margin: 10px 0;
}

.prevnextbtn {
  background: #42b883;
  color: #231e39;
  border-radius: 5px;
  font-size: 16px;
  margin: 4px 10px;
  padding: 12px 40px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition-duration: 0.7s;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24);


}
.prevnextbtn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(65, 184, 131, 1);
  background: #231e39;
  color: #41B883;
  border: 2px solid #41B883;
}
</style>