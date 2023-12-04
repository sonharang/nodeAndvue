<template>
  <div class="container">
    <table class="table">
      <caption>
        Total :
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="idx"
          v-for="(user, idx) in userList"
          @click="goToUserInfo(user.user_id)"
        >
          <!-- user[user_no] -->
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.user_gender }}</td>
          <td>{{ dateFormat(user.join_date, "yyyy년 MM월 dd일") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userList: [],
    };
  },
  computed: {
    //수정되면 안될때 computed 사용하기도 함
    count() {
      return this.userList.length;
    },
  },
  created() {
    // 컴포넌트가 처음부터 마운트 되기전부터 데이터 들고 있어야하는 순간 created 사용(컴포넌트가 초기화할 데이터관련 진행)
    this.getUserList();
  },
  methods: {
    async getUserList() {
      let result = await axios.get("/api/users").catch((err) => {
        console.log(err);
      });
      let list = result.data;
      this.userList = list;
    },
    goToUserInfo(id) {
      console.log(id);
      this.$router.push({ path: "/userInfo", query: { userId: id } });
      //$.router -> 존재하는 라우터에 요청
      // name : route로 등록할 때 사용한 name 속성
      // params : path 속성이 '/target/:id'일때 {'id' : A}
    },
    dateFormat(value, format) {
      // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
      if (value == "") return "";
      // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
      let date = new Date(value);
      // 연도, 월, 일 추출
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);

      let result = format
        .replace("yyyy", year)
        .replace("MM", month)
        .replace("dd", day);

      return result;
    },
  },
};
</script>
<style scoped></style>
