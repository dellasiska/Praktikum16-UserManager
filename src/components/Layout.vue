<template>
  <div class="flex">

    <Sidebar />

    <div class="flex-1 flex flex-col min-h-screen">

      <Header />

      <main class="flex-1 bg-gray-100 p-6">
        <slot />
      </main>

      <Footer />

    </div>

  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
</script>