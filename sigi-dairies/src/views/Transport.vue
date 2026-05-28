<script setup lang="ts">
import { ref } from "vue"

const form = ref({
  name: "",
  phone: "",
  pickup: "",
  destination: "",
  cows: 1,
  date: "",
  message: "",
})

const submitForm = () => {
  alert("Transport request submitted successfully!")
}
</script>

<template>
  <div class="bg-white text-dark">

    <!-- HERO -->
    <section class="relative h-[60vh] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1974&auto=format&fit=crop"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div
        class="relative z-10 flex items-center justify-center h-full text-center px-6"
      >
        <div class="max-w-3xl">

          <p
            class="uppercase tracking-[0.3em] text-green font-semibold mb-4"
          >
            Livestock Transport
          </p>

          <h1
            class="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight"
          >
            Safe & Reliable
            <span class="text-green-400 block">
              Cow Transportation
            </span>
          </h1>

        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="py-24 px-6">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >

        <!-- LEFT -->
        <div>

          <p
            class="uppercase tracking-[0.2em] text-orange font-semibold mb-3"
          >
            Professional Services
          </p>

          <h2
            class="text-4xl md:text-5xl font-poppins font-bold leading-tight"
          >
            Trusted Livestock
            Transport Across Kenya
          </h2>

          <p class="mt-6 text-gray-600 leading-relaxed text-lg">
            SIGI Dairies provides safe and reliable livestock
            transportation services for farmers across the country.
            We ensure cows are transported comfortably with proper
            handling and care throughout the journey.
          </p>

          <div class="mt-10 space-y-6">

            <div
              class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
            >
              <h3 class="text-2xl font-bold">
                Safe Handling
              </h3>

              <p class="mt-3 text-gray-600">
                Our team follows proper livestock handling procedures
                to minimize stress and ensure animal safety.
              </p>
            </div>

            <div
              class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
            >
              <h3 class="text-2xl font-bold">
                Countrywide Delivery
              </h3>

              <p class="mt-3 text-gray-600">
                We transport livestock to different counties with
                efficient and timely delivery services.
              </p>
            </div>

            <div
              class="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
            >
              <h3 class="text-2xl font-bold">
                Experienced Team
              </h3>

              <p class="mt-3 text-gray-600">
                Our experienced transport personnel understand
                livestock care and transportation logistics.
              </p>
            </div>

          </div>

        </div>

        <!-- FORM -->
        <div
          class="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
        >

          <p
            class="uppercase tracking-[0.2em] text-orange font-semibold mb-3"
          >
            Book Transport
          </p>

          <h2
            class="text-3xl font-poppins font-bold"
          >
            Request Transport Service
          </h2>

          <form
            @submit.prevent="submitForm"
            class="mt-8 space-y-5"
          >

            <div>
              <label class="block mb-2 font-medium">
                Full Name
              </label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Enter your name"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                v-model="form.phone"
                type="text"
                placeholder="e.g 0712345678"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">
                Pickup Location
              </label>

              <input
                v-model="form.pickup"
                type="text"
                placeholder="Enter pickup location"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">
                Destination
              </label>

              <input
                v-model="form.destination"
                type="text"
                placeholder="Enter destination"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">
                Number of Cows
              </label>

              <input
                v-model="form.cows"
                type="number"
                min="1"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">
                Transport Date
              </label>

              <input
                v-model="form.date"
                type="date"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">
                Additional Notes
              </label>

              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Optional message..."
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-orange hover:bg-orange/90 transition duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
            >
              Submit Request
            </button>

          </form>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="pb-24 px-6">

      <div
        class="max-w-7xl mx-auto rounded-3xl overflow-hidden relative"
      >

        <img
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1974&auto=format&fit=crop"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-black/60"></div>

        <div
          class="relative z-10 py-24 px-8 text-center text-white"
        >

          <h2
            class="text-4xl md:text-5xl font-poppins font-bold"
          >
            Need Reliable Livestock Transport?
          </h2>

          <p class="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Contact SIGI Dairies for safe and professional
            dairy cow transportation services.
          </p>

          <router-link
            to="/contact"
            class="inline-block mt-10 bg-orange hover:bg-orange/90 transition duration-300 px-8 py-4 rounded-xl text-white font-semibold"
          >
            Contact Us
          </router-link>

        </div>

      </div>

    </section>

  </div>
</template>