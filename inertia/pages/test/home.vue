<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <header class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-90 z-0"
      ></div>
      <div class="container mx-auto px-6 py-16 relative z-10">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-5xl font-bold mb-4 text-blue-200">HackaTruite</h1>
          <h2 class="text-3xl font-semibold mb-8">Winter 2025</h2>
          <p class="text-xl mb-10 max-w-2xl">
            48 heures de création, d'innovation et de code ! Rejoignez-nous pour ce hackathon unique
            et créez quelque chose d'extraordinaire.
          </p>
          <p class="text-xl mb-10 max-w-2xl">Cet évènement est organisé au mois de Mars 2025 !</p>
          <div class="flex flex-wrap justify-center gap-4">
            <button
              @click="openModal"
              class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
            >
              S'inscrire
            </button>
            <a
              href="https://www.twitch.tv/lafibredudev"
              class="bg-transparent border-2 border-blue-300 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
            >
              Chaine twitch LaFibreDuDev
            </a>
            <a
              href="https://www.twitch.tv/oclock_io"
              class="bg-transparent border-2 border-blue-300 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
            >
              Chaine twitch O'clock
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Information Section -->
    <section class="py-16 bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-blue-300">À propos du hackathon</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Format Card -->
          <div
            class="bg-gray-700 rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition duration-300"
          >
            <div class="text-blue-400 text-4xl mb-4">
              <span class="iconify" data-icon="mdi:calendar-clock"></span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-blue-200">Format</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Sur 48h (du vendredi 18h au dimanche 18h)</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Inscription libre et en équipe</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Choix des technos libres</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Thème dévoilé le vendredi à 18h lors d'un live</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Projets open-source sur l'organisation HackaTruite</span>
              </li>
            </ul>
          </div>

          <!-- Règles Card -->
          <div
            class="bg-gray-700 rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition duration-300"
          >
            <div class="text-blue-400 text-4xl mb-4">
              <span class="iconify" data-icon="mdi:gavel"></span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-blue-200">Règles</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Le projet doit partir de zéro</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Librairies et Frameworks autorisés</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Licence des projets MIT</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Projets hébergés sur GitHub</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Documentation obligatoire (en markdown)</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Rejoindre le Discord HackaTruite</span>
              </li>
            </ul>
          </div>

          <!-- Infrastructure Card -->
          <div
            class="bg-gray-700 rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition duration-300"
          >
            <div class="text-blue-400 text-4xl mb-4">
              <span class="iconify" data-icon="mdi:server"></span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-blue-200">Infrastructure</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Serveur Discord dédié pour la communication</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Organisation GitHub pour les repos des projets</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                <span>Équipes de 2 à 5 personnes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-blue-300">Déroulement</h2>

        <div class="relative">
          <!-- Vertical Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

          <!-- Timeline Items -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Item 1 -->
            <div class="md:ml-auto md:mr-8 md:text-right relative">
              <div class="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 class="text-xl font-bold text-blue-300 mb-2">Inscriptions</h3>
                <p>Inscrivez-vous en équipe et préparez-vous pour le grand jour.</p>
              </div>
            </div>
            <div class="hidden md:block"></div>

            <!-- Item 2 -->
            <div class="hidden md:block"></div>
            <div class="md:mr-auto md:ml-8 relative">
              <div class="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 class="text-xl font-bold text-blue-300 mb-2">
                  Live d'ouverture - Vendredi 18h
                </h3>
                <p>Annonce du thème et lancement officiel du hackathon.</p>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="md:ml-auto md:mr-8 md:text-right relative">
              <div class="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 class="text-xl font-bold text-blue-300 mb-2">Développement - 48h</h3>
                <p>Travaillez en équipe, codez et innovez pendant 48 heures intenses.</p>
              </div>
            </div>
            <div class="hidden md:block"></div>

            <!-- Item 4 -->
            <div class="hidden md:block"></div>
            <div class="md:mr-auto md:ml-8 relative">
              <div class="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 class="text-xl font-bold text-blue-300 mb-2">
                  Fin du Hackathon - Dimanche 18h
                </h3>
                <p>Soumission des projets sur GitHub et préparation des présentations.</p>
              </div>
            </div>

            <!-- Item 5 -->
            <div class="md:ml-auto md:mr-8 md:text-right relative">
              <div class="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 class="text-xl font-bold text-blue-300 mb-2">Review des projets</h3>
                <p>Live sur la chaîne O'clock pour présenter et examiner tous les projets.</p>
              </div>
            </div>
            <div class="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-blue-900 to-indigo-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6">Prêt à relever le défi ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez-nous pour cette aventure créative de 48 heures et montrez vos compétences en
          développement.
        </p>
        <button
          @click="openModal"
          class="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-lg font-semibold text-lg transition"
        >
          S'inscrire maintenant
        </button>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
  <SubscriptionForm :isModalOpen="isModalOpen" @closeModal="closeModal" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Footer from '~/components/Footer.vue'
import SubscriptionForm from '~/components/SubscriptionForm.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
  document.body.classList.add('overflow-hidden')
}
const closeModal = () => {
  isModalOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

onMounted(() => {})
</script>
