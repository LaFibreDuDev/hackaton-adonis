<template>
  <div>
    <!-- Modale d'inscription -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <!-- Overlay de fond -->
      <div class="fixed inset-0 bg-black opacity-80" @click="closeModal"></div>

      <!-- Contenu de la modale -->
      <div
        class="bg-gray-800 w-full max-w-md mx-4 rounded-xl shadow-2xl z-10 overflow-hidden transform transition-all"
      >
        <div class="relative">
          <!-- En-tête de la modale -->
          <div class="bg-gradient-to-r from-blue-900 to-indigo-800 px-6 py-4">
            <div class="flex justify-between items-center">
              <h3 class="text-2xl font-bold text-white">Inscription à la newsletter HackaTruite</h3>
              <button @click="closeModal" class="text-white hover:text-gray-300 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Contenu du formulaire -->
          <div class="px-6 py-6">
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="email" class="block text-blue-300 mb-2 font-medium"
                  >Adresse email*</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  placeholder="votre@email.com"
                  required
                  class="validator w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <div class="validator-hint">Entrez une adresse email valide</div>
                <p v-if="form.errors.email" class="mt-1 text-red-300 text-sm">
                  {{ form.errors.email }}
                </p>
              </div>

              <div class="mb-6">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      class="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="privacy" class="text-gray-300">
                      J'accepte la
                      <a
                        href="/confidentialite"
                        target="_blank"
                        class="text-blue-400 hover:underline"
                        >politique de confidentialité</a
                      >*
                    </label>
                  </div>
                </div>
              </div>

              <div class="mb-2 text-center">
                <button
                  type="submit"
                  class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center">
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Inscription en cours...
                  </span>
                  <span v-else>S'inscrire</span>
                </button>
              </div>

              <div class="text-center text-gray-400 text-sm">* Champs obligatoires</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref, reactive } from 'vue'

// États
defineProps<{
  isModalOpen: boolean
}>()

const emit = defineEmits(['closeModal'])

const isSubmitting = ref(false)

// Méthodes
const closeModal = () => {
  emit('closeModal')
}

const form = useForm({
  email: null,
})

const submitForm = async () => {
  isSubmitting.value = true
  form.post('/newsletter')
  isSubmitting.value = false
}
</script>
