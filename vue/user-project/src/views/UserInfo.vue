<template>
  <div class="container">
    <div class="row">
      <table class="table" style="border: 1px solid #444444">
        <tr>
          <th class="text-right table-primary">No.</th>
          <td class="text-center">{{ userInfo.user_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">ID</th>
          <td class="text-center">{{ userInfo.user_id }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">{{ userInfo.user_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">{{ userGender }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">가입날짜</th>
          <td class="text-center">{{ dateFormat }}</td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="updateInfo(userInfo.user_id)">
        수정
      </button>
      <router-link to="/" class="btn btn-success">목록</router-link>
      <button class="btn btn-warning" @click="deleteInfo(userInfo.user_id)">
        삭제
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      searchNo: "",
      userInfo: {},
    };
  },
  computed: {
    userGender() {
      return this.userInfo.user_gender == "M" ? "남자" : "여자";
    },
    dateFormat() {
      // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
      let date = new Date(this.userInfo.join_date);
      // 연도, 월, 일 추출
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      return `${year}년 ${month}월 ${day}일`;
    },
  },
  created() {
    this.searchNo = this.$route.query.userId;
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      let result = await axios
        .get(`/api/users/${this.searchNo}`)
        .catch((err) => {
          console.log(err);
        });
      let Info = result.data;
      this.userInfo = Info;
    },
    async deleteInfo(userId) {
      let result = await axios
        .delete(`/api/users/${userId}`)
        .catch((err) => console.log(err));
      console.log(result.data);
      let count = result.data.affectedRows;
      if (count == 0) {
        alert("정상적으로 삭제되지 않았습니다.");
      } else {
        alert("정상적으로 삭제되었습니다.");
        this.$router.push({ name: `userlist` });
      }
    },
    updateInfo(id) {
      this.$router.push({ path: `/userUpdate`, query: { userId: id } });
    },
  },
};
</script>
<style scoped>
th,
td {
  border: 1px solid #444444;
  padding: 10px;
}
</style>
