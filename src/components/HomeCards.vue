<script setup>
import Card from './Card.vue';
</script>

<template>
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">For Buyers</h2>
          <p class="mt-2 mb-4">Browse properties and buy your dream home</p>
          <RouterLink to="/properties" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Browse Properties
          </RouterLink>
        </Card>
        <Card bg="bg-orange-100">
          <h2 class="text-2xl font-bold">For Sellers</h2>
          <p class="mt-2 mb-4">List your property for sale and find potential buyers</p>
          <RouterLink to="/sell-property"
            class="inline-block bg-orange-600 text-white rounded-lg px-4 py-2 hover:bg-orange-700">
            Sell Your Property
          </RouterLink>
        </Card>
      </div>
    </div>
</template>