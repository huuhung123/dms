<template>
  <div class="adminimage">
    <v-container>
      <v-row>
        <v-col md="auto">
          <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            :permanent="permanent"
            :src="bg"
            absolute
            dark
          >
        
             <v-list dense nav class="py-0">
              <v-list-item two-line :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                  <img src="../../assets/signup_img.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
<!-- 
                 <v-list-item-title>Admin</v-list-item-title>
                 <v-list-item-subtitle>Last signing up: 26/07/2020</v-list-item-subtitle> UserName here-->
            <h2 style="color: white; text-shadow: 1px 1px 20px red;">Hi {{ username }}</h2>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <!--<v-list-item link>-->

              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <router-link :to="item.link">
                  <v-list-item-content>
                    <v-list-item-title style="color: white; text-decoration: none;">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </router-link>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
      </v-row>
      <v-content>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="auto">
            <h2 style="color: white; text-shadow: 1px 1px 20px red;">It's {{ timestamp }}. UPDATE INFO</h2>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col md="lg">     
            <v-card style="margin-left: 150px; margin-right: -140px;" light>
              <v-card-title>
              Update your exact info here. You will be responsible for what you provide us.
                <v-spacer></v-spacer>
                
            </v-card-title>
        

                        <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                        >
                        <v-row>

        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Name"
            v-model="t_name"
          ></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
            Your name in database is:  {{name}}
        </v-col>
     <v-col cols="12" sm="6" md="6px">
          <v-text-field
           v-model="t_address"
            label="Address"
          ></v-text-field>
        </v-col>
        <v-col cols="24" sm="12" md="6">
             Your current address: {{address}}
        </v-col>

        <v-col cols="12" sm="6" md="6px">
          <v-text-field
           v-model="t_currentDisease"
            label="Current symptoms"
          ></v-text-field>
        </v-col>
        <v-col cols="24" sm="12" md="6">
            Your current symptoms:  {{currentDisease}}
        </v-col>
         <v-col cols="12" sm="6" md="6px">
          <v-text-field
          v-model="t_citizenID"
            label="Current citizenID"
          ></v-text-field>
        </v-col>
        <v-col cols="24" sm="12" md="6">
            Your current citizenID:  {{citizenID}}
        </v-col>
      </v-row>

     <v-dialog v-model="displayMess" persistent max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="updateInfo()"
        >
          Update
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Update Info</v-card-title>
        <v-card-text>Your info has been updated.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>          
          <v-btn  text @click="displayMess = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

                         
  </v-form>
             
            </v-card>
          </v-col>
        </v-row>
      </v-content>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name:"hien",
      t_name:"",
      address: 'hi!',
      t_address:"",
      currentDisease:'', 
      t_currentDisease:"",
      citizendID:'',
      t_citizenID:"",
      displayMess:false,
      expanded: [],
      singleExpand: false,
      drawer: true,
      index:0,
      username:"Hien",
      timestamp:"",
      items: [
        {
          username:"test"
        },
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          link: "dashboard",
        },
        {
          title: "Duty",
          icon: "mdi-hours-24",
          link: "dashboard/duty",
        },
        {
          title: "Security",
          icon: "mdi-security",
          link: "security",
        },
        {
          title: "Student's Health",
          icon: "mdi-cards-heart",
          link: "health",
        },
        {
          title: "Student's Feedback",
          icon: "mdi-chat",
          link: "feedback",
        },
        {
          title: "Sanitation (COVID-19)",
          icon: "mdi-hand-water",
          link: "sanitation",
        },
        {
          title: "Visitor Record",
          icon: "mdi-clover",
          link: "record",
        },
        { title: "Logout", icon: "mdi-logout-variant", link: "../signin" },
      ],
      permanent: true,
      background: false,

      search: "",
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: true,
          value: "dormUID",
        },
        { text: "Title", value: "name" },
        { text: "Content", value: "MessageContent" },
       ],
  
      
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
  
  created() {
    setInterval(this.getNow, 1000);
    this.getNow();
  },
  methods: {
 
    updateInfo()    
  {
      this.name=this.t_name;
      this.address=this.t_address;
      this.currentDisease=this.t_currentDisease;
      this.citizenID=this.t_citizenID;
  },

    getNow() {
      const today = new Date();
      const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      const time = (today.getHours()<10?'0'+today.getHours():today.getHours())+ ":" + 
                (today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())
         + ":" + (today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds());
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
};
</script>


<style scoped>
.adminimage {
  background-image: url("../../assets/signup_img.jpg");
  height: absolute;
  bottom:0px;
}


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

.v-row{
      top: 0px;
  position: relative;
  left: 40px;
}

.v-form{
  top: 0px;
  position: relative;
  left: 40px;
}


.myPageName{
    opacity: 100%;
    left: 50px;
    top: 10px;   
    position: absolute;
}
</style>

