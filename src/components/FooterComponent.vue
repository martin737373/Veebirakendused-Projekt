<template>
  <footer class="footer-container">
    <div class="footer-content">
      <ul class="footer-nav">
        <li><router-link to="#">Privacy</router-link></li>
        <li><router-link to="#">Terms</router-link></li>
        <li><router-link to="#">About</router-link></li>
      </ul>

      <span class="footer-text">© 2025 MySite</span>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background-color: rgb(30, 40, 60, 0.5);
  z-index: 1000;
  border-radius: 30px;
  padding: 10px 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-nav {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-nav a {
  padding: 8px 12px;
  color: white;
  font-size: 1em;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: bisque;
}

.footer-text {
  color: white;
  font-size: 0.9em;
}
</style>
