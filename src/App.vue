<script setup lang="ts">
</script>

<template>
   <div>
    <router-view/>
   </div>  
</template>


    <!-- <div class="flex flex-col items-center rounded-md w-[18rem] h-[27rem] bg-white p-2 space-y-4">
      
      <div class="rounded-md w-full h-[15rem] flex justify-center items-center bg-blue-500 "> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
        </svg> 
        <img src="/icon-star.svg" alt="sar">

      </div>
      
      <h1 class="font-bold justify-center items-center">Improve your front-end <br>skills by building projects</h1>

      <div class="flex justify-center items-center text-center text-sm px-7">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
    
    </div> 

    <div class="flex flex-col rounded-2xl w-[18rem] h-[18rem] bg-[#252D37] p-6 space-y-4">
      
      <div class="h-7 w-7 flex justify-center items-center rounded-full bg-gray-700">
        <img class="h-3 w-3"  src="/icon-star.svg" alt="star">
      </div>
      <h1 class=" flex flex-col text-white">How did we do?</h1>
      <div class="text-xs text-gray-400">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings</div>
      
      <div class="flex justify-center items-center w-full space-x-4">

        <div
          v-for="i in 5"
          class="flex justify-center items-center rounded-full h-8 w-8 bg-gray-700 text-white text-xs"
        >   
         {{ i }}
       </div>

      </div>

      <button class="w-full h-8 rounded-full bg-[#FB7413]">
         <div class="text-white text-xs">SUBMIT</div>
      </button>

      


    </div>

    <div class="flex rounded-md w-[45rem] h-[17.6rem] bg-[#1D1934] "> 
      
      <div class="flex flex-col space-y-2 w-full text-white p-10">
        <h1 class="text-3xl font-semibold">
          Get insights that help
        </h1>
        <h1 class="text-3xl font-semibold">
          your bussiness grow
        </h1>
        <div class="text-sm py-2">Discover the benefits of data analytics and make better decisions regarding revenue, customer, experince and overall efficiency</div>
      
          <div 
           class="flex space-x-4 w-full"
          >
            <div
             v-for="(item, index ) in List"  
             class="flex flex-col justify-center items-center space-y-1"
            >
             <h1 class="text-xl font-bold"> 
              {{ item.header }}
             </h1>
             <h2 :class="index === 0 ? 'text-gray-500':''">
              {{ item.text }}
            </h2>
            </div>


        </div>

      </div>

      

      <div class="w-full h-full bg-[#AA5CDB]">
        <div class="opacity-50">
          <img class="overflow-hidden rounded-r-md" src="/image-header-desktop.jpg" alt="">
        </div>
        
      </div>

    </div>



<template>
  <section
   class="flex w-full h-screen bg-indigo-300 justify-center items-center" 
  >
    <div class="rounded-md w-[24rem] bg-white h-[20rem] flex flex-col items-center shadow-2xl">

      <div class="w-full h-64 bg-indigo-400 rounded-t-md">

      </div>

      <div class="h-28 w-28 rounded-full bg-gray-300 -mt-16">
          <img 
           class="object-cover h-28 w-28 overflow-hidden rounded-full" 
           src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
           alt="image"
          >
      </div>

      <div class="flex flex-col justify-center items-center w-full py-2">
         <div class="w-full flex justify-center items-center space-x-2">
           <h1 class="font-bold">Victor Crest</h1> 
           <h1>26</h1>
         </div>
          <p>London</p>
      </div>

      <div class="flex justify-center items-center space-x-8 w-full py-4">
        

        <div class="flex flex-col justify-center items-center space-y-1">
          <h1 class="text-xl font-bold">80K</h1>
          <h2 class="text-gray-300">followers</h2>
        </div>

        <div class="flex flex-col justify-center items-center space-y-1">
          <h1 class="text-xl font-bold">803K</h1>
          <h2 class="text-gray-300">Likes</h2>
        </div>

        <div class="flex flex-col justify-center items-center space-y-1">

          <h1 class="text-xl font-bold">1.4K</h1>
          <h2 class="text-gray-300">Photos</h2>
        </div>

      </div>
    </div>
  </section>
</template> -->

 

