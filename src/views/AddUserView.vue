<template>
  <Layout>

    <h1 class="text-3xl font-bold mb-6">
      ➕ Tambah User
    </h1>

    <div class="bg-white rounded-xl shadow-lg p-6 max-w-xl">

      <div class="mb-4">
        <label class="block mb-2 font-semibold">
          Nama
        </label>

        <input
          v-model="user.name"
          class="w-full border rounded-lg p-2"
        />
      </div>

      <div class="mb-4">
        <label class="block mb-2 font-semibold">
          Email
        </label>

        <input
          v-model="user.email"
          class="w-full border rounded-lg p-2"
        />
      </div>

      <div class="mb-6">
        <label class="block mb-2 font-semibold">
          Avatar URL
        </label>

        <input
          v-model="user.avatar"
          class="w-full border rounded-lg p-2"
        />
      </div>

      <button
        @click="saveUser"
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Tambah User
      </button>

    </div>

  </Layout>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const router = useRouter()

const user = reactive({
  name: '',
  email: '',
  avatar: ''
})

const saveUser = async () => {

  await axios.post(
    'https://6a4fb90bf45d5352b611ce83.mockapi.io/users',
    user
  )

  alert('User berhasil ditambahkan!')

  router.push('/users')

}
</script>