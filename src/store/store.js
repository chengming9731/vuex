import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    // 存储数据
    state: {
        products: [
            {name: "马云", price: 200},
            {name: "马化腾", price: 140},
            {name: "马冬梅", price: 20},
            {name: "马蓉", price: 10}
        ]
    },
    // 获取数据
    getters: {
        saleProducts: state => {
            var sale = state.products.map(product => {
                return {
                    name: '**' + product.name + "**",
                    price: product.price / 2
                };
            });
            return sale;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            // setTimeout(function () {
            state.products.forEach(product => {
                product.price -= payload;
            })
            // },2000);
        }
    },
    actions: {
        reduces: (context, payload) => {
            setTimeout(function () {
                context.commit("reducePrice", payload);
            }, 2000);
        }
    }
});
