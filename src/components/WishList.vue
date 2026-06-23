<script setup>

import { useWishStore } from '@/stores/wish'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';


const wishStore = useWishStore()
const  {wish}  = storeToRefs(wishStore)

function buy(book){
    // Create a new object with all book properties
    const cartItem = Object.assign(... book, { quantity: quantity.value })
    console.log('Adding to cart:', cartItem)
    cartStore.updateCart(cartItem)
    router.push('/cart')
}


</script>

<template>
    
    <v-container>
        <v-row>
            <v-col md="12" >
                <div class="text-display-medium mb-12 mt-12 text-center">
                    Your Wish list
                </div>
            </v-col>
        </v-row>
        <v-row>
            
                        <v-col md="4"  v-for="(item,index) in wish" :key="index" >
                <v-card color="primary" elevation="2 rounded=lg">
                           
                                <v-card-item  >
                                    <v-img :src="item.image"  class="w-100"  height="200px" contain ></v-img>
                                    <v-card-title class="text-center text-h6 text-wrap">{{ item.name }}</v-card-title>
                                    <div class="text-center mb-2">
                                        <v-card-subtitle class="text-center">Ksh {{ item.price }}</v-card-subtitle>
                                    </div>
                                    <div class="text-center mb-4">
                                    <v-card-text class="text-center">Total: Ksh {{ item.price * item.quantity}} </v-card-text>
                                </div>
                            </v-card-item>
                            <v-card-actions class="justify-space-between">
                                <v-btn elevation="4" variant="elevated" color="success" @click=buy(book)> Purchase Item </v-btn>
                                <v-btn elevation="4" variant="elevated" color="error"> Remove from wish list </v-btn>
                            </v-card-actions>

                                    <v-spacer></v-spacer> 
                          
                                     
                              </v-card>  
                        </v-col>
                    </v-row>
                
            
       
    </v-container>
</template>
