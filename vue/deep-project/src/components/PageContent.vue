<template>
  <div>
    <tr>
      {{
        $dateFormat("2023/12/05", "yyyy년/MM월/dd일")
      }}
    </tr>
    <table>
      <tr>
        <th>제목</th>
        <td>{{ title }}</td>
        <th>조회수</th>
        <td>{{ readInfo }}</td>
      </tr>
      <tr>
        <th>작성자</th>
        <td>{{ writer }}</td>
        <th>작성일자</th>
        <td>{{ regdate }}</td>
      </tr>
      <tr>
        <th>내용</th>
        <td>{{ content }}</td>
      </tr>
      <tr>
        <button @click="updateInfo">업데이트</button>
      </tr>
    </table>
  </div>
</template>
<script>
// import AppMixin from "../mixin.js";

export default {
  //   props: ["title", "count", "writer", "regdate", "content"],
  // mixins: [AppMixin],
  props: {
    title: String,
    count: {
      type: Number,
      default: 0,
    },
    writer: {
      type: [String, Object],
      default: function () {
        return { first: "Adward", second: "B" };
      },
    },
    regdate: {
      reqired: true,
      validator: function (value) {
        let format = /[0~9][0~9][0~9][0~9]-[0~9][0~9]-[0~9][0~9]/;
        return !(value.match(format) == null);
      },
    },
    content: String,
  },
  computed: {
    readInfo() {
      return this.count + 1;
    },
  },
  methods: {
    updateInfo() {
      this.$emit("update-info", this.readInfo);
    },
  },
};
</script>
