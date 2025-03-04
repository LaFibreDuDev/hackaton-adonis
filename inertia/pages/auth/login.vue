<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import Layout from '~/components/Layout.vue'
const form = useForm({
  email: null,
  password: null,
})
</script>

<template>
  <Layout title="Formulaire de login">
    <div class="card w-full max-w-2xl bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-xl font-bold mb-4">Formulaire de login</h2>
        <form class="flex flex-col gap-8" @submit.prevent="form.post('/login')">
          <div class="grid grid-cols-[200px_1fr] gap-4">
            <span class="label">Votre email</span>
            <input
              class="input"
              v-model="form.email"
              type="text"
              required
              placeholder="Votre email"
            />
            <span class="label">Votre mot de passe</span>
            <input
              class="input"
              v-model="form.password"
              type="password"
              required
              placeholder="Votre mot de passe"
            />
          </div>
          <div>
            <button class="btn btn-primary btn-wide">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>
