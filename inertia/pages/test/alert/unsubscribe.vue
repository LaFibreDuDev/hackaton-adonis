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

          <h1 class="text-3xl font-bold mb-4 text-blue-300">Désinscription confirmée</h1>

          <p class="text-lg mb-6 text-gray-300">
            Vous avez été désinscrit(e) avec succès de la liste des participants du HackaTruite.
            Vous ne recevrez plus d'emails concernant cet événement.
          </p>

          <div class="bg-gray-700 rounded-lg p-6 mb-8">
            <h2 class="text-xl font-bold mb-3 text-blue-200">
              Nous sommes désolés de vous voir partir
            </h2>
            <p class="text-gray-300 mb-4">
              Si vous souhaitez nous faire part de la raison de votre désinscription ou nous donner
              votre avis sur l'événement, n'hésitez pas à nous contacter.
            </p>
            <p class="text-gray-300">
              Vous pourrez toujours vous réinscrire pour une prochaine édition si vous changez
              d'avis.
            </p>
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
