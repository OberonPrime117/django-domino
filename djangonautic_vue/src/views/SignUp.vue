<template>
    <div class="page-sign-up">
         <img class="self-logo logo" src="../assets/domino.png"><hr>
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Sign up</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        
                        <div class="control">
                            <input type="text" class="input" placeholder="Email" v-model="email">
                        </div>
                    </div>

                    <div class="field">
                        
                        <div class="control">
                            <input type="text" class="input" placeholder="Username" v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        
                        <div class="control">
                            <input type="password" class="input" placeholder="Password" v-model="password">
                        </div>
                    </div>

                    <div class="field">
                        
                        <div class="control">
                            <input type="password" class="input" placeholder="Confirm Password" v-model="password2">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button self-box has-text-white"> <b> Sign up</b></button>
                        </div>
                    </div>

                    <hr>

                    <b class="self-bold">Already have an account ? </b> <br> <br>
                    <router-link class="self-link" to="/log-in"> 
                        <b>Login --> </b>
                    </router-link>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            email:'',
            password: '',
            password2: '',
            errors: []
        }
    },
    methods: {
        submitForm() {
            this.errors = []
            if (this.username === '') {
                this.errors.push('The username is missing')
            }
            if (this.email === '') {
                this.errors.push('The username is missing')
            }
            if (this.password === '') {
                this.errors.push('The password is too short')
            }
            if (this.password !== this.password2) {
                this.errors.push('The passwords doesn\'t match')
            }
            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
                axios
                    .post("/api/users/", formData)
                    .then(response => {
                        toast({
                            message: 'Account created, please log in!',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'bottom-right',
                        })
                        this.$router.push('/log-in')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
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

.self-box {
    width: 220px;
    height:60px;
    font-size: 120%;
    margin-left:190px;
    border-radius: 60px;
    border-color: black;
    background-color:#008000;
}
.self-bold {
    margin-left: 190px;
    font-size: 150%;
    
}
.self-link {
    margin-left: 260px;
    font-size: 150%;
}
</style>