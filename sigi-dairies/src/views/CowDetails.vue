<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { getCowById, type Cow } from "../services/cowService"

const route = useRoute()
const cow = ref<Cow | null>(null)

onMounted(async () => {
  const id = Number(route.params.id)
  cow.value = await getCowById(id) || null
})
</script>

<template>
  <div class="p-8" v-if="cow">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Image -->
      <div>
        <img
          :src="cow.image"
          class="w-full h-[400px] object-cover rounded-xl shadow"
        />
      </div>

      <!-- Details -->
      <div>
        <h1 class="text-4xl font-poppins font-bold">
          {{ cow.name }}
        </h1>

        <p class="text-gray-600 mt-2">
          Breed: <span class="font-semibold">{{ cow.breed }}</span>
        </p>

        <p class="text-gray-600">
          Age: <span class="font-semibold">{{ cow.age }} years</span>
        </p>

        <p class="text-gray-600">
          Weight: <span class="font-semibold">{{ cow.weight }} kg</span>
        </p>

        <p class="text-2xl font-bold text-green mt-4">
          KES {{ cow.price }}
        </p>

        <p class="mt-2">
          Status:
          <span
            :class="cow.available ? 'text-green' : 'text-red-500'"
            class="font-semibold"
          >
            {{ cow.available ? "Available" : "Sold" }}
          </span>
        </p>

        <!-- Action buttons -->
        <div class="mt-6 flex gap-3">
          <button
            class="bg-orange text-white px-6 py-3 rounded-lg font-semibold"
          >
            Book Cow
          </button>

          <button
            class="border border-dark px-6 py-3 rounded-lg font-semibold"
          >
            Contact Seller
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Loading / Not found -->
  <div v-else class="p-8 text-center">
    <p class="text-gray-500">Cow not found</p>
  </div>
</template>