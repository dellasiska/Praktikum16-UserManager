<template>
  <Layout>

    <h1 class="text-3xl font-bold mb-6">
      ✏️ Edit User
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
        @click="updateUser"
        class="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
      >
        Simpan Perubahan
      </button>

    </div>

  </Layout>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const route = useRoute()
const router = useRouter()

const user = reactive({
  name: '',
  email: '',
  avatar: ''
})

onMounted(async () => {

  const response = await axios.get(
    `https://6a4fb90bf45d5352b611ce83.mockapi.io/users/${route.params.id}`
  )

  user.name = response.data.name
  user.email = response.data.email
  user.avatar = response.data.avatar

})

const updateUser = async () => {

  await axios.put(
    `https://6a4fb90bf45d5352b611ce83.mockapi.io/users/${route.params.id}`,
    user
  )

  alert('User berhasil diupdate!')

  router.push('/users')

}
</script>