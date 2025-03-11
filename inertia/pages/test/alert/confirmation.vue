<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col">
    <!-- Main Content -->
    <main class="flex-grow flex items-center justify-center py-12">
      <div class="container mx-auto px-6 max-w-lg">
        <div class="bg-gray-800 rounded-xl p-8 shadow-lg text-center">
          <div class="flex justify-center mb-6">
            <div class="rounded-full bg-green-200 bg-opacity-10 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 class="text-3xl font-bold mb-4 text-blue-300">Inscription confirmée !</h1>

          <p class="text-lg mb-6 text-gray-300">
            Félicitations ! Votre adresse email a été vérifiée avec succès. Vous êtes maintenant
            inscrit(e) au HackaTruite Winter 2025.
          </p>

          <div class="bg-blue-900 bg-opacity-50 rounded-lg p-6 mb-8">
            <h2 class="text-xl font-bold mb-3 text-blue-200">Prochaines étapes</h2>
            <ul class="text-left space-y-3">
              <li class="flex items-start">
                <span class="text-green-400 mr-2">✓</span>
                <span>Inscription confirmée</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Rejoignez notre serveur Discord pour rencontrer d'autres participants</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Préparez-vous pour le lancement le vendredi à 18h</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'
</script>
