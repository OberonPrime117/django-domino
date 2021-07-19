<template>
   <div class="page-product">
        <div class="columns is-multiline" style="margin-top:-6.5rem">
            <div class="column wendy is-one-quarter-fullhd  is-5">
                <figure class="image mb-6">
                        <img v-bind:src="product.get_image">
                </figure>
            </div>

            <div class="description box is-three-quarter-fullhd  column" >
                <h1 class="title has-text-centered"> <strong>{{ product.name }}</strong></h1>
                <br>
                <div class=" info-cart left-align">
                <h3 class="subtitle has-text-weight-medium"><strong>Description</strong></h3>
                <p style="width:200px">{{ product.description }}</p><br>

                <div class="box" style="background-color:#F4E3FC; width:270px">
                    <h3> <strong>Allergens</strong> </h3>
                    <p><span v-html="product.allergens"></span></p>
                </div>

                <p><strong>Price : </strong>${{ product.price }}</p>
                <div class="field has-addons mt-6">
                    <div class="control">
                        <input type="number" class="input" min="1" v-model="quantity">
                    </div>

                    <div class="control">
                        <a class="button is-dark" @click="addToCart">Add to cart</a>
                        <br><br><br>
                    </div>
                </div>
                </div>
                <div class="is-three-quarters-fullhd ingredients" style="float:right">
                    <h3 class="subtitle has-text-weight-medium"><strong>Ingredients</strong></h3>
                    <p style="width:400px"><span v-html="product.ingredients"></span></p><br>                    
                </div>

            </div>

            
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Product',
    data() {
        return {
            product : {},
            quantity : 1,
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            this.$store.commit('setIsLoading',true)

            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            await axios
                .get(`/api/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data
                })
                .catch(error => {
                    console.log(error)

                })
            this.$store.commit('setIsLoading', false)
        },
        addToCart() {
            console.log('working')
            if(isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1
            }

            const item = {
                product: this.product,
                quantity: this.quantity
            }

            this.$store.commit('addToCart', item)
        },
        favouriteProduct() {
            console.log("pressed")
            const fav = {
                product: this.product,
            }

            this.$store.commit('favouriteProduct', fav)
        }
    }
}
</script>

<style scoped>

.image {
    margin-top: 15.25rem;
    margin-left: 5rem;
    width: 600px;
    }
.description {
    margin-top: 105px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.box {
    width: 1000px;
}
.left-align {
    float: left;
    left: 0px;
    width: 300px;
    border: 3px;
    padding: 10px;
}

.right-align {
    float: right;
    right: 0px;
    width: 500px;
    border: 3px;
    padding: 10px;
}
.title {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.wendy {
    margin-top: 6.5rem;
    background-image: url('../assets/background-img.png');
    width: 780px;
}

@media (min-width:1408px) {
    .ingredients {
        margin-right:80px;
    }
    .info-cart {
        margin-left:80px;
    }
}
@media (max-width:1640px) and (min-width:1430px) {
    .ingredients {
        margin-right:220px;
    }
    .info-cart {
        margin-left:100px;
    }
}
@media (max-width:1430px) and (min-width:1215px) {
    .ingredients {
        margin-right:120px;
        margin-left:20px;
    }
    .info-cart {
        margin-left:50px;
    }
}
@media (max-width:1319px) and (min-width:1215px) {
    .wendy {
    margin-top: 6.5rem;
    background-image: url('../assets/background-img.png');
    width: 1319px;
    }
    .image {
    margin-top: 5.25rem;
    margin-left: 5rem;
    width: 600px;
    }
}
@media (max-width:1215px) and (min-width:1024px) {
    .ingredients {
        margin-right:120px;
    }
    .info-cart {
        margin-left:50px;
    }
    .wendy {
    margin-top: 6.5rem;
    background-image: url('../assets/background-img.png');
    width: 1215px;
    }
    .image {
    margin-top: 5.25rem;
    margin-left: 5rem;
    width: 600px;
    }
}
@media (max-width:1023px) and (min-width:769px) {
    .info-cart {
        margin-left: 60px;
    }
    .ingredients {
        margin-right: 70px;
    }
    .wendy {
    margin-top: 6.5rem;
    background-image: url('../assets/background-img.png');
    width: 1023px;
    }
    .image {
    margin-top: 5.25rem;
    margin-left: 5rem;
    width: 600px;
    }
}
</style>
