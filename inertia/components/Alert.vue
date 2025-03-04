<script setup lang="ts">
import { computed } from 'vue'
import DangerIcon from '~/components/icons/DangerIcon.vue'
import SuccessIcon from '~/components/icons/SuccessIcon.vue'
const props = defineProps<{ type: 'success' | 'error' }>()

const alertClass = computed(() => `alert-${props.type}`)
</script>

<template>
  <div role="alert" :class="['alert', alertClass]">
    <SuccessIcon v-if="type === 'success'" />
    <DangerIcon v-if="type === 'error'" />
    <span><slot /></span>
  </div>
</template>
