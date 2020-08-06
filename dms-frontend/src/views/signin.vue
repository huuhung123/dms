<template>
  <div>
    <v-app id="signUpContainer">
      <v-content>
        <v-row align="center" justify="center" style="margin-top: 120px;">
          <v-col md="auto">
            <img src="../assets/home-logo.png" width="250px" />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col md="auto">
            <v-card max-width="700" outlined color="hsl(220, 8%, 23%)">
              <div class="signInDescription">
                <p>
                  <b>Welcome back!</b>
                </p>
              </div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  dark
                  v-model="username"
                  outlined
                  label="Username"
                  id="username-input"
                  required
                ></v-text-field>

                <v-text-field
                  dark
                  v-model="password"
                  outlined
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  label="Password"
                  id="password-input"
                  required
                ></v-text-field>

                <div class="forgotPassword">
                  <a
                    href="/"
                    style="text-decoration:none; color:hsl(227, 58%, 65%);"
                  >Forgot your password?</a>
                </div>

                <v-btn
                  class="white--text"
                  color="hsl(227, 58%, 65%)"
                  @click="checkSigningIn"
                >Continue</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    show1: false,
    username: "",
    password: "",
    datalist:[
        { username:"hien",
          password:"123456",
          id:"1810913",
        },
        { username:"hung",
          password:"654321",
          id:"1810923",
        },
    ]
  }),
  
 
  methods: {
    checkSigningIn() {
      let username = this.username;
      let password = this.password;
      var check=false;
      if (username === "admin" && password === "admin") {
        this.$router.replace("/dashboard");
    } else{  var temp=this.searchConfirm(username,password);
              if(temp===undefined){
                  alert("Wrong username or password!");                  
                  check=true;
              }
              if(temp&&!check){                                            
                this.$router.replace(`/user-view/${temp}/report`)
              } 
          }
    },
      searchConfirm(username,inputPass){        
      var exam=this.datalist.find(datalist=>datalist.username===username);    
      if (exam.password===inputPass)      
          return exam.id;
      return undefined
  },
  },
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import url("https://fonts.googleapis.com/css2?family=Roboto");
.forgotPassword {
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: hsl(227, 58%, 65%);
  top: 150px;
  margin-bottom: 20px;
}
.forgotPassword:hover {
  opacity: 80%;
}
.signInDescription {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: white;
  padding-top: 24px;
  font-size: 24px;
}
#signUpContainer {
  background-image: url("../assets/tsignin_img.jpg");
  background-size: cover;
  height: 1;
}
.v-btn {
  margin-top: 10px;
  width: 360px;
  background-color: hsl(227, 58%, 65%);
}
.v-card-title {
  text-align: center;
}
.v-text-field {
  width: 360px;
}
.v-form {
  top: 0px;
  position: relative;
  left: 40px;
}
.v-card {
  width: 440px;
  height: 340px;
}
.myPageName {
  opacity: 100%;
  left: 50px;
  top: 10px;
  position: absolute;
}
</style>