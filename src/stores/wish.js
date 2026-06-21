import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishStore = defineStore('wish',  {
   state: () => {
        const wish= []

        return{
            wish
        }
   },
   actions:{
       updateWish(payload) {
           this.wish.push (payload)

           
           
       },
   },
   persist: true,
})