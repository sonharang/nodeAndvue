//store.js
import { createStore } from "vuex";

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
    increment(state) {
      state.count++;
    },
    addProduct(state, info) {
      state.cart.push(info);
    },
  },
  //     actions: {
  //         addProduct(state, info) {

  //       }
  //   },
});

export default store;
