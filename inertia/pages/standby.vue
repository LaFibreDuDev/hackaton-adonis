<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import ConstructionAnimation from '~/components/ConstructionAnimation.vue'
import CountdownTimer from '~/components/CountdownTimer.vue'
import Layout from '~/components/Layout.vue'
</script>

<template>
  <Layout title="En construction">
    <div class="card w-full max-w-2xl bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h1 class="text-4xl font-bold mb-2">Site en Construction</h1>
        <div class="divider"></div>
        <div class="py-6">
          <ConstructionAnimation />
        </div>
        <p class="text-lg mb-6">
          Nous travaillons activement pour vous offrir une expérience exceptionnelle.
        </p>
        <CountdownTimer />
      </div>
    </div>
  </Layout>
</template>
