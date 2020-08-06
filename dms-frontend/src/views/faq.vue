<template>
  <v-app>
    <div class="banner"></div>
      <div class="myPageName"><img src="../assets/home-logo.png" height="60px"></div>
      <div class="faq-item">
      <v-card>
      <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            tile=""
            unbounded
            dark
            max-width="560"
          >
            <v-card-title class="headline">Cách tính tiền điện nước tại Ký túc xá?</v-card-title>
            <v-card-subtitle>
              Ký túc xá tính giá điện nước là 1tr/1kWh và 2tr/1m^3, ở được thì ở
              không thì thôi
            </v-card-subtitle>
          </v-card>

          <div class="pad-for-faq">
          <v-card
            color="#385F73"
            tile=""
            unbounded
            dark
            max-width="560"
          >
            <v-card-title class="headline">Giờ giấc sinh hoạt tại Ký túc xá như thế nào?</v-card-title>
            <v-card-subtitle>
              Ký túc xá chủ trương sinh hoạt lành mạnh, ngủ lúc 8h tối
              và thức dậy lúc 5h30 sáng mỗi ngày tập thể dục 
            </v-card-subtitle>
          </v-card>
          </div>
          <div class="pad-for-faq">
          <v-card
            color="#385F73"
            tile=""
            unbounded
            dark
            max-width="560"
          >
            <v-card-title class="headline">Có được nuôi thú trong Ký túc xá không?</v-card-title>
            <v-card-subtitle>
              Ký túc xá khuyến khích các bạn nuôi thú, thú càng
              to càng tốt
            </v-card-subtitle>
          </v-card>
          </div>
          <div class="pad-for-faq">
          <v-card
            color="#385F73"
            tile=""
            unbounded
            dark
            max-width="560"
          >
            <v-card-title class="headline">Giá tiền phòng hàng tháng tại Ký túc xá?</v-card-title>
            <v-card-subtitle>
              Giá tiền phòng hàng tháng của Ký túc xá là 69tr/ tháng,
              có thể deal với anh Hoàng Văn Cường
            </v-card-subtitle>
          </v-card>
          </div>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
          </v-card>
        </v-col>  
      </v-row>
    </v-container>
  </v-card>
      </div>
  </v-app>
</template>

<script>
export default {
    
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://fonts.googleapis.com/css2?family=Roboto');

.pad-for-faq{
  margin-top: 10px;
}

.faq-item{
  position: absolute;
  top: 100px;
  left: 480px;
}

.myTitle{
  position: absolute;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  text-align: center;
  width: 100%;
  color: white;
  top: 80px;
}

.myPageName{
  opacity: 100%;
  left: 643.745px;
  top: 10px;   
  position: absolute;
}

.banner{
  background-image: url("../assets/faq_img.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>