<template>
  <aside class="w-64 bg-slate-900 text-white min-h-screen">

    <div class="p-6">
      <h2 class="text-3xl font-bold">
        Dashboard
      </h2>

      <p class="text-gray-400">
        Navigation Menu
      </p>
    </div>

    <nav class="mt-6 space-y-1">

      <RouterLink
        class="block px-6 py-3 hover:bg-slate-700"
        to="/"
      >
        🏠 Home
      </RouterLink>

      <RouterLink
        class="block px-6 py-3 hover:bg-slate-700"
        to="/dashboard"
      >
        📊 Dashboard
      </RouterLink>

      <RouterLink
        class="block px-6 py-3 hover:bg-slate-700"
        to="/users"
      >
        👥 Users
      </RouterLink>

      <RouterLink
        class="block px-6 py-3 hover:bg-slate-700"
        to="/users/add"
      >
        ➕ Tambah User
      </RouterLink>

      <RouterLink
        class="block px-6 py-3 hover:bg-slate-700"
        to="/about"
      >
        ℹ️ About
      </RouterLink>

      <RouterLink
        class="block px-6 py-3 hover:bg-slate-700"
        to="/contact"
      >
        📞 Contact
      </RouterLink>

    </nav>

  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>