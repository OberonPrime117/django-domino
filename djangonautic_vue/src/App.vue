<template>
  <div id="wrapper" >
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-brand is-one-quarter-fullhd">
          <router-link to="/">
            <img class="logo" src="./assets/domino.png">
          </router-link>
        </div>
        <a class="navbar-burger" style="" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu " id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
        <div class="navbar-start is-one-quarter-fullhd">
          <div class="navbar-item">
            <form method="get" action="/search">
              <div class=" field has-addons">
                <div class="control">
                  <input type="text" class="input is-rounded" value="what are you doing?" name="query">
                </div>

                <div class="control">
                  <button class="button is-success">Search
                    <span class="icon">
                    <i class="fas"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div class=" level new-line">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger navbar-item has-text-centered">
            CATEGORY OF FOOD
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <a href="/burgers" class="dropdown-item">Burgers</a>
                <a href="/chinese-noodles" class="dropdown-item">Chinese Noodles</a>
                <a href="/nachos" class="dropdown-item">Nachos</a>
                <a href="/pizza" class="dropdown-item">Pizza</a>
                <a href="/subway" class="dropdown-item">Subway</a>
              </div>
            </div>
          </div>
        </div>
        

        <router-link to="/subway" class="navbar-item ">STORE FINDER</router-link>
        <router-link to="/contact" class="navbar-item">CONTACT</router-link>
        </div>
        <div class="empty-area navbar-end ">
        

          <div class="navbar-item">
            <div class="buttons empty-area">
              <template v-if="$store.state.isAuthenticated">
                <!--<router-link to="/my-account" class="button is-light">My account</router-link>-->
                  <button @click="logout()" class="button is-danger">Log out</button>
              </template>
              

              <template v-else>
              <router-link to="/log-in" class="empty-area button  is-link">Login</router-link>
              </template>
              
              <template v-if="$store.state.isAuthenticated">
                <router-link to="/cart" class="button is-success"> 
                  <span class="icon">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                  <span>Cart ({{ cartTotalLength }})</span>
                </router-link>
              </template>
              <template v-else>
                <router-link to="/sign-up" class="empty-area button is-purple"><b>  Sign Up</b></router-link> 
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
      <div class="lds-dual-ring"></div>
    </div>

    <section class="section" style="padding:0">
      <router-view/>
    </section>

    
  </div>
</template>

<script>
import axios from 'axios'
import OrderSummary from '@/components/OrderSummary.vue'

export default {
  components: {
        OrderSummary
  },
  data() {
    return {
      orders: [],
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
    this.getMyOrders()
  },
  computed: {
    cartTotalLength() {
        let totalLength = 0

        for(let i =0; i < this.cart.items.length; i++) {
          totalLength += this.cart.items[i].quantity
        }

        return totalLength
    }
  },
  methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$router.push('/')
            window.location.reload();
        },
        async getMyOrders() {
            this.$store.commit('setIsLoading', true)
            await axios
                .get('/api/orders/')
                .then(response => {
                    this.orders = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>


<style lang="scss">
@import '../node_modules/bulma';

.logo {
  margin-left: 80px;
  margin-top: 10px;
  margin-right: 20px;
}
.is-purple {
  color:purple;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: "";
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading {
    height: 80px;
  }
}
.new-line {
  margin-top: 8px;
}

@media (max-width:1295) and (min-width:1024) {
  

}
</style>
