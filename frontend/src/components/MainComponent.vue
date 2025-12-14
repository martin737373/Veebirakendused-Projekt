<template>
  <div class="main">
    <div id="posts">
      <PostComponent v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <ul class="post-buttons">
      <li><router-link to="/create-post">
        <button id="create-post-button">Create Post</button>
      </router-link></li>
      <li><button id="delete-posts-button" @click="deleteAll">Delete All</button></li>
    </ul>
  </div>
</template>

<script>
import PostComponent from "./PostComponent.vue";

export default {
  name: "MainComponent",
  components: {
    PostComponent,
  },
  data() {
    return {
      posts: [],          // will hold the fetched posts
    };
  },

  async created() {
    await this.fetchPosts();
  },

  methods: {
    async fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts/", {
        method: "GET",
        credentials: "include",
      });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        console.log(data)
        // Map the DB fields to the shape expected by PostComponent
        this.posts = data.map((p) => ({
          id: p.id,
          author: p.author || "Anonymous",
          avatar: p.avatar || null,
          date: p.post_date,
          text: p.body,
          image: p.urllink.length === 0 ? null : p.urllink,
        }));
        console.log(this.posts);
      } catch (err) {
        console.error("Failed to load posts:", err);
      }
    },

    async deleteAll() {
      try {
        const response = await fetch("http://localhost:3000/posts/", {
          method: "DELETE",
          credentials: "include",
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        console.log("All posts deleted");
        this.posts = [];
      } catch (err) {
        console.error("Failed to delete posts:", err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding-top: calc(30px + 2rem);
  padding-bottom: var(--footer-height, 55px);
  position: relative;
}
</style>
