<template>
  <div class="page-category">
    <div class="columns is-multiline ">
        <div class="column is-12">
            <h2 class="is-size-2 has-text-white live has-text-centered">{{ category.name }}</h2>
        </div>
        <div
            class="column is-3 pallet"
            v-for="product in category.products"
            v-bind:key="product.id"
        >
            <div class="box">
            <figure class="image mb-4">
                <img v-bind:src="product.get_thumbnail">
            </figure>

            <h3 class="is-size-4">{{ product.name }}</h3>
            <p class="is-size-6 has-text-grey">${{ product.price }}</p>

            <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">View Details</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'
export default {
    name: 'Category',
    data() {
        return {
            category: {
                products: []
            }
        }
    },
    mounted() {
        this.getCategory()
    },
    watch: {
        $route(to, from) {
            if (to.name === 'Category') {
                this.getCategory()
            }
        }
    },
    methods: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug

            this.$store.commit('setIsLoading', true)

            axios
                .get(`/api/products/${categorySlug}/`)
                .then(response => {
                    this.category = response.data
                    document.title = this.category.name + ' | Hello'
                })
                .catch(error => {
                    console.log(error)

                    toast({
                        message: 'Something went wrong. Please try again.',
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right',
                    })
                })

            this.$store.commit('setIsLoading',false)
        }
    }
}
</script>

<style>
.page-category {
   background-color:#580000;
   padding-bottom:320px;
}
.live {
   padding-top:20px;
}
.pallet {
    margin-left: 25px;
}
</style>
