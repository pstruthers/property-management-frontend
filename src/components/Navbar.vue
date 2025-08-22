<script setup>
import logo from '@/assets/logo.svg';
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <nav class="bg-orange-600">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink to="/" class="flex flex-shrink-0 items-center mr-4">
            <img :src="logo" alt="Haven" class="hidden md:block h-10 w-auto" />
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/"
                :class="`${isActiveLink('/') ? 'bg-orange-700' : 'hover:bg-orange-700 hover:text-white'} text-white font-medium rounded-md px-3 py-2`">
                Home
              </RouterLink>
              <RouterLink to="/properties"
                :class="`${isActiveLink('/properties') ? 'bg-orange-700' : 'hover:bg-orange-700'} text-white font-medium rounded-md px-3 py-2`">
                Browse
              </RouterLink>
              <RouterLink to="/sell-property"
                :class="`${isActiveLink('/sell-property') ? 'bg-orange-700' : 'hover:bg-orange-700'} text-white font-medium rounded-md px-3 py-2`">
                Sell
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>