<template>
  <div class="main-container">
    <div id="posts">
      <PostComponent v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <ul class="post-buttons">
      <li>
        <router-link to="/create-post">
          <button class="action-button create-button">Create Post</button>
        </router-link>
      </li>
      <li>
        <button class="action-button delete-button" @click="deleteAll">Delete All</button>
      </li>
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
      posts: [],
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

        this.posts = data.map((p) => ({
          id: p.id,
          author: p.author || "Anonymous",
          avatar: p.avatar || null,
          date: p.post_date,
          text: p.body,
          image: p.urllink.length === 0 ? null : p.urllink,
        }));
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
        this.posts = [];
      } catch (err) {
        console.error("Failed to delete posts:", err);
      }
    },
  },
};
</script>

<style scoped>

.main-container {
  max-width: 700px;
  margin: 100px auto 2rem auto;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 1rem;
  color: white;
}

#posts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  list-style: none;
  padding: 0;
}

.action-button {
  padding: 0.7rem 1.2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.create-button {
  background-color: bisque;
  color: #333;
}

.create-button:hover {
  background-color: #f0d3a5;
}

.delete-button {
  background-color: #ff6b6b;
  color: white;
}

.delete-button:hover {
  background-color: #ff4c4c;
}
</style>
