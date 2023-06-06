import { defineStore } from 'pinia'
import axios from 'axios'

// define a type
type product={
    id: string,
    name: string,
    model: string,
    price: Number
}

export const product_store = defineStore('pordyct_store',{
    state:()=>({
        Product: {} as product
    }),

    getters:{
        grtProduct: (state) => state.Product
    },

    actions:{
        add_product(value:product){
            this.Product = value
        }
    }
})

export const themeStore = defineStore('themeStore',{
    state:()=>({
        DarkMode: false
    }),

    getters:{
        getDarkmode: (state) => state.DarkMode
    },

    actions:{
        change_Darkmode(){
            this.DarkMode = !this.DarkMode 
        }
    }
})


type json={
    userid:string,
    id:string,
    title:string,
    body:string
}

export const api_store = defineStore('api_store',{
    state:()=>({
        item:  {} as json
    }),

    getters:{
        get_item: (state) => state.item
    },

    actions:{
        async fetch_Item(){

            try{

                let request = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

                if(request.status == 200){
                    this.item = request.data
                }

            }catch(error:any){

                alert(error.message)

            }
        }
    }
})