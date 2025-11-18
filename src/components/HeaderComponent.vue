<template>
  <header class="header-container">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Log In</router-link></li>
    </ul>
  </header>
</template>

<script setup>
</script>

<style scoped>

.header-container {
  background-color: rgba(30, 40, 60, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
}

.nav {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0;
}

.nav a {
  padding: 8px 12px;
  text-align: center;
  display: block;
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  border-radius: 5px;
}

.nav a:hover {
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