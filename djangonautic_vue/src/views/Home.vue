<template>
  <div class="home">
    <div class="bg-image-2" >
      <img src="../assets/mobile-burger-2.jpg" alt="">
    </div>
    <section class="hero  bg-image mb-6" >
      <div class="hero-body"> 
        <div class="post-container">                
          <div class="post-thumb"></div>
          <div class="post-content">
            <h3 class="post-title has-text-white">Grilled Chicken Burger with a FREE mustard sauce.</h3>
            <p class="info has-text-white">Roasted Chicken Burger with FREE french fries. 
              <br>Get a FREE medium fry with any premium sandwich purchase with the offer in our app.<br> Not gonna lie, following our Grilled Chicken Burger isn’t easy. 
              <br> But if anything can do it and do it well, it’s our fries—especially when they’re free.</p>
              <br><br>
              <div class="buttons">
                <button class="app-button button is-info">START YOUR ORDER</button>
              </div>
              
              
              <a href="https://m-wendys-web.app.link/e/web-bogo-1-premium-cheeseburger-download-on-the-app-store-icon-homepage">
                <img class="no-element" src="../assets/apple.webp" /> 
              </a>
              
              <a href="https://m-wendys-web.app.link/e/web-bogo-1-premium-cheeseburger-get-it-on-google-play-icon-homepage">
                <img class="no-element-2" src="../assets/play.webp" /> 
              </a>
              
          </div>
          
        </div>
      </div>
    </section>

    <div class="columns is-3 is-multiline pads">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-white has-text-centered">Latest products</h2>
      </div>
    </div>
    
      <div class="is-3 columns pads size-pv">
      <ProductBox 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
      </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox'

export default {
  name: 'Home',
  data() {
    return {
      latestProducts: [],
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getLatestProducts()

    document.title = 'Home | Domino'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading',true)
      axios
        .get('/api/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })
      this.$store.commit('setIsLoading',false)
    },
    
  }
}
// use #430000 in .home for same color as bg
</script>

<style>
  .home {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color:#580000;
  }
  .app-button {
    width:20rem; 
    font-size: x-large;
    font-weight: bold;
  }
  .bg-image-2 {
  display:none;
  }

  .image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }
  .info {
    font-size: large;
  }
  .no-element {
    width:260px; 
    height:90px; 
  }
  .no-element-2 {
    width:260px; 
    height:90px; 
    margin-left:20px;
  }

  .pads {
    padding: 0;
  }
  .post-container {
    margin: 20px 20px 0 0;  
    border: 5px;
    overflow: auto
}
.post-thumb {
    float: left;
    margin-right: 200px;
}
.post-thumb > img {
    display: block
}
.bg-image {
  background-image: url(../assets/burger-wendy.jpg);
  margin-left: 210px;
  margin-right: 210px;
  background-size: 1500px 625px;
}
.post-content {
  font-family: Arial, Helvetica, sans-serif;
}

.post-title {
    font-weight: bold;
    font-size: 200%
}
@media (max-width:1718px) and (min-width:400px) {
  .bg-image {
  background-image: url(../assets/burger-wendy.jpg);
  margin-left: 210px;
  margin-right: 210px;
  background-size: 1300px 725px;
  }
}
@media (max-width:1150px) and (min-width:516px) {
  .no-element {
    width:140px; 
    height:40px; 
    margin-left: 20px;
  }
  .no-element-2 {
    width:140px; 
    height:40px; 
    margin-left:20px;
  }
}

@media (max-width:776px) and (min-width:400px) {
  
  .bg-image {
  width: 800px;
  height: 500px;
  margin-left: -20px;
  background-image: url(../assets/maroon-bg.jpg);
  }
  .bg-image-2 {
  width: 800px;
  display: flex;
  background-image: url(../assets/burger-wendy.jpg);
  height: 200px;

  }
  .mobile-burg {
  width: 600px;
  height: 250px;
  margin-bottom : -20px;
  }
  
  .post-title {
    font-weight: bold;
    width:300px;
    height:80px;
    text-align: center;
    font-size: 120%;
    margin-left: 200px;
    margin-bottom: 5px;

  }
  .info {
    font-size: medium;
    width: 500px;
    margin-left: 50px;
    height:150px;
    
    margin-right: 90px;
  }
  .app-button {
    width:15rem; 
    font-size: medium;
    font-weight: bold;
    margin-left: 50px;
    float:left;
  }
  
  .no-element {
    width:190px; 
    height:60px; 
    margin-left: 20px;
    
  }
  
  .no-element-2 {
    width:190px; 
    height:60px; 
    margin-left:20px;
    
  }
  
}
  @media (max-width:1028px) and (min-width:770px) {
    .size-pv {
      width:800px;
      padding: 0%;
      margin:0%;
    }
  }


@media (max-width:516px) {
  
  .bg-image {
  width: 600px;
  height: 500px;
  margin-left: -20px;
  }
  .bg-image-2 {
  width: 600px;
  display: flex;
  background-image: url(../assets/burger-wendy.jpg);
  height: 200px;

  }
  .mobile-burg {
  width: 400px;
  height: 250px;
  margin-bottom : -20px;
  }
  
  .post-title {
    font-weight: bold;
    width:300px;
    height:80px;
    text-align: center;
    font-size: 120%;
    margin-left: 35px;
    margin-bottom: 5px;

  }
  .info {
    font-size: small;
    width: 300px;
    height:150px;
    margin-left: 10px;
  }
  .app-button {
    width:15rem; 
    font-size: medium;
    font-weight: bold;
    margin-left: 50px;
  }
  
  .no-element {
    width:160px; 
    height:60px; 
    margin-left: 20px;
  }
  
  .no-element-2 {
    width:160px; 
    height:60px; 
    margin-left:20px;
  }
  
}

</style>