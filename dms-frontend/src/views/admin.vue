<template>
  <div>
    <header class="header">
        <img src="../assets/home-logo.png" alt="" />
        <nav>
          <ul>
              <li><router-link to="./" id="signIn" style="padding-right:20px; position:relative;">Sign Out</router-link></li>
          </ul>
        </nav>
    </header>
  <div class="container">
    <section>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Full name</th>
            <th>Citizen ID</th>
            <th>University</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="item in this.userList" v-bind:key="item.user">
            <td>{{item.user}}</td>
            <td>{{item.fullname}}</td>
            <td>{{item.citizenid}}</td>
            <td>{{item.university}}</td>
            <td>{{item.email}}</td>
          </tr>  
        </tbody>
      </table>
    </section>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      userList: [],
    }
  },
 

  mounted () {
      axios.get("http://localhost:5000/user")
        .then((res) => {
          this.userList = res.data;
        })
    }
  }

</script>

<style scoped>
.header {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    background-color: #1867c0;
}

.header img {
    padding-right: 10%;
    width: 30%;
}

.header nav ul {
    list-style: none;
    margin-bottom: 0;
    padding-left: 40px;
}

.header nav ul li {
    display: inline;
    margin: 20px;
    font-family: 'Quicksand', sans-serif;
    font-size: 24px;
}

.header nav ul li a:hover {
    opacity: 0.65;
}

.header nav ul li a {
    text-decoration: none;
    font-weight: bold;
    color: white;
}
</style>