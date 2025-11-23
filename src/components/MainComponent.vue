<template>
  <div class="main">
    <div id="posts">
      <PostComponent v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import PostComponent from "./PostComponent.vue";

export default {
  name: "MainComponent",
  components: {
    PostComponent,
  },
  computed: {
    posts() {
      return this.$store.getters.getAllPosts;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding-top: calc(30px + 2rem);
}
</style>
