<template>
  <header class="header-container">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/signup">Signup</router-link></li>
    </ul>
  </header>
</template>

<script setup></script>

<style scoped>
.header-container {
  align-items: center;
  background-color: rgba(30, 40, 60, 0.5);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem;
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
