<template>
    <div id="product-two">
        <h2>Product Two</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{product.name}}</span>
                <span class="price">&yen; {{product.price}}</span>
            </li>
        </ul>
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
            ])
        },
        methods: {
            ...mapActions([
                "reduces"
            ])
        }
    }
</script>

<style>
    #product-two {
        background: #d1e4ff;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    #product-two ul {
        padding: 0;
        list-style-type: none;
    }

    #product-two li {
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, .7);
    }

    #product-two .price {
        font-weight: bold;
        color: #860ce8;
        display: block;
    }
</style>
