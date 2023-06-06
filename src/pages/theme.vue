<script setup lang="ts">
import navbar from '../components/navbar.vue';
import {computed} from 'vue';
import {themeStore} from '../store/store'

const theme = themeStore()

let get_theme = computed(()=>{ return theme.getDarkmode})

</script>

<template>
    <section>
        <navbar/>
        <div 
         class="w-full h-screen flex justify-center items-center transition-all ease-in-out duration-500"
         :class="get_theme ? 'bg-gray-950':'bg-slate-300'"
        >
            <button
             @click="theme.change_Darkmode()" 
             class="bg-white px-16 py-1 rounded-md font-bold uppercase text-green-500"
            >
                <h2>change theme</h2>
            </button>
        </div>
    </section>
</template>