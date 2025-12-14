<template>
  <div id="post-container">
    <EditPostComponent />
  </div>
</template>

<script>
import EditPostComponent from "@components/EditPostComponent.vue";

export default {
  name: "EditPostView",
  components: {
    EditPostComponent,
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
