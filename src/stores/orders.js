import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
 

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
            0:{
                id:1,
                customer_id:2,
                book_id:4,
                quantity: 2,
                total_paid: 3000,
                status:"pending",
            },
            1:{
                id:2,
                customer_id:5,
                book_id:6,
                quantity: 2,
                total_paid: 4800,
                status:"fulfilled",
            },
            2:{
                id:3,
                customer_id:2,
                book_id:5,
                quantity: 2,
                total_paid: 8000,
                status:"processing",
            },
            3:{
                id:4,
                customer_id:2,
                book_id:4,
                quantity: 2,
                total_paid: 4600,
                status:"fulfilled",
            },
            4:{
                id:5,
                customer_id:3,
                book_id:3,
                quantity: 1,
                total_paid: 2399,
                status:"pending",
            },
            5:{
                id:6,
                customer_id:1,
                book_id:7,
                quantity: 2,
                total_paid: 5000,
                status:"fullfilled",
            },
        }

        return{
            orders
        }
   },
   actions:{
       
   },
   persist: true,
})