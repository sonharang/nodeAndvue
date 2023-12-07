<template>
  <!-- <nav>
    <router-link to="/">사원목록</router-link> |
    <router-link to="/empInsert">사원등록</router-link> |
  </nav> -->
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/FooterComponent.vue";
export default {
  components: {
    Header: Header,
    Footer: Footer,
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
