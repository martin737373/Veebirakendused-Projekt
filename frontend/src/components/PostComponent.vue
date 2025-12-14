<template>
  <article class="post">
    <router-link :to="`/edit/${post.id}`">
      <div class="post-header">
        <img
          v-if="post.avatar"
          :src="post.avatar"
          :alt="post.author"
          class="post-avatar"
        />
        <h3 class="post-author">{{ post.author }}</h3>
        <span class="post-date">{{ post.date }}</span>
      </div>
      <p class="post-text">{{ post.text }}</p>
      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.author"
        class="post-image"
      />
      <!--
      <div class="post-footer">
        <button class="like-button" @click="likePost">👍 {{ post.likes }}</button>
      </div>
      -->
    </router-link>
  </article>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // likePost() {
    //   this.$store.dispatch("likePost", this.post.id);
    // },
  },
};
</script>

<style scoped>
.post {
  background: white;
  border-radius: 15px;
  padding: 15px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.post-header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  gap: 10px;
}

.post-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.post-author {
  font-size: 1.2em;
  color: #333;
  margin: 0;
}

.post-text {
  font-size: 1em;
  color: #444;
  line-height: 1.4;
}

.post-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.post-date {
  font-size: 0.9em;
  color: #666;
  padding-left: 10px;
  border-left: 1px solid #ddd;
}

.post-footer {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.like-button {
  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
}

.like-button:hover {
  transform: scale(1.1);
}
</style>
