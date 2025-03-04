<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import Alert from '~/components/Alert.vue'

defineProps<{ title: string; message: string; alertType: 'success' | 'error' }>()
</script>

<template>
  <Layout :title="title">
    <div class="card w-full max-w-2xl bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <Alert :type="alertType">{{ message }}</Alert>
      </div>
    </div>
  </Layout>
</template>
