<template>
  <div id="form-box">
    <form id="post-form" @submit.prevent="updatePost">
      <div class="form-fields">
        <div>
          <label>Post body</label>
          <textarea
            v-model="body"
            id="post-textarea"
            rows="5"
            cols="20"
            placeholder="Write a post"
            required
          ></textarea>
        </div>
        <div>
          <label>Paste URL:</label>
          <input
            v-model="url"
            type="text"
            id="url-input"
            placeholder="Image URL"
          />
        </div>
        <div>
          <button type="submit">Update post</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditPostComponent",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      body: "",
      url: "",
    };
  },

  setup() {
    this.fetchPostData();
  },

  methods: {
    async fetchPostData() {
      try {
        const response = await fetch(`http://localhost:3000/posts/${this.id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        this.body = data.body;
        this.url = data.urllink;
      } catch (err) {
        console.error("Failed to load post data:", err);
      }
    },

    async updatePost() {
      const newPost = {
        body: this.body,
        urllink: this.url,
      };
      fetch(`http://localhost:3000/posts/${this.post_id}`,
      {
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
#post-textarea {
  flex: 1;
  resize: none;
}

.form-fields label {
  padding: 0.3rem 0.5rem;
  font-size: 1.2rem;
}

.form-fields input[type="file"],
.form-fields textarea,
.form-fields input,
.form-fields select {
  padding: 0.3rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
}
</style>
