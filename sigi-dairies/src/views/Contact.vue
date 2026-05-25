<script setup lang="ts">
import { ref } from "vue"

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const submitForm = () => {
  console.log(form.value)

  alert("Message sent successfully!")

  form.value = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }
}
</script>

<template>
  <section class="min-h-screen bg-gray-50 py-24 px-6">
    
    <!-- Header -->
    <div class="max-w-4xl mx-auto text-center mb-14">
      <p class="uppercase tracking-[0.3em] text-green font-semibold mb-3">
        Contact SIGI Dairies
      </p>

      <h1 class="text-4xl md:text-5xl font-poppins font-bold text-dark">
        Get In Touch
      </h1>

      <p class="mt-5 text-gray-600 text-lg">
        Interested in buying premium dairy cows or transport services?
        Reach out to us today.
      </p>
    </div>

    <!-- Contact Content -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
    >

      <!-- Contact Info -->
      <div
        class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        <h2 class="text-2xl font-bold mb-6">
          Contact Information
        </h2>

        <div class="space-y-6">

          <!-- Phone -->
          <div class="flex items-start gap-4">
            <div>
              <h3 class="font-semibold text-lg">Phone</h3>
              <p class="text-gray-600">
                +254 700 000 000
              </p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start gap-4">

            <div>
              <h3 class="font-semibold text-lg">Email</h3>
              <p class="text-gray-600">
                info@sigidairies.com
              </p>
            </div>
          </div>

          <!-- Location -->
          <div class="flex items-start gap-4">
            <div>
              <h3 class="font-semibold text-lg">Location</h3>
              <p class="text-gray-600">
                Nairobi, Kenya
              </p>
            </div>
          </div>

        </div>

        <!-- Extra Card -->
        <div
          class="mt-10 bg-green text-white rounded-2xl p-6"
        >
          <h3 class="text-2xl font-bold">
            Trusted Dairy Farming
          </h3>

          <p class="mt-3 text-white/90">
            We provide healthy, productive dairy cows
            and reliable transport services for farmers
            across Kenya.
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div
        class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        <h2 class="text-2xl font-bold mb-6">
          Send Us A Message
        </h2>

        <form
          @submit.prevent="submitForm"
          class="space-y-5"
        >

          <!-- Name -->
          <div>
            <label class="block mb-2 font-medium">
              Full Name
            </label>

            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your name"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block mb-2 font-medium">
              Email Address
            </label>

            <input
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              required
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              v-model="form.phone"
              type="text"
              placeholder="Enter phone number"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block mb-2 font-medium">
              Message
            </label>

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Write your message..."
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green"
              required
            ></textarea>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full bg-orange hover:bg-orange/90 transition duration-300 text-white font-semibold py-4 rounded-xl shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  </section>
</template>