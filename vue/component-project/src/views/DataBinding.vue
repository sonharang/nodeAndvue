<template>
  <div>
    <h1>{{ title + "!!" }}</h1>
    <h2 v-bind:name="'sample'" v-text="title" />
    <p v-html="tagList" />
    <!--v-html은 사용에 신중해야함 -->
    <p v-text="tagList" />
    <hr />
    <br />
    <input type="text" v-model="valueModel" /><br />
    <p>{{ typeof valueModel }}</p>
    <input
      type="number"
      v-model.lazy="numberModel"
    /><br /><!--버전 3부터 .number 안붙여도 숫자로 인식 -->
    <p>{{ 10 + numberModel + " " + typeof numberModel }}</p>
    <!--.lazy 붙이면 enter같은 실행시켜야 입력 -->
    <select v-model="selectModel">
      <br />
      <option value="Seoul">서울</option>
      <option value="Busan">부산</option>
      <option value="Daegu">대구</option>
    </select>
    <p>{{ selectModel }}</p>
    <textarea v-model="textModel">
<br>
        </textarea
    >
    <hr />
    <input
      type="checkbox"
      v-model="chData"
      true-value="눌림"
      false-value="풀림"
    /><br />
    <p>{{ chData }}</p>
    <div>
      <label><input type="checkbox" value="서울" v-model="city" />서울</label>
      <label><input type="checkbox" value="부산" v-model="city" />부산</label>
      <label><input type="checkbox" value="대구" v-model="city" />대구</label>
      <p>{{ city }}</p>
    </div>
    <div>
      <input type="radio" value="독서" v-model="hobby" /> 독서
      <input type="radio" value="영화" v-model="hobby" /> 영화
      <input type="radio" value="운동" v-model="hobby" /> 운동
      <p>{{ hobby }}</p>
      <hr />
    </div>
    <p>G.O.A.T</p>
    <img v-bind:style="styleData" v-bind:src="imgUrl" /><br />
    <hr />
    <div
      class="container"
      v-bind:class="{
        active: isActive,
        'text-red': hasError,
      }"
    >
      Class Binding First
    </div>
    <div class="container" v-bind:class="myClass">Class Binding Second</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Hello, Vue.js",
      tagList: "<strong>Today is ...</strong>",
      valueModel: "hi",
      numberModel: 0,
      selectModel: "Daegu",
      textModel: "Hmm....",
      chData: "",
      city: [],
      hobby: "운동",
      imgUrl:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt94c59f31f6bf707d/637588f532cbfb107070b900/GettyImages-1401702557.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      styleData: {
        backgroundColor: "skyblue",
        width: "600px",
      },
      isActive: false,
      //hasError : !this.isActive //초기값만 줌
      myClass: "active",
    };
  },
  computed: {
    //데이터 연관될때 사용 -> 같이 실행
    hasError() {
      return !this.isActive;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: yellowgreen;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
