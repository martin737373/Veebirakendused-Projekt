<template>
  <div class="login">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "LoginView",
  components: {
    LoginComponent,
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 0;
}
</style>
