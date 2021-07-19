<template>
    <div>
        <img class="self-logo logo" src="../assets/domino.png">
        <hr>
        <form @submit.prevent="handleSubmit">
        <h3>Forgot Password</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email" />
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Forgot',
        data() {
            return {
                email: ''
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios
                .post('api/users/reset_password/', {
                    email: this.email
                })
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e);
                })
            }
        }
    }
</script>