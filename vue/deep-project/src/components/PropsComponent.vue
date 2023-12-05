<template>
  <div>
    <PageTitle title="Hello, world!" />
    <!-- <PageContent
      :title="header"
      v-bind:count="10"
      :writer="'Adward'"
      :regdate="'2023-12-05'"
      :content="{ first: 'Node.js', second: 'Vue.js' }"
    /> -->
    <PageContent v-bind="info" @update-info="handler" />
    <RefCom ref="child" />
    <button @click="childHandler">자식 제어</button>
  </div>
</template>
<script>
import PageTitle from "./PageTitle.vue";
import PageContent from "./PageContent.vue";
import RefCom from "./RefComponent.vue";

export default {
  data() {
    return {
      header: "",
      info: {
        title: "Today is",
        count: 0,
        writer: "Adward",
        regdate: "2023-12-05",
        content: "내용 없음",
      },
    };
  },

  components: {
    PageTitle,
    PageContent,
    RefCom,
  },
  methods: {
    handler(value) {
      alert(value);
      this.info.count = value;
    },
    childHandler() {
      //   this.$refs.child.content = 100;
      //   this.$refs.child.content = "부모가 보내는 데이터";
      //   this.$refs.child.plusCount();
      this.$refs.child.$refs.cBtn.click();
    },
  },
};
</script>
