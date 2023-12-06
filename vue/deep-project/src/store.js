//store.js
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    //state 데이터 정의하는 부분
    return {
      cart: [
        {
          product_id: 1,
          product_name: "아이폰 거치대",
          category: "A",
        },
      ],
      count: 0,
    };
  },
  getters: {
    //computed와 비슷
    cartCount: (state) => {
      return state.cart.length;
    },
  },
  mutations: {
    //state만 변경가능
    increment(state) {
      state.count++;
    },
    addProduct(state, info) {
      state.cart.push(info);
    },
  },
  actions: {
    //전체 정보 불러와서 접근
    addProduct(context, info) {
      setTimeout(() => {
        context.commit("addProduct", info);
      }, 1000);
    },
  },
  plugins: [
    createPersistedState({
      paths: ["cart"],
    }),
  ],
});

export default store;
