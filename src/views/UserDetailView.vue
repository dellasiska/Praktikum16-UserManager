<template>
  <Layout>

    <div class="bg-white rounded-xl shadow-lg p-8">

      <h1 class="text-3xl font-bold text-blue-600 mb-6">
        👤 Detail User
      </h1>

      <img
        :src="user.avatar"
        class="w-32 h-32 rounded-full mx-auto"
      />

      <h2 class="text-2xl font-bold text-center mt-6">
        {{ user.name }}
      </h2>

      <p class="text-center text-gray-500 mt-2">
        {{ user.email }}
      </p>

      <p class="text-center text-gray-400 mt-2">
        ID : {{ user.id }}
      </p>

    </div>

  </Layout>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const route = useRoute()

const user = reactive({
  id: '',
  name: '',
  email: '',
  avatar: ''
})

onMounted(async () => {

  const response = await axios.get(
    `https://6a4fb90bf45d5352b611ce83.mockapi.io/users/${route.params.id}`
  )

  user.id = response.data.id
  user.name = response.data.name
  user.email = response.data.email
  user.avatar = response.data.avatar

})
</script>