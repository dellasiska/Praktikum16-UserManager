<template>
  <Layout>

    <h1 class="text-3xl font-bold mb-6">
      👥 Daftar User
    </h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div
        v-for="user in users"
        :key="user.id"
        class="bg-white rounded-xl shadow-lg p-5"
      >

        <img
          :src="user.avatar"
          class="w-24 h-24 rounded-full mx-auto"
        />

        <h2 class="text-xl font-bold text-center mt-4">
          {{ user.name }}
        </h2>

        <p class="text-center text-gray-500">
          {{ user.email }}
        </p>

        <div class="flex gap-2 mt-4">

          <RouterLink
            :to="'/users/' + user.id"
            class="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
          >
            Detail
          </RouterLink>

          <RouterLink
            :to="'/users/edit/' + user.id"
            class="flex-1 bg-yellow-500 text-white text-center py-2 rounded-lg hover:bg-yellow-600"
          >
            Edit
          </RouterLink>

          <button
            @click="deleteUser(user.id)"
            class="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Hapus
          </button>

        </div>

      </div>

    </div>

  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const users = ref([])

const getUsers = async () => {
  const response = await axios.get(
    'https://6a4fb90bf45d5352b611ce83.mockapi.io/users'
  )

  users.value = response.data
}

const deleteUser = async (id) => {

  const confirmDelete = confirm('Yakin ingin menghapus user ini?')

  if (!confirmDelete) return

  await axios.delete(
    `https://6a4fb90bf45d5352b611ce83.mockapi.io/users/${id}`
  )

  alert('User berhasil dihapus!')

  getUsers()
}

onMounted(() => {
  getUsers()
})
</script>