<template>
  <header class="header-container">
    <ul class="nav">
      <li v-if="!isAuthRoute"><router-link to="/">Home</router-link></li>
      <li v-if="isAuthRoute"><router-link to="/login">Login</router-link></li>
      <li v-if="isAuthRoute">
        <router-link to="/signup">Sign Up</router-link>
      </li>
    </ul>
    <button v-if="!isAuthRoute" @click="LogOut" class="logout-button">
      Log Out
    </button>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const isAuthRoute = computed(() =>
      ["/login", "/signup"].includes(route.path)
    );
    return { isAuthRoute };
  },
  methods: {
    LogOut() {
      fetch("http://localhost:3000/auth/logout", {
        method: "GET",
        credentials: "include",
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    },
  },
};
</script>

<style scoped>
.header-container {
  align-items: center;
  background-color: rgba(30, 40, 60, 0.5);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 20px;
  left: 1rem;
  right: 1rem;
  z-index: 1000;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 1.2em;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.nav a:hover,
.nav a:focus-visible {
  background-color: bisque;
  color: #36abda;
}

@media (max-width: 1050px) {
  .header-container {
    flex-direction: column;
    gap: 10px;
  }

  .nav {
    justify-content: center;
  }
}
</style>
