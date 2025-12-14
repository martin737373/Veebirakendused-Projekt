<template>
  <div class="edit-container">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost" class="edit-form">
      <div class="form-group">
        <label>Post body</label>
        <textarea
          v-model="body"
          rows="5"
          placeholder="Write a post"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label>Paste URL:</label>
        <input v-model="url" type="text" placeholder="Image URL" />
      </div>
      <ul class="post-buttons">
        <li>
          <button type="submit" class="action-button update-button">Update Post</button>
        </li>
        <li>
          <button @click="deletePost" type="button" class="action-button delete-button">
            Delete
          </button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditPostComponent",
  props: {
    id: {
      type: [String, Number], // accept string or number
      required: true,
    },
  },
  data() {
    return {
      body: "",
      url: "",
      postId: Number(this.id), // local copy of the prop
    };
  },
  created() {
    this.fetchPostData();
  },
  methods: {
    async fetchPostData() {
      try {
        const response = await fetch(`http://localhost:3000/posts/${this.id}`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        this.body = data.body;
        this.url = data.urllink;
      } catch (err) {
        console.error("Failed to load post data:", err);
      }
    },

    async deletePost() {
      try {
        const response = await fetch(`http://localhost:3000/posts/${this.id}`, {
          method: "DELETE",
          credentials: "include",
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        console.log("Post deleted");
        this.$router.push("/");
      } catch (err) {
        console.error("Failed to delete post:", err);
        alert("Failed to delete post: " + err.message);
      }
    },

    async updatePost() {
      const updatedPost = {
        body: this.body,
        urllink: this.url,
      };

      try {
        const response = await fetch(`http://localhost:3000/posts/${this.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(updatedPost),
        });

        if (!response.ok) {
          // Try to parse JSON, but fallback if empty
          let errorMessage = `HTTP ${response.status}`;
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } catch (e) {
            throw new Error(errorMessage);
          }
          throw new Error(errorMessage);
        }

        // Safe parsing: only parse if content exists
        let data = null;
        const text = await response.text();
        if (text) {
          data = JSON.parse(text);
        }

        console.log("Post updated:", data);
        this.$router.push("/"); // redirect after update
      } catch (err) {
        console.error("Failed to update post:", err);
        alert("Failed to update post: " + err.message);
      }
    },
  },
};
</script>

<style scoped>
.edit-container {
  max-width: 450px;
  margin: 140px auto 3rem auto; /* top margin to avoid header */
  padding: 2rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  border-radius: 1rem;
  text-align: center;
  color: white;
}

.edit-container h2 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: left;
}

label {
  font-size: 1.1rem;
}

input,
textarea {
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
}

textarea {
  resize: none;
}

.update-button {
  padding: 0.7rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background: bisque;
  color: #333;
  transition: 0.3s;
}

.update-button:hover {
  background: #f0d3a5;
}

.post-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  list-style: none;
  padding: 0;
}

.delete-button {
  background-color: #ff6b6b;
  color: white;
}

.delete-button:hover {
  background-color: #ff4c4c;
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
</style>
