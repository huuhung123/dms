<template>
  <div>
  <span id="background"></span>
    <v-app>
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
                  <v-list-item-title>Admin</v-list-item-title>
                  <v-list-item-subtitle>Last signing up: 26/07/2020</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <!--<v-list-item link>-->

              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <router-link :to="item.link" style="text-decoration: none;">
                  <v-list-item-content>
                    <v-list-item-title style="color: white;">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </router-link>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
      <v-content>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="auto">
            <h2 style="color: white; text-shadow: 1px 1px 20px red;">It's {{ timestamp }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="auto">
            <v-btn rounded color="primary" style="margin-top: -10px;" @click="addNewDuty = true">
              <v-icon>mdi-plus</v-icon>Add new security record
            </v-btn>
            <v-dialog v-model="addNewDuty" width="600px">
              <v-card>
                <v-card-title>Security case</v-card-title>
                <v-form>
                  <v-text-field
                    v-model="dutyName"
                    placeholder="Case name"
                    outlined
                    style="margin-left: 20px; margin-right: 20px;"
                  ></v-text-field>
                  <v-textarea
                    v-model="dutyContent"
                    placeholder="Detail"
                    outlined
                    style="margin-left: 20px; margin-right: 20px; margin-top: -15px;"
                  ></v-textarea>
                </v-form>
                <v-spacer></v-spacer>
                <v-card-actions style="margin-left: 10px; margin-top: -30px; margin-bottom: 20px;">
                  <v-btn color="green darken-1" text @click="createNewDuty()">Add security case</v-btn>
                  <v-btn color="red darken-1" text @click="addNewDuty = false">
                    Exit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col md='3'>

          </v-col>
          <v-col md="auto">
            <v-card
              :key="n" v-for="n in dutyNumber"
              width="800"
              height="300"
              style="margin-bottom: 10px;"
            >
              <v-card-title
                style="color: red; font-size: 30px;"
              >
                {{ duty.name[n - 1]}}
              </v-card-title>
              <v-card-text
                style="color: black; font-size: 18px;"
              >
                {{ duty.content[n - 1]}}
              </v-card-text>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardTitle: 'INFORMATION ABOUT NATIONAL CONFERENCE',
      dutyName: '',
      dutyContent: '',
      duty: {
          name: [],
          content: [],
      },
      dutyNumber: 0,
      addNewDuty: false,
      timestamp: "",
      expanded: [],
      singleExpand: false,
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          link: "../dashboard",
        },
        {
          title: "Duty",
          icon: "mdi-hours-24",
          link: "duty",
        },
        {
          title: "Security",
          icon: "mdi-security",
          link: "../dashboard/security",
        },
        {
          title: "Student's Health",
          icon: "mdi-cards-heart",
          link: "../dashboard/health",
        },
        {
          title: "Student's Feedback",
          icon: "mdi-chat",
          link: "../dashboard/feedback",
        },
        {
          title: "Sanitation (COVID-19)",
          icon: "mdi-hand-water",
          link: "../dashboard/sanitation",
        },
        {
          title: "Visitor Record",
          icon: "mdi-clover",
          link: "../dashboard/record",
        },
        { title: "Logout", icon: "mdi-logout-variant", link: "../signin" },
      ],
      permanent: true,
      background: false,
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
    createNewDuty() {
      this.duty.name[this.dutyNumber] = this.dutyName;
      this.duty.content[this.dutyNumber] = this.dutyContent;
      this.dutyNumber += 1
    },
    getNow() {
      const today = new Date();
      const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() ;
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
};
</script>

<style scoped>
#background {
  /*ackground-image: url("../assets/signup_img.jpg");*/
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
