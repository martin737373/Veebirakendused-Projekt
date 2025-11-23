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

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-container {
  background-color: rgba(30, 40, 60, 0.5);
  z-index: 1000;
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.footer-nav {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0;
}

.footer-nav a {
  padding: 8px 12px;
  color: white;
  font-size: 1em;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  border-radius: 5px;
}

.footer-nav a:hover {
  background-color: bisque;
  color: #36abda;
}

.footer-text {
  color: white;
  font-size: 0.9em;
  text-align: center;
}

@media (max-width: 1050px) {
  .footer-container {
    flex-direction: column;
    gap: 10px;
  }

  .footer-nav {
    justify-content: center;
  }
}
</style>
