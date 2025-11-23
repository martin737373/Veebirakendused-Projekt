<template>
  <div class="main">
    <button class="reset-button" @click="resetLikes">Reset Likes</button>
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
  methods: {
    resetLikes() {
      this.$store.dispatch("resetAllLikes");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding-top: calc(30px + 2rem);
  position: relative;
}

.reset-button {
  position: fixed;
  top: 120px;
  right: 20px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 999;
}

.reset-button:hover {
  background-color: #c0392b;
}
</style>
