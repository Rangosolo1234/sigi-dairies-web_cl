<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <div class="min-h-screen bg-white text-dark">
    <!-- Global Navbar -->
    <Navbar />

    <!-- Page content -->
    <main class="pt-18 md:pt-22">
      <router-view />
    </main>
  </div>
</template>