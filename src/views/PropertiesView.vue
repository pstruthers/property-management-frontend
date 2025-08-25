<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import PulseSpinner from 'vue-spinner/src/PulseLoader.vue'

const properties = ref([])

const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('https://property-management-backend-t28g.onrender.com/properties')
    properties.value = response.data
  } catch (error) {
    console.log('Error fetching properties', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="bg-orange-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-orange-500 mb-6 text-center">Available Properties</h2>
      <div v-if="isLoading" class="text-center py-10">
        <PulseSpinner :color="'#f97316'" />
      </div>
      <div v-else-if="!properties.length" class="w-full text-center py-10">
        <span class="italic text-gray-700">No properties available</span>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="property in properties" :key="property.id"
          class="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <img :src="`http://localhost:8765/uploads/${property.photo}`" alt="Image" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/50 flex flex-col justify-between p-4 text-white">
            <div class="flex items-center">
              <font-awesome-icon icon="map-marker-alt" class="opacity-75" />
              <div class="pl-2 opacity-75">
                {{ property.address + ', ' + property.city + ', ' + property.state + ' ' + property.zip }}
              </div>
            </div>
            <div>
              <span class="text-4xl font-bold">{{ '$' + property.price.toLocaleString() }}</span class="font-bold">
              <div class="flex pt-2">
                <div>
                  <font-awesome-icon icon="bed" class="opacity-75" />
                  <span class="pl-2 opacity-75">{{ property.beds }}</span>
                </div>
                <div class="px-6">
                  <font-awesome-icon icon="bath" class="opacity-75" />
                  <span class="pl-2 opacity-75">{{ property.baths }}</span>
                </div>
                <div>
                  <font-awesome-icon icon="ruler-combined" class="opacity-75" />
                  <span class="pl-2 opacity-75">{{ property.sqft }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>