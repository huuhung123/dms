<template>
    <div>
        <header class="header">
            <img src="../assets/home-logo.png" alt="" />
            <nav>
                <ul>
                    <li><router-link to="#" id="about">About Us</router-link></li>
                    <li><router-link to="#" id="news">News</router-link></li>
                    <li><router-link to="./signin" id="signIn" style="padding-right:20px; position:relative;">Sign In</router-link></li>
                </ul>
            </nav>
        </header>
        <section class="description">
            <div class="description__content">
                <h2>WHY CHOOSE US?</h2>
                <p>We're leading Vietnam's dormitory renting service.</p>
                <p>Start your exploration with us now!</p>
                <div class="description__button">
                    <v-btn class="text-decoration-none" color="red" dark  to="frequently-asked-question">Frequently Asked Question</v-btn>
                    <v-btn class="text-decoration-none" color="blue" dark  to="sign-up">Register Now</v-btn>
                </div>
            </div>
            <img src="../assets/img_des.png" alt="">
        </section>
        <footer class="footer">
            <p>© 2020 DMS Corporation • Developed by CLMCA Studio</p>
        </footer>
    </div>
</template>

<script>
//import DetailView from './detail'

export default {
    //components: { Detail },
    data: () => ({
    
    })
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://fonts.googleapis.com/css2?family=Roboto');

  /* Navigation Bar */

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

/* Description */
.description {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 0;
    background-image: url(../assets/bg-home.jpg);
    background-repeat: no-repeat;
    width: 100%;
    height: 40rem;
}

.description img {
    width: 30%;
}

.description__content h2 {
    font-size: 48px;
    color: rgb(16, 61, 112);
}

.description__content p {
    font-size: 24px;
    color: rgb(16, 61, 112);
}

.description__button .v-btn {
    margin: 0 10px;
}

.footer {
    width: 100%;
    background-color: #1867c0;
}

.footer p {
    color: white;
    text-align: center;
    padding: 20px 0;
}

</style>