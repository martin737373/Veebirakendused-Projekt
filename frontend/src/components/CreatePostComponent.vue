<template>
  <div class="post-container">
    <h2>Create a Post</h2>
    <form id="post-form" @submit.prevent="createPost" class="post-form">
      <div class="form-fields">
        <div>
          <label for="post-textarea">Post body</label>
          <textarea
            v-model="body"
            id="post-textarea"
            rows="5"
            placeholder="Write a post"
            required
          ></textarea>
        </div>
        <div>
          <label for="url-input">Paste URL:</label>
          <input
            v-model="url"
            type="text"
            id="url-input"
            placeholder="Image URL"
          />
        </div>
        <div>
          <button type="submit" class="post-button">Create Post</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePostComponent",
  data() {
    return {
      body: "",
      url: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        body: this.body,
        urllink: this.url,
      };
      fetch("http://localhost:3000/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newPost),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
};
</script>

<style scoped>
.post-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  text-align: center;
  color: white;
}

.post-container h2 {
  margin-bottom: 1.5rem;
}

.post-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-fields label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-align: left;
}

textarea,
input[type="text"] {
  width: 100%;
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

textarea {
  resize: none;
}

.post-button {
  padding: 0.7rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background: bisque;
  color: #333;
  font-weight: bold;
  transition: 0.3s;
  margin-top: 0.5rem;
}

.post-button:hover {
  background: #f0d3a5;
}
</style>
