Skip to content
Why GitHub? 
Team
Enterprise
Explore 
Marketplace
Pricing 
Search

Sign in
Sign up
autumn16
/
dms-frontend
100
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Join GitHub today
GitHub is home to over 50 million developers working together to host and review code, manage projects, and build software together.

dms-frontend/src/views/user-view/report.vue
@AloneFancy
AloneFancy 180913
Latest commit fb29b90 2 minutes ago
 History
 1 contributor
351 lines (327 sloc)  10 KB
  
<template>
  <div class="adminimage">
    <v-container         
        style="height: 100vh; max-height: 100%;"
    >
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
            <h5 style="color: white; text-shadow: 1px 1px 20px red;">{{ timestamp }}</h5>
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
            <h2 style="color: white; text-shadow: 1px 1px 20px red;">NOTIFICATION AND MESSAGES FROM ADMIN</h2>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col md="lg">     
            <v-card style="margin-left: 150px; margin-right: -140px;" light>
              <v-card-title>
              Message history  
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="users"
                :search="search"
                :single-expand="singleExpand"
                :expanded.sync="expanded"
                item-key="name"
                show-expand
              >
                <template v-slot:expanded-item="{ headers, item}">
                  <td :colspan="headers.length">
                      <v-btn
                        color="primary" 
                        dark
                        tile
                        style="margin-left: 25px; font-size: 12px;"
                        @click.stop="displayMess = true"
                      >
                        Open messages
                      </v-btn>

                       <v-btn
                        color="primary" 
                        dark
                        tile
                        style="margin-left: 50px; font-size: 12px;"
                        @click.stop="deleteRow(item.name)"
                      >
                       Delete messages
                      </v-btn>                      
                        <v-dialog v-model="displayMess" width="600">
                         <v-card>
                          <v-card-title 
                            class="headline"
                          >
                          {{item.name}}
                          </v-card-title>
                          <v-card-text
                            outlined
                            style="margin-left: 10px; margin-right: 10px;"
                            :value="`${item.MessageContent}`"                               
                          >                    
                          {{item.MessageContent}}  
                          </v-card-text>

                          <v-card-actions>
                          <v-btn color="green darken-1" text @click="displayMess = true">
                              Reply
                          </v-btn>    
                            <v-spacer></v-spacer>
                        
                            <v-btn color="green darken-1" text @click="displayMess = false">
                              Close
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
        

                  </td>
                </template>
              </v-data-table>
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
      informText: "",
      informLate: false,
      sendNoti: false,
      displayMess:false,
      expanded: [],
      singleExpand: false,
      drawer: true,
      index:0,
      username:"Hien",
      id:"1810913",
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
          title: "Update info",
          icon: "mdi-information",
          link: `../1810913/updateInfo`,
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
        { title: "Logout", icon: "mdi-logout-variant", link: "../signin" },
      ],
      permanent: true,
      background: false,
      search: "",
      headers: [
        { text: "Title", value: "name" },
        { text: "Content", value: "MessageContent" },
       ],
      users: [
        // {
        //   dormUID: "12-31-2020",
        //   name: "Quan Thanh Tho",
        //   MessageContent: 6.0,
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 24,
        //   uni: "University of Law",
        // },
        // {
        //   dormUID: "1811299",
        //   name: "Bui Hoang Thang",
        //   MessageContent: "*** YOU'RE LATE FOR PAYMENadadadadadT ***",
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 37,
        //   uni: "University of Economics",
        // },
        // {
        //   dormUID: "1811270",
        //   name: "Nguyen An Khuong",
        //   MessageContent: 16.0,
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 23,
        //   uni: "University of Science",
        // },
        // {
        //   dormUID: "1811271",
        //   name: "Le Dinh Duy",
        //   MessageContent: 3.7,
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 67,
        //   uni: "Bach Khoa University",
        // },
        // {
        //   dormUID: "1811272",
        //   name: "Luu Minh Tri",
        //   MessageContent: 16.0,
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 49,
        //   uni: "Bach Khoa University",
        // },
        // {
        //   dormUID: "1811273",
        //   name: "Nguyen Luan",
        //   MessageContent: 0.0,
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 94,
        //   uni: "Bach Khoa University",
        // },
        // {
        //   dormUID: "1811274",
        //   name: "Tran Nhu Buu",
        //   MessageContent: 0.2,
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 98,
        //   uni: "Bach Khoa University",
        // },
        // {
        //   dormUID: "1811275",
        //   name: "Pham Tho Quoc Long",
        //   MessageContent: 3.2,
        //   room: "1120AH1",
        //   email: "tri.luuminh@hcmut.edu.vn",
        //   phone: "0929347800",
        //   studentID: 87,
        //   uni: "Bach Khoa University",
        // },
        {
        name: "admin",
        MessageContent: "Dong hoc phi"
        },
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
 
    deleteRow(index)    
  {       
        var i;  
        for( i = 0; i < this.users.length; i += 1) {
        if(this.users[i].name === index)   break;          
        }        
        this.users.splice(i,1);      
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
  height:auto  ;
  
}
</style>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
