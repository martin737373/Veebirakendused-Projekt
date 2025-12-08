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
  bottom: 0;
  left: 1rem;
  right: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0;
  display: flex;
  justify-content: center;
  --footer-height: 55px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0;
}

.footer-nav {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
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
