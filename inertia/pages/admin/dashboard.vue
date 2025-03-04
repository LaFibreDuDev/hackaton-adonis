<script setup lang="ts">
import Navbar from '~/components/admin/Navbar.vue'
import type { NewsletterListQueryResult } from '#services/newsletter_service'
import { DateTime } from 'luxon'
import { computed, reactive, ref, Ref, watch } from 'vue'

function useDebounce<T>(value: Ref<T>, delay: number = 300): Ref<T> {
  const debouncedValue = ref(value.value) as Ref<T>
  let timeout: ReturnType<typeof setTimeout>

  watch(value, (newValue) => {
    clearTimeout(timeout) // Annule le précédent timer
    timeout = setTimeout(() => {
      debouncedValue.value = newValue
    }, delay)
  })

  return debouncedValue
}

const props = defineProps<{
  newsletters: NewsletterListQueryResult
}>()

const search = ref('')
const searchDebounced = useDebounce(search, 300)
const newslettersFiltered = computed(() => {
  return props.newsletters.filter((newsletter) => newsletter.email.includes(searchDebounced.value))
})

const formatDate = (date: string, format = 'dd/MM/yyyy') => {
  if (!date) return ''
  return DateTime.fromISO(date).setLocale('fr').toFormat(format)
}
</script>

<template>
  <Navbar />

  <div class="p-4">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
    <h2 class="text-2xl font-bold mb-8">Liste des personnes inscrites à la newsletter</h2>

    <div class="flex gap-4 my-4">
      <label class="input">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input class="input grow" v-model="search" type="text" placeholder="Votre recherche ..." />
      </label>
    </div>

    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Compte actif</th>
            <th>Date d'activation</th>
            <th>Désabonné</th>
            <th>Date de désabonnement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="newsletter in newslettersFiltered">
            <th>{{ newsletter.id }}</th>
            <td>{{ newsletter.email }}</td>
            <td>
              <input
                type="checkbox"
                :checked="newsletter.active"
                class="toggle toggle-primary"
                disabled
              />
            </td>
            <td>{{ formatDate(newsletter.validatedAt?.toString() ?? '') }}</td>
            <td>
              <input
                type="checkbox"
                :checked="newsletter.unsubcribe"
                class="toggle toggle-primary"
                disabled
              />
            </td>
            <td>{{ formatDate(newsletter.unsubscribeAt?.toString() ?? '') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
