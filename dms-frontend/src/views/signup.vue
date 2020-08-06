<template>
    <v-app id="signUpContainer">
      <div class="myPageName"><img src="../assets/home-logo.png" height="60px"></div>
        <v-card
          class="mx-auto"
          max-width="700"
          tile
          color="hsl(220, 8%, 23%)"
        >
          <div class="signUpDescription">
            <p><b>Create an account</b></p>
          </div>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              dark
              v-model="username"
              :rules="usernameRules"
              outlined
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="password"
              :rules="passwordRules"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              outlined
              label="Password"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="rePassword"
              :rules="rePasswordRules"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
              outlined
              label="Re-enter password"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="email"
              :rules="emailRules"
              outlined
              label="Email"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="fullName"
              :rules="fullNameRules"
              outlined
              label="Full name"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="studentID"
              :rules="studentIDRules"
              outlined
              label="Student ID"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="university"
              :rules="universityRules"
              outlined
              label="University"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="citizenID"
              :rules="citizenIDRules"
              outlined
              label="Citizen ID"
              required
            ></v-text-field>

            <v-btn 
              class ="white--text"
              color="primary"
              :disabled="!valid"
              @click="signUp"
            >
              Continue
            </v-btn>

            <div class="termOfUse">
              <p>By continuing, you have agreed to DMS's <b>Term of Service</b> and <b>Privacy Policy</b></p>
            </div>

          </v-form>
        </v-card>
    </v-app>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      valid: true,
      show1: false,
      show2: false,
      username: '',
      password: '',
      rePassword: '',
      email: '',
      fullName: '',
      studentID: '',
      university: '',
      citizenID: '',

      usernameRules: [
        v => !!v || 'User is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must have at least 6 characters',
      ],
      rePasswordRules: [
        v => !!v || "Re-enter password is required",
        v => (v === this.password) || "Password do not match"
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      fullNameRules: [
        v => !!v || 'Full name is required',
      ],
      studentIDRules: [
        v => !!v || 'Student ID is required',
      ],
      universityRules: [
        v => !!v || "University is required",
      ],
      citizenIDRules: [
        v => !!v || "Citizen ID is required"
      ]
    }
  },

  methods: {
    signUp: async  function () {
      this.$refs.form.validate()


     const user = {
        username: this.username,
        password: this.password,
        email: this.email,
        fullName: this.fullName,
        studentID: this.studentID,
        university: this.university,
        citizenID: this.citizenID 
      }



      axios.post("http://localhost:5000/user/create", user)
        .then(res => {
          if (res.data.success){
            alert("Register Successfully");
            this.$router.replace("/")
          }
        })
    
    },
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://fonts.googleapis.com/css2?family=Roboto');

.termOfUse{
  color: hsl(227, 58%, 65%);;
  margin-top: 10px;
  font-size: 10px;
}

.signUpDescription{
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: white;
  margin-top: 24px;
  font-size: 24px;
}

#signUpContainer{
  background-image: url("../assets/tsignup_img.jpg");
  background-size: cover;
  height: 60rem;
}

.v-btn{
  width: 360px;
  background-color: hsl(227, 58%, 65%);
}

.v-card-title{
  text-align: center;
}

.v-text-field{
  width: 360px;
}

.v-form{
  top: 0px;
  position: relative;
  left: 40px;
}

.v-card{
  position: absolute;
  width: 440px;
  left: 548px;
  height: 54rem;
  top:  100px;
}

.myPageName{
    opacity: 100%;
    left: 50px;
    top: 10px;   
    position: absolute;
}
</style>

