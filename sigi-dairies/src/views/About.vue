<template>
  <div class="bg-white text-dark">

    <!-- HERO -->
    <section class="relative h-[70vh] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1974&auto=format&fit=crop"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/50"></div>

      <div
        class="relative z-10 flex items-center justify-center h-full text-center px-6"
      >
        <div class="max-w-3xl">

          <p
            class="uppercase tracking-[0.3em] text-green font-semibold mb-4"
          >
            About SIGI Dairies
          </p>

          <h1
            class="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight"
          >
            Building Trust Through
            <span class="text-green-400 block">
              Quality Dairy Farming
            </span>
          </h1>

        </div>
      </div>
    </section>

    <!-- STORY -->
    <section class="py-24 px-6">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >

        <div>
          <img
            src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e"
            class="rounded-3xl shadow-xl w-full h-[500px] object-cover"
          />
        </div>

        <div>

          <p
            class="uppercase tracking-[0.2em] text-orange font-semibold mb-3"
          >
            Our Story
          </p>

          <h2
            class="text-4xl md:text-5xl font-poppins font-bold leading-tight"
          >
            Passionate About
            Healthy Dairy Farming
          </h2>

          <p class="mt-6 text-gray-600 leading-relaxed text-lg">
            SIGI Dairies was founded with a simple mission:
            to provide farmers with healthy, productive,
            and high-quality dairy cows raised with proper
            care and professional farming practices.
          </p>

          <p class="mt-4 text-gray-600 leading-relaxed text-lg">
            We believe modern dairy farming should be built
            on trust, animal health, and long-term farmer
            success. Our team works closely with farmers to
            ensure every cow meets excellent standards in
            nutrition, health, and productivity.
          </p>

        </div>

      </div>
    </section>

    <!-- STATS -->
    <section class="bg-dark text-white py-20 px-6">
      <div
        class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
      >

        <div>
          <h3 class="text-5xl font-bold text-green">500+</h3>
          <p class="mt-3 text-gray-300">Cows Sold</p>
        </div>

        <div>
          <h3 class="text-5xl font-bold text-green">10+</h3>
          <p class="mt-3 text-gray-300">Years Experience</p>
        </div>

        <div>
          <h3 class="text-5xl font-bold text-green">24</h3>
          <p class="mt-3 text-gray-300">Counties Served</p>
        </div>

        <div>
          <h3 class="text-5xl font-bold text-green">98%</h3>
          <p class="mt-3 text-gray-300">Customer Satisfaction</p>
        </div>

      </div>
    </section>

    <!-- VALUES -->
    <section class="py-24 px-6">

      <div class="max-w-7xl mx-auto text-center">

        <p
          class="uppercase tracking-[0.2em] text-orange font-semibold"
        >
          Why Farmers Trust Us
        </p>

        <h2
          class="text-4xl md:text-5xl font-poppins font-bold mt-4"
        >
          Our Core Values
        </h2>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >

          <div
            class="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-1 transition duration-300"
          >
            <h3 class="text-2xl font-bold mb-4">
              Healthy Livestock
            </h3>

            <p class="text-gray-600 leading-relaxed">
              We prioritize proper feeding, vaccination,
              and veterinary care to maintain strong and
              productive dairy cows.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-1 transition duration-300"
          >
            <h3 class="text-2xl font-bold mb-4">
              Trusted Service
            </h3>

            <p class="text-gray-600 leading-relaxed">
              We build long-term relationships through
              honesty, transparency, and reliable customer
              support.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-1 transition duration-300"
          >
            <h3 class="text-2xl font-bold mb-4">
              Modern Farming
            </h3>

            <p class="text-gray-600 leading-relaxed">
              We embrace modern dairy farming practices
              that improve productivity and sustainability.
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class="pb-24 px-6">

      <div
        class="max-w-7xl mx-auto rounded-3xl overflow-hidden relative"
      >

        <img
          src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-black/60"></div>

        <div
          class="relative z-10 py-24 px-8 text-center text-white"
        >

          <h2
            class="text-4xl md:text-5xl font-poppins font-bold"
          >
            Looking For Premium Dairy Cows?
          </h2>

          <p class="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Browse our healthy and carefully raised dairy
            cows suitable for modern dairy farming.
          </p>

          <router-link
            to="/cows"
            class="inline-block mt-10 bg-orange hover:bg-orange/90 transition duration-300 px-8 py-4 rounded-xl text-white font-semibold"
          >
            Explore Available Cows
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>