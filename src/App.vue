<template>
    <div id="app">
        <product-one></product-one>
        <product-two></product-two>
    </div>
</template>

<script>
    import ProductOne from "./component/ProductOne.vue"
    import ProductTwo from "./component/ProductTwo.vue"
    export default {
        name: 'app',
        components: {
            'product-one': ProductOne,
            'product-two': ProductTwo
        },
        data () {
            return {}
        }
    }
</script>

<style>
    body {
        color: #555;
    }
</style>
