<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Date de lancement (30 jours à partir de maintenant)
const launchDate = new Date("2025-02-25");
launchDate.setDate(launchDate.getDate() + 10);

const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
});

let timer: NodeJS.Timeout;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = launchDate.getTime() - now;

  if (distance > 0) {
    countdown.value = {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
      minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
      seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0')
    };
  }
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="countdown-timer">
    <h2 class="text-xl font-semibold mb-2">Lancement prévu dans</h2>
    <div class="grid grid-cols-4 gap-2">
      <div class="countdown-item">
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-value text-primary">{{ countdown.days }}</div>
            <div class="stat-desc">Jours</div>
          </div>
        </div>
      </div>
      <div class="countdown-item">
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-value text-primary">{{ countdown.hours }}</div>
            <div class="stat-desc">Heures</div>
          </div>
        </div>
      </div>
      <div class="countdown-item">
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-value text-primary">{{ countdown.minutes }}</div>
            <div class="stat-desc">Minutes</div>
          </div>
        </div>
      </div>
      <div class="countdown-item">
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-value text-primary">{{ countdown.seconds }}</div>
            <div class="stat-desc">Secondes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
