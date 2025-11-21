<template>
  <div class="signup">
    <SignupComponent />
  </div>
</template>

<script>
import SignupComponent from "@/components/SignupComponent.vue";

export default {
  name: "SignupView",
  components: {
    SignupComponent,
  },
};
</script>

<style scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 0;
}
</style>
