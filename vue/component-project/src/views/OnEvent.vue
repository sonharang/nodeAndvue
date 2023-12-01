<template>
  <div>
    <button type="button" v-on:click="increaseCounter">ADD 1</button>
    <input v-model.number="num" />
    <button type="button" @click="setCount(num, $event), msg()">
      ADD {{ num }}
    </button>
    <p>The Counter is : {{ Counter }}</p>
    <hr />
    <form @click.self="msg('form')">
      Form
      <div @click="msg('div')">
        Div
        <p @click.stop="msg('p')">
          P
          <br />
          <a @click.prevent="msg('a')" href="http://www.naver.com">A</a>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Counter: 0,
      num: 7,
    };
  },
  methods: {
    increaseCounter(e) {
      console.log(e);
      this.Counter++;
    },
    setCount(value, event) {
      console.log(event);
      this.Counter = this.Counter + value;
    },
    msg(msg) {
      alert(`${msg} 선택!`);
    },
  },
};
</script>
<style scoped>
form,
form * {
  margin: 10px;
  border: 5px solid yellowgreen;
}
</style>
