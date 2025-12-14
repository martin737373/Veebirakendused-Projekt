<template>
  <div id="post-container">
    <CreatePostComponent />
  </div>
</template>

<script>
import CreatePostComponent from "@components/CreatePostComponent.vue";

export default {
  name: "CereatePostView",
  components: {
    CreatePostComponent,
  },
};
</script>

<style scoped>
#post-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
