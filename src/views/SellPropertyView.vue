<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import router from '@/router';

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const form = reactive({
  address: {
    address: '',
    city: '',
    state: '',
    zip: ''
  },
  beds: '',
  baths: '',
  sqft: '',
  price: '',
  photo: null
})

const previewUrl = ref('');

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.photo = file;
    previewUrl.value = URL.createObjectURL(file);
  }
}

const handleSubmit = async () => {
  try {
    const formData = new FormData()

    // Encode the entire address object as JSON
    formData.append('address', JSON.stringify(form.address))

    formData.append('beds', form.beds)
    formData.append('baths', form.baths)
    formData.append('sqft', form.sqft)
    formData.append('price', form.price)
    if (form.photo) {
      formData.append('photo', form.photo)
    }

    const response = await axios.post(
      'https://property-management-backend-t28g.onrender.com/properties/add',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
    console.log('Property added:', response.data)
    router.push('/properties')
  } catch (error) {
    console.error('Error adding property:', error)
  }
}

</script>

<template>
  <section class="bg-orange-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Sell Property</h2>
          <div class="mb-4">
            <label for="address" class="block text-gray-700 font-bold mb-2">Address</label>
            <input v-model="form.address.address" type="text" id="address" name="address"
              class="border rounded w-full py-2 px-3 mb-2" placeholder="1234 Main St" required />
            <div class="flex">
              <div>
                <label for="city" class="block text-gray-700 font-bold mb-2">City</label>
                <input v-model="form.address.city" type="text" id="city" name="city"
                  class="border rounded w-full py-2 px-3 mb-2" required />
              </div>
              <div class="px-3">
                <label for="state" class="block text-gray-700 font-bold mb-2">State</label>
                <select v-model="form.address.state" id="state" name="state" class="border rounded w-full py-2 px-3"
                  required>
                  <option disabled value="">Select a state</option>
                  <option v-for="state in states" :key="state" :value="state">
                    {{ state }}
                  </option>
                </select>
              </div>
              <div>
                <label for="zip" class="block text-gray-700 font-bold mb-2">ZIP</label>
                <input v-model="form.address.zip" type="text" id="zip" name="zip"
                  class="border rounded w-full py-2 px-3 mb-2" required />
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"># of Bedrooms</label>
            <input v-model="form.beds" type="number" id="beds" name="beds" class="border rounded w-full py-2 px-3 mb-2"
              required />
          </div>
          <div class="mb-4">
            <label for="baths" class="block text-gray-700 font-bold mb-2"># of Bathrooms</label>
            <input v-model="form.baths" type="number" id="baths" name="baths" class="border rounded w-full py-2 px-3"
              required />
          </div>
          <div class="mb-4">
            <label for="sqft" class="block text-gray-700 font-bold mb-2">Sqft</label>
            <input v-model="form.sqft" type="number" id="sqft" name="sqft" class="border rounded w-full py-2 px-3"
              required />
          </div>
          <div class="mb-4">
            <label for="price" class="block text-gray-700 font-bold mb-2">Price</label>
            <input v-model="form.price" type="number" id="price" name="price" class="border rounded w-full py-2 px-3"
              required />
          </div>
          <div class="mb-8">
            <label for="photo" class="block text-gray-700 font-bold mb-2">Upload a photo</label>
            <input type="file" id="photo" name="photo" accept="image/*" @change="handleFileChange" required>
          </div>
          <div v-if="previewUrl" class="mb-4">
            <img :src="previewUrl" alt="Preview photo" class="w-40 h-40 object-cover rounded">
          </div>
          <div>
            <button
              class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit">
              List Property
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
