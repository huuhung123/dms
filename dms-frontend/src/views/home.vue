<template>
  <div>
    <v-app id="bg">
      <v-container fluid>
        <v-row align="center" justify="space-around" id="nav">
          <v-col md="0" style="margin-left: 40px;">
            <img src="../assets/home-logo.png" width="250px" height="auto" />
          </v-col>
          <v-col md="auto">
            <router-link id="menu" to="#">About Us</router-link>
            <router-link id="menu" to="#">News</router-link>
            <router-link id="menu" to="./sign-in">Sign In</router-link>
          </v-col>
        </v-row>
      </v-container>
      <v-content>
        <v-row align="center" justify="center" style="margin-top: 50px;">
          <v-col md="auto" id="description">
            <h1>WHY CHOOSE US ?</h1>
            <p>
              We're leading Vietnam's dormitory
              <br />management services
            </p>
            <v-btn color="primary" to="frequently-asked-question">
              <v-icon style="margin-right: 10px;">mdi-frequently-asked-questions</v-icon>Frequently Asked Question
            </v-btn>
            <v-btn color="error" to="sign-up" style="margin-left: 10px;">
              Register Now !
              <v-icon style="margin-bottom: -3px;">mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
          <v-col md="auto">
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_Jos3jH.json"  background="transparent"  speed="1"  style="width: 400px; height: 400px;"  loop autoplay></lottie-player>
          </v-col>
        </v-row>
      </v-content>
      <v-bottom-navigation id="navfooter">
        <v-row align="center" justify="center">
          <v-col md="auto">
            <p id="footer">© 2020 DMS Corporation • Developed by CLMCA Studio</p>
          </v-col>
        </v-row>
      </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import url("https://fonts.googleapis.com/css2?family=Roboto");

#nav {
  /*
	background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
	*/
  height: 80px;
  margin-top: -12px;
  margin-bottom: -12px;
}

#menu {
  text-decoration: none;
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  margin-right: 30px;
  font-family: "Quicksand", sans-serif;
  text-shadow: 1px 1px 20px black;
}

#menu:hover {
  opacity: 60%;
}

#bg {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}

#description {
  font-family: "Quicksand", sans-serif;
}
#description h1 {
  font-size: 48px;
  color: white;
  text-shadow: 1px 1px 20px black;
}

#description p {
  font-size: 30px;
  color: white;
  text-shadow: 1px 10px 20px black;
}

#navfooter {
  /*
	background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
	*/
  background-color: transparent;
  position: fixed;
  text-shadow: 1px 1px 100px black;
}

#footer {
  color: white;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
}
</style>
