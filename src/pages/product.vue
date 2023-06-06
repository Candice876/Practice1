<script setup lang="ts">
import navbar from '../components/navbar.vue';
</script>

<template>
    <section class="flex flex-col space-y-10 items-center h-full bg-gradient-to-r from-purple-500 to-pink-500">
        <navbar/>

        <h1 class="text-4xl font-mono underline">
            Products Page
        </h1>
        <div class="font-serif text-lg">Welcome to the something store! We are excited to have you....</div>

        <div class="flex justify-center items-center space-x-5">

        <div class="flex flex-col">
        <div class="flex flex-col justify-center items-center shadow-2xl rounded-2xl">
            <button class="hover:animate-bounce">
            <img class="h-[17rem] w-[17rem] rounded-2xl" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="img">
            </button>
        </div>
        <div class="item-center justify-center text-center py-3 px-16">
           <p>Yahweh T-Shirt</p>
           <p>$900</p>
           <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
            <div class="font-bold text-gray-800">Add Item</div>
           </button>
        </div>
        </div>

        <div class="flex flex-col">
        <div class="flex flex-col justify-center items-center space-y-6 shadow-2xl rounded-2xl">
            <button class="hover:animate-bounce">
            <img class="h-[17rem] w-[17rem] rounded-2xl " src="https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img">
            </button>
        </div>
        <div class="item-center justify-center text-center py-3 px-16">
           <p>Hoodie</p>
           <p>$1200</p>
           <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
            <div class="font-bold text-gray-800">Add Item</div>
           </button>
        </div>
        </div>

        <div class="flex flex-col">
        <div class="flex flex-col justify-center items-center space-y-6 shadow-2xl rounded-2xl">
            <button class="hover:animate-bounce">
            <img class="h-[17rem] w-[17rem] rounded-2xl" src="https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dlYXRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img">
            </button>
        </div>
        <div class="item-center justify-center text-center px-16 py-3">
           <p>Sweat Shirt</p>
           <p>$2000</p>
           <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
            <div class="font-bold text-gray-800">Add Item</div>
           </button>
        </div>
        </div>

        <div class="flex flex-col">
            <div class="flex flex-col justify-center items-center space-y-6 shadow-2xl rounded-2xl bg-inherit">
                <button class="hover:animate-bounce">
                 <img class="h-[17rem] w-[17rem] rounded-2xl" src="https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWNjZXNzb3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="img">
               </button>  
           </div>  
           <div class="item-center justify-center text-center py-3 px-16">
           <p>Glasses</p>
           <p>$750</p>
           <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
            <div class="font-bold text-gray-800">Add Item</div>
           </button>
        </div>
        </div>

        </div>



        <div class="flex justify-center items-center space-x-5">

            <div class="flex flex-col">
                <div class="flex flex-col justify-center items-center shadow-2xl rounded-2xl">
                <button class="hover:animate-bounce">
                <img class="h-[17rem] w-[17rem] rounded-2xl" src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY2Vzc29yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img">
                </button>
            </div>
                <div class="item-center justify-center text-center py-3 px-16">
                <p>Jelt Purse</p>
                <p>$2300</p>
                <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
                    <div class="font-bold text-gray-800">Add Item</div>
                </button>
                </div>
                </div>

            <div class="flex flex-col">
                <div class="flex flex-col justify-center items-center space-y-6 shadow-2xl rounded-2xl">
                    <button class="hover:animate-bounce">
                    <img class="h-[17rem] w-[17rem] rounded-2xl " src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img">
                    </button>
                </div>
                <div class="item-center justify-center text-center py-3 px-16">
                <p>Jeans Pants</p>
                <p>$1000</p>
                <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
                    <div class="font-bold text-gray-800">Add Item</div>
                </button>
                </div>
            </div>

                <div class="flex flex-col">
                <div class="flex flex-col justify-center items-center space-y-6 shadow-2xl rounded-2xl">
                    <button class="hover:animate-bounce">
                    <img class="h-[17rem] w-[17rem] rounded-2xl" src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="img">
                    </button>
                </div>
                <div class="item-center justify-center text-center px-16 py-3">
                <p>Air Shoes</p>
                <p>$1500</p>
                <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
                    <div class="font-bold text-gray-800">Add Item</div>
                </button>
                </div>
                </div>

            <div class="flex flex-col">
                    <div class="flex flex-col justify-center items-center space-y-6 shadow-2xl rounded-2xl bg-inherit">
                        <button class="hover:animate-bounce">
                        <img class="h-[17rem] w-[17rem] rounded-2xl" src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="img">
                    </button>  
                </div>  
                <div class="item-center justify-center text-center py-3 px-16">
                <p>Tie</p>
                <p>$950</p>
                <button class="flex flex-col w-[8rem] h-[1.5rem] justify-center items-center bg-red-300 rounded-md">
                    <div class="font-bold text-gray-800">Add Item</div>
                </button>
                </div>
            </div>

</div>

    </section>
</template>