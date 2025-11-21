<template>
  <div class="signup-container">
    <h2>Create an Account</h2>

    <form @submit.prevent="handleSubmit" class="signup-form">
      <!-- EMAIL -->
      <label>Email:</label>
      <input
        type="email"
        v-model="email"
        required
        placeholder="Enter your email"
      />

      <!-- PASSWORD -->
      <label>Password:</label>
      <input
        type="password"
        v-model="password"
        required
        placeholder="Enter your password"
      />

      <!-- ERROR MESSAGE -->
      <p v-if="errorMessage" class="error-message">
        <strong>Password is not valid:</strong>
        <br />
        <span v-for="(err, index) in failedRules" :key="index">
          - {{ err }}<br />
        </span>
      </p>

      <!-- SUBMIT -->
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupComponent",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: false,
      failedRules: [],
    };
  },
  methods: {
    handleSubmit() {
      this.failedRules = [];

      const pw = this.password;

      // 1. Length
      if (pw.length < 8 || pw.length > 14) {
        this.failedRules.push("Must be 8–14 characters long");
      }

      // 2. Starts with uppercase
      if (!/^[A-Z]/.test(pw)) {
        this.failedRules.push("Must start with an uppercase letter");
      }

      // 3. At least one uppercase
      if (!/[A-Z]/.test(pw)) {
        this.failedRules.push("Must contain at least one uppercase letter");
      }

      // 4. At least two lowercase
      if ((pw.match(/[a-z]/g) || []).length < 2) {
        this.failedRules.push("Must contain at least two lowercase letters");
      }

      // 5. At least one number
      if (!/\d/.test(pw)) {
        this.failedRules.push("Must contain at least one number");
      }

      // 6. Contains underscore
      if (!pw.includes("_")) {
        this.failedRules.push('Must include the character "_"');
      }

      if (this.failedRules.length > 0) {
        this.errorMessage = true;
        return;
      }

      // All rules passed
      this.errorMessage = false;
      alert("Signup successful!");
    },
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  text-align: center;
  color: white;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

input {
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
}

.signup-button {
  padding: 0.7rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background: bisque;
  color: #333;
  font-weight: bold;
  transition: 0.3s;
}

.signup-button:hover {
  background: #f0d3a5;
}

.error-message {
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  color: #ffb3b3;
  font-size: 0.9rem;
  text-align: left;
}
</style>
