<script setup lang="ts">
import { ref } from "vue"

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav
  class="fixed top-0 left-0 w-full z-50 bg-green backdrop-blur-md border-b border-orange/60 text-white px-6 py-4 shadow-lg">
    <div class="flex items-center justify-between">

      <!-- Logo -->
      <div class="text-2xl font-poppins font-bold text-white">
        SIGI Dairies
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex gap-6 items-center">
        <router-link to="/" class="hover:text-orange">Home</router-link>
        <router-link to="/about"  class="hover:text-orange transition duration-300">About</router-link>
        <router-link to="/cows" class="hover:text-orange">Cows</router-link>
        <router-link to="/transport" class="hover:text-orange">Transport</router-link>
        <router-link to="/contact" class="hover:text-orange">Contact</router-link>
      </div>

      <!-- Mobile Toggle Button -->
      <button
        class="md:hidden focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden mt-4 flex flex-col gap-4 bg-dark/20 p-4 rounded-lg"
    >
      <router-link @click="closeMenu" to="/" class="hover:text-orange">Home</router-link>
      <router-link @click="closeMenu" to="/cows" class="hover:text-orange">Cows</router-link>
      <router-link @click="closeMenu" to="/transport" class="hover:text-orange">Transport</router-link>
      <router-link @click="closeMenu" to="/contact" class="hover:text-orange">Contact</router-link>
    </div>
  </nav>
</template>