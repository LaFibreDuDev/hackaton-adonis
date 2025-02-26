<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Homepage" />
  <div
    class="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center p-4"
  >
    <div class="card w-full max-w-2xl bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <div role="alert" class="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span
            >Votre inscription à l'évènement a bien été prise en compte ! Vous devriez recevoir un
            mail de confirmation à cet effet !</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
