<template>
		<div id="form-box">
			<form id="post-form" @submit.prevent="createPost">
				<div class="form-fields">
					<div>
						<label>Post body</label>
						<textarea v-model="body" id=post-textarea rows="5" cols="20" placeholder="Write a post" required></textarea>
					</div>
					<div>
						<label>Select file</label>
						<label for="url-input">Paste URL:</label>
						<input v-model="url" type="text" id="url-input" placeholder="Image URL" />
					</div>
					<div>
						<button type="submit">Create post</button>
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

      console.log(newPost);

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
          //this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    }
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