<script setup lang="ts">
    const Routes=[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"About",
            path:"/about"
        },
        {
            name:"Product",
            path:"/product"
        },
        {
            name:'Theme',
            path:'/theme'
        }
    ]
</script>

<template>
    <nav
     class="flex justify-between items-center w-full bg-gradient-to-r from-purple-500 to-pink-400 py-2 px-8"
    >

        <router-link to="/">
            Logo
        </router-link>


        <div class="flex space-x-4">

            <router-link
             class="text-white"
             v-for="(route,index) in Routes" 
             :to="route.path"
             :class="index === 2 ? 'text-indigo-500':'' "
            >
                {{ route.name }}
            </router-link>

        </div>

    </nav>
    
</template>