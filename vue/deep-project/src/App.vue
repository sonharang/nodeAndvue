<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused" />
    <component v-bind:is="selected"></component>
  </div>
</template>

<script>
import PropsCom from "./components/PropsComponent.vue";
import SlotCom from "./components/TextModal.vue";
import Composition from "./components/CompositionInterface.vue";
import StoreCom from "./components/StoreComponent.vue";

export default {
  name: "app",
  data() {
    return {
      selected: "PropsCom",
      isFocused: false,
    };
  },
  components: {
    PropsCom, // => PropsCom : {}
    SlotCom,
    Composition,
    StoreCom,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  border: 1px solid #444444;
}
tr,
th,
td {
  border: 1px solid #444444;
  padding: 10px;
}
</style>
