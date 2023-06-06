<script setup lang="ts">
 import {ref,computed} from 'vue'
 import navbar from '../components/navbar.vue';
 import { product_store, api_store } from '../store/store'

 const ProductStore = product_store()
 const Api_store = api_store()

 let ID = ref<string>("")
 let name = ref<string>("")
 let model = ref<string>("")
 let price = ref<number>(0)

 interface product{
    id: string,
    name: string,
    model: string,
    price: Number
 }

 
 let val = computed(()=>{
    return ProductStore.grtProduct
 })

 let Item =  computed(()=>{
    return Api_store.get_item
 })

 function addProduct(){
    let _prod:product = {} as product

    _prod.id = ID.value
    _prod.name = name.value
    _prod.model = model.value
    _prod.price = price.value

    ProductStore.add_product(_prod)
 }


</script>

<template>
    <section class="flex flex-col space-y-10  items-center h-screen bg-indigo-100">

        <navbar/>

        <h1 class="text-4xl font-mono">
            About Us
        </h1>

        <div class="w-full grid grid-cols-4 gap-4 px-16 py-8 bg-gray-400">

            <input
             v-model="ID"
             class="rounded-md w-full py-1 px-4"
             placeholder="Please enter id" 
             type="text"
            >

            <input
             v-model="name"
             class="rounded-md w-full py-1 px-4"
             placeholder="Please enter product name" 
             type="text"
            >

            <input
            v-model="model"
             class="rounded-md w-full py-1 px-4"
             placeholder="Please enter product model" 
             type="text"
            >

            <input
             v-model="price"
             class="rounded-md w-full py-1 px-4"
             placeholder="Please enter product price" 
             type="number"
            >
           
        </div>


        <div class="w-full flex justify-center items-center">

            <button
             @click="addProduct()" 
             class="py-4 px-2 bg-green-500 rounded-md text-white uppercase"
            >
                add product
            </button>

        </div>


        {{ val }}


        <button
          @click="Api_store.fetch_Item()" 
          class="py-4 px-2 bg-green-500 rounded-md text-white uppercase"
        >
            get items
        </button>


        <div class="px-8 py-1 flex justify-center items-center text-xl font-semibold">   
           {{ Item }}
        </div>


    </section>
</template>