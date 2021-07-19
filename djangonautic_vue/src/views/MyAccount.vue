<template>
    <div class="page-my-account">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">My account</h1>
            </div>

            <div class="column is-12">
                <button @click="logout()" class="button is-danger">Log out</button>
            </div>

            <hr>
            <!-- THIS AREA IS ONLY FOR ACCOUNT STUFF LIKE PICTURES AND STATUS DUMB SHIT , REFER TO ACCOUNT CODE FROM PREV PROJ 

            NEW PLAN : 
            1) CHANGE PASSWORD GOES HERE 
            2) YOUR USERNAME AND PASSWORD(PASS IS **** FORMAT)
            3) LOG OUT BUTTON - DONE
            4) DELETE ACCOUNT
            5) TRACK YOUR ORDER
            6) FAVOURITE DISHES
            7) PREVIOUS ORDERS
            -->
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import OrderSummary from '@/components/OrderSummary.vue'
export default {
    name: 'MyAccount',
    components: {
        OrderSummary
    },
    data() {
        return {
            orders: []
        }
    },
    mounted() {
        document.title = 'My account | Domino'
        this.getMyOrders()
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

