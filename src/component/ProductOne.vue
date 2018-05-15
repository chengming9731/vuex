<template>
    <div id="product-one">
        <h2>Product One</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{product.name}}</span>
                <span class="price">&yen; {{product.price}}</span>
            </li>
        </ul>
        <button @click="reduces(4)">商品降价</button>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default{
        computed: {
            products(){
                return this.$store.state.products;
            },
            ...mapGetters([
                "saleProducts"
            ]),
            /*saleProducts(){
                return this.$store.getters.sale;
            }*/
        },
        methods: {
            ...mapActions([
                "reduces"
            ]),
            /*reduce:function (amount) {
                this.$store.state.products.forEach(product => {
                product.price -= 1;
            }),
            this.$store.commit('reducePrice');
                this.$store.dispatch("reduces",amount)
            }*/
        }
    }
</script>

<style>
    #product-one {
        background: #fff8b1;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    #product-one ul {
        padding: 0;
        list-style-type: none;
    }

    #product-one li {
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, .7);
    }

    #product-one .price {
        font-weight: bold;
        color: #f8800c;
        display: block;
    }
</style>
