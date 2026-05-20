<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getCows, type Cow } from "../services/cowService"

const cows = ref<Cow[]>([])

onMounted(async () => {
  cows.value = await getCows()
})
</script>

<template>
  <div class="p-8">
    <h2 class="text-3xl font-poppins font-bold mb-6">Available Cows</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="cow in cows"
        :key="cow.id"
        class="border rounded-lg p-4 shadow"
      >
        <img :src="cow.image" class="w-full h-48 object-cover rounded" />

        <h3 class="text-xl font-bold mt-3">{{ cow.name }}</h3>
        <p>{{ cow.breed }}</p>
        <p class="text-green font-bold mt-2">
          KES {{ cow.price }}
        </p>

        <router-link
          :to="`/cows/${cow.id}`"
          class="mt-3 inline-block bg-orange text-white px-4 py-2 rounded"
        >
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>