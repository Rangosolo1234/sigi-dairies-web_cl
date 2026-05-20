<template>
  <section class="relative min-h-screen overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="../assets/videos/sigi-bg.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Hero Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center
             min-h-screen text-center px-6"
    >

      <div class="max-w-3xl">

        <p
          class="uppercase tracking-[0.3em] text-green font-semibold mb-4"
        >
          Trusted Dairy Farmers
        </p>

        <h1
          class="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight"
        >
          Premium Dairy Cows
          <span class="text-green-400 block">
            For Modern Farmers
          </span>
        </h1>

        <p
          class="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed"
        >
          Buy healthy high-quality dairy cows and enjoy
          reliable livestock transport services from
          SIGI Dairies.
        </p>

        <!-- Buttons -->
        <div
          class="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >

          <router-link
            to="/cows"
            class="bg-orange hover:bg-orange/90
                   transition duration-300
                   px-8 py-4 rounded-xl
                   text-white font-semibold shadow-lg"
          >
            View Available Cows
          </router-link>

          <router-link to="/contact" class="border border-white/40 hover:bg-white hover:text-black transition duration-300 px-8 py-4 rounded-xl text-white font-semibold backdrop-blur-sm">
            Contact Us
          </router-link>

        </div>

      </div>

    </div>

  </section>
</template>