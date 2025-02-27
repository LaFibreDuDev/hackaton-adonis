<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '',
  }
)
</script>

<template>
  <Head :title="title" />

  <div
    class="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center p-4"
  >
    <slot />
  </div>

  <footer
    class="footer place-items-center sm:footer-horizontal bg-neutral text-neutral-content p-10"
  >
    <nav class="">
      <h6 class="footer-title">Pages</h6>
      <Link class="link link-hover" href="/">Page d'accueil</Link>
    </nav>
    <nav>
      <h6 class="footer-title">Légalité</h6>
      <Link class="link link-hover" href="/privacy_policy">Politique de confidentialité</Link>
    </nav>
  </footer>
</template>
