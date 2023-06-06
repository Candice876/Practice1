<script setup lang="ts">
    import navbar from '../components/navbar.vue';
</script>

<template>
   <section class="flex flex-col w-full h-screen space-y-4 items-center bg-blue-100 text-gray-800 bg-bg_Image">

    <navbar/>

    <div class="flex flex-col items-center  w-[26rem] lg:h-[36rem] bg-[#E0E8FF] space-y-4 rounded-2xl shadow-2xl"> 

    <div class="flex flex-col items-center justify-center rounded-t-2xl">
        <img  class="object-contain overflow-hidden rounded-t-2xl" src="/illustration-hero.svg" alt="background">
    </div>

        <div class="flex flex-col items-center justify-center text-center space-y-3 px-8 py-4">
        <div class="font-bold text-2xl">Order Summary</div>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </div>
        
        <div class="flex justify-center items-center space-x-8 w-full py-4">
        
        <div class="flex justify-center items-center space-y-1">
        <img src="/icon-star.svg" alt="star">
        </div>

        <div class="flex flex-col justify-center items-center space-y-1">
        <p class="font-bold">Annual Plan</p>
        <p class="text-gray-500">$59.99/year</p>
        </div> 

        <button class="text-purple-800">Change</button>
        </div>

        <button 
        class="flex item-center justify-center rounded-md py-2 w-[18rem] bg-[#3829E0] text-white font-bold">
        Proceed to payment
        </button>
    </div>

  </section>
</template>