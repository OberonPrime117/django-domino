
<template>
    <div class="page-log-in">
       
        <hr>
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Sign in to view our Gorment dishes !!</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        
                        <div class="control">
                            <input type="text" class="input" v-model="username" placeholder="Username">
                        </div>
                    </div>

                    <div class="field">
                        
                        <div class="control">
                            <input type="password" class="input" placeholder="Password" v-model="password">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="box self-box button has-text-white "><b>LOG IN</b></button>
                        </div>
                    </div>

                    <hr>
                    <router-link to="/password-change" class=" password-blocks"> Forgot your password ?</router-link><br><br> <hr>
                    <h1 class="h1-new"><b>Don't have an account ?</b></h1>
                    <router-link to="/sign-up" class="box password-blocks-2 "><b>  SIGN UP FOR DOMINO PIZZA</b></router-link> 
                </form>
            </div>
            
        </div>
       
    </div>
</template>

<script>
import axios from 'axios';

export default {
    

    name: 'LogIn',
    
    data() {
        return {
            username: '',
            password: '',
            errors: [],

        }
    },
    mounted() {
        document.title = 'Log In';
    },
    methods: {
        async submitForm() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            const formData = {
                username: this.username,
                password: this.password
            }
            await axios
                .post("/api/token/login/", formData)
                .then(response => {
                    const token = response.data.auth_token
                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token
                    localStorage.setItem("token", token)
                    const toPath = this.$route.query.to || '/cart'
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        },

    }
}
</script>

<style scoped>
::placeholder {
    color : black;
}
.self-logo {
    margin-left: 840px;
   
}
.title {
    font-family:monospace;
}
.self-box {
    width: 220px;
    height:60px;
    font-size: 120%;
    margin-left:190px;
    border-radius: 60px;
    border-color: black;
    background-color:#008000;
}
.self-box:hover {
    border-color: black;
}
.password-blocks {
    font-size: 120%;
    color:green;
    margin-left:190px;
    
}
.password-blocks-2 {
    color:navy;
    border: black;
    border-radius: 60px;
    font-size: 130%;
    width: 600px;
    height:70px;
    background-color: #FFD700;
    margin-bottom: 0px;
    font-family: monospace;
    text-align: center;
}
.h1-new {
    font-size:120%;
    margin-left:190px;
    margin-bottom:50px;
}

</style>