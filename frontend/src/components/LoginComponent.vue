<template>
  <div class="login-container">
    <h2>Log In</h2>

    <form @submit.prevent="handleSubmit" class="login-form">
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

      <!-- LOG IN -->
      <button type="submit" class="login-button">Log In</button>

      <p class="separator">OR</p>

      <!-- SIGN UP -->
      <button type="button" @click="this.$router.push('/signup')" class="signup-button">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const pw = this.password;

      // 1. Length
      if (pw.length < 8 || pw.length > 14) { alert("Login failed!"); return; }

      // 2. Starts with uppercase
      if (!/^[A-Z]/.test(pw)) { alert("Login failed!"); return; }

      // 3. At least two lowercase
      if ((pw.match(/[a-z]/g) || []).length < 2) { alert("Login failed!"); return; }

      // 4. At least one number
      if (!/\d/.test(pw)) { alert("Login failed!"); return; }

      // 5. Contains underscore
      if (!pw.includes("_")) { alert("Login failed!"); return; }

      // Only attempt login if all rules are passed
      this.LogIn();
    },

    LogIn() {
      var data = {
        email: this.email,
        password: this.password,
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            alert("Login failed!: " + data.error);
            return;
          }
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
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  text-align: center;
  color: white;
}

.login-form {
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

.login-button,
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

.login-button:hover,
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

.separator {
  margin: 0;
  font-size: 0.9rem;
}
</style>
