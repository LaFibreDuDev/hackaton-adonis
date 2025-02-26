<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { useForm } from '@inertiajs/vue3'
const form = useForm({
  email: null,
})
</script>

<template>
  <Head title="Homepage" />
  <div
    class="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center p-4"
  >
    <div class="card w-full max-w-2xl bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h1 class="text-4xl font-bold mb-2">Hackaton du mois de Mars 2025</h1>
        <div class="divider"></div>
        <h2 class="text-xl font-bold mb-2">S'inscrire à l'event</h2>
        <form class="flex gap-4 justify-center" @submit.prevent="form.post('/newsletter')">
          <div>
            <input
              class="input validator"
              v-model="form.email"
              type="text"
              required
              placeholder="mail@site.com"
            />
            <div class="validator-hint">Entrez une adresse email valide</div>
            <div class="text text-error" v-if="form.errors.email">{{ form.errors.email }}</div>
          </div>
          <button class="btn btn-primary">S'inscrire</button>
        </form>
      </div>
    </div>
  </div>
</template>
