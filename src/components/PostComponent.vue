<template>
  <article class="post">
    <div class="post-header">
      <img :src="post.avatar" :alt="post.author" class="post-avatar" />
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
</style>
