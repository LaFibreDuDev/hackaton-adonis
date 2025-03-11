<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-900 to-indigo-800 py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center text-center">
          <a href="/" class="mb-6"> </a>
          <h1 class="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p class="text-xl max-w-2xl">
            Nous prenons la protection de vos données personnelles très au sérieux.
          </p>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="py-12">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="bg-gray-800 rounded-xl p-8 shadow-lg">
          <!-- Introduction -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Introduction</h2>
            <p class="mb-4">
              La présente politique de confidentialité explique comment HackaTruite collecte,
              utilise et protège les informations que vous nous fournissez lorsque vous utilisez
              notre site web et participez à notre hackathon.
            </p>
            <p>
              En participant au HackaTruite, vous acceptez les pratiques décrites dans la présente
              politique.
            </p>
          </section>

          <!-- Collecte d'informations -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Informations que nous collectons</h2>
            <p class="mb-4">Nous pouvons collecter les informations suivantes :</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Adresse e-mail</li>
            </ul>
          </section>

          <!-- Utilisation des informations -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Utilisation des informations</h2>
            <p class="mb-4">Nous utilisons les informations collectées pour :</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Gérer votre inscription au hackathon</li>
              <li>Communiquer avec vous concernant l'événement</li>
              <li>Vous identifier en tant que participant</li>
              <li>Créer les équipes sur GitHub et Discord</li>
              <li>Vous informer des futures éditions de HackaTruite</li>
            </ul>
          </section>

          <!-- Stockage et sécurité -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Stockage et sécurité des données</h2>
            <p class="mb-4">
              Toutes les informations que vous nous fournissez sont stockées sur des serveurs
              sécurisés. Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre tout accès, modification,
              divulgation ou destruction non autorisés.
            </p>
            <p>
              Les données d'inscription sont stockées dans notre base de données et peuvent être
              exportées au format CSV uniquement par les administrateurs de l'événement.
            </p>
          </section>

          <!-- Partage des informations -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Partage des informations</h2>
            <p class="mb-4">
              Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles
              identifiables à des tiers. Cela n'inclut pas les tiers de confiance qui nous aident à
              exploiter notre site Web ou à organiser l'événement, à condition que ces parties
              conviennent de garder ces informations confidentielles.
            </p>
            <p>
              Veuillez noter que vos projets soumis seront publics sur l'organisation GitHub
              HackaTruite, conformément à la licence MIT.
            </p>
          </section>

          <!-- Vos droits -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Vos droits</h2>
            <p class="mb-4">Vous avez le droit de :</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Accéder aux informations personnelles que nous détenons vous concernant</li>
              <li>Demander la rectification ou la suppression de vos données personnelles</li>
              <li>Vous opposer au traitement de vos données personnelles</li>
              <li>Demander la limitation du traitement de vos données personnelles</li>
              <li>Demander la portabilité de vos données</li>
            </ul>
            <p class="mt-4">
              Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée ci-dessous.
            </p>
          </section>

          <!-- Cookies -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Cookies</h2>
            <p class="mb-4">Notre site Web n'utilise pas de cookies.</p>
          </section>

          <!-- Modifications de la politique -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Modifications de cette politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous
              vous informerons de tout changement en publiant la nouvelle politique de
              confidentialité sur cette page. Nous vous recommandons de consulter régulièrement
              cette politique pour prendre connaissance des éventuelles modifications.
            </p>
          </section>

          <!-- Contact -->
          <section>
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Nous contacter</h2>
            <p class="mb-4">
              Si vous avez des questions concernant cette politique de confidentialité, veuillez
              nous contacter :
            </p>
            <div class="bg-gray-700 p-4 rounded-lg">
              <p class="font-semibold">HackaTruite - La Fibre du Dev</p>
              <p>Email : lafibredudev@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>

    <!-- Retour à l'accueil -->
    <div class="py-8 text-center">
      <a href="/" class="inline-flex items-center text-blue-400 hover:text-blue-300 transition">
        <span class="mr-2">←</span> Retour à la page d'accueil
      </a>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'

// Pas besoin de logique supplémentaire pour cette page
</script>
