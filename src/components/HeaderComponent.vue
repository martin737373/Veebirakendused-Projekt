<template>
  <header class="header-container">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Log In</router-link></li>
    </ul>
    <div class="profile-dropdown" @click="toggleDropdown">
      <button class="dropdown-button">
        <img :src="avatar" alt="Account" class="avatar">
      </button>

      <div class="dropdown-menu" v-if="dropdownOpen">
        <p class="user-name">John Doe</p>
        <p class="user-email">john.doe@example.com</p>
        <router-link to="/login" class="logout-btn">Logout</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

import avatarImage from '@/assets/icons/user.jpg'

const avatar = avatarImage
const dropdownOpen = ref(false)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}
</script>

<style scoped>

.header-container {
  background-color: rgba(30, 40, 60, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  position: sticky;
  top: 20px;
}

.nav {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.nav a {
  padding: 8px 12px;
  text-align: center;
  display: block;
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  transition: background 0.3s;
}

.nav a:hover {
  background-color: bisque;
  border-radius: 5px;
  color: #36abda;
}

.profile-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.profile-dropdown img {
  width: 80px;
  height: 80px;
  border-radius: 30%;
  object-fit: cover;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: #fff;
  color: black;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid rgba(30, 40, 60, 0.5);
  min-width: 180px;
  text-align: left;
}

.logout-btn {
  display: block;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid rgb(0, 0, 0);
  text-align: center;
  color: rgba(30, 40, 60, 0.5);
  text-decoration: none;
  font-weight: bold;
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