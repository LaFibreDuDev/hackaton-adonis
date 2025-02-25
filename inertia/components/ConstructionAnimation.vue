<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const secondRotation = ref(0);
const minuteRotation = ref(0);
const hourRotation = ref(0);
let animationFrame: number = 0;

const updateClock = () => {
  const now = new Date();

  // Calcul de la rotation des aiguilles
  secondRotation.value = now.getSeconds() * 6; // 6 degrés par seconde (360 / 60)
  minuteRotation.value = now.getMinutes() * 6 + now.getSeconds() * 0.1; // 6 degrés par minute + mouvement progressif
  hourRotation.value = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5; // 30 degrés par heure (360 / 12) + mouvement progressif

  animationFrame = requestAnimationFrame(updateClock);
};

onMounted(() => {
  animationFrame = requestAnimationFrame(updateClock);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div class="construction-animation relative">
    <div class="flex justify-center">
      <svg class="w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Cadran fixe -->
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="8" class="text-primary" />
        <circle cx="50" cy="50" r="3" fill="currentColor" class="text-accent" />

        <!-- Repères des heures -->
        <line x1="50" y1="15" x2="50" y2="20" stroke="currentColor" stroke-width="2" class="text-secondary" /> <!-- 12h -->
        <line x1="67.5" y1="17.5" x2="65" y2="22.5" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(30, 50, 50)" /> <!-- 1h -->
        <line x1="82.5" y1="32.5" x2="77.5" y2="35" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(60, 50, 50)" /> <!-- 2h -->
        <line x1="85" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="2" class="text-secondary" /> <!-- 3h -->
        <line x1="82.5" y1="67.5" x2="77.5" y2="65" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(30, 50, 50)" /> <!-- 4h -->
        <line x1="67.5" y1="82.5" x2="65" y2="77.5" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(60, 50, 50)" /> <!-- 5h -->
        <line x1="50" y1="85" x2="50" y2="80" stroke="currentColor" stroke-width="2" class="text-secondary" /> <!-- 6h -->
        <line x1="32.5" y1="82.5" x2="35" y2="77.5" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(30, 50, 50)" /> <!-- 7h -->
        <line x1="17.5" y1="67.5" x2="22.5" y2="65" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(60, 50, 50)" /> <!-- 8h -->
        <line x1="15" y1="50" x2="20" y2="50" stroke="currentColor" stroke-width="2" class="text-secondary" /> <!-- 9h -->
        <line x1="17.5" y1="32.5" x2="22.5" y2="35" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(30, 50, 50)" /> <!-- 10h -->
        <line x1="32.5" y1="17.5" x2="35" y2="22.5" stroke="currentColor" stroke-width="2" class="text-secondary" transform="rotate(60, 50, 50)" /> <!-- 11h -->


        <!-- Aiguille des heures -->
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="35"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          class="text-accent"
          :transform="`rotate(${hourRotation}, 50, 50)`"
        />

        <!-- Aiguille des minutes -->
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="25"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          class="text-secondary"
          :transform="`rotate(${minuteRotation}, 50, 50)`"
        />

        <!-- Aiguille des secondes -->
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          class="text-error"
          :transform="`rotate(${secondRotation}, 50, 50)`"
        />
      </svg>
    </div>
  </div>
</template>
