<script setup>

import { useWishStore } from '@/stores/wish'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';


const wishStore = useWishStore()
const  {wish}  = storeToRefs(wishStore)







</script>

<template>
    
    <v-container>
    
    <v-container v-if="wish.length === 0"class="d-flex flex-column align-center justify-center pa-12"
  style="background-color: #f5f5f5; min-height: 60vh;">
  <v-icon size="64" color="grey">mdi-heart-off</v-icon>
  <div class="text-h5 font-weight-bold text-center text-grey mt-4">
    Your Wish list is empty
  </div>
  <div class="text-body2 text-center text-grey mb-6">
    Start exploring and add books you love to your wishlist.
  </div>
        <v-btn color="primary" rounded="pill" prepend-icon="mdi-book-search" to="/books">
    Browse Books
  </v-btn>
  </v-container>
           
                
           
        
        <v-row v-else class="mt-12" >
            
                        <v-col cols="12" sm="6" md="4" lg="3"  v-for="(item,index) in wish" :key="index" >

                <v-card color="primary" elevation="2 rounded=lg" class="h-100 d-flex flex-column">
                                <v-card-item  >
                                    <v-img :src="item.image"  class="w-100"  height="200px" contain ></v-img>
                                    <v-card-title class="text-center text-h6 text-wrap">{{ item.name }}</v-card-title>
                                    <div class="text-center mb-2">
                                        <v-card-subtitle class="text-center">
                                            <v-icon color="success" class="mr-1" >mdi-cash </v-icon> Ksh {{ item.price }}</v-card-subtitle>
                                    </div>
                                    <div class="text-center mb-4">
                                    <v-card-text class="text-center">Total: Ksh {{ item.price * item.quantity}} </v-card-text>
                                </div>
                            </v-card-item>
                            <v-card-actions class="justify-space-between" mt-auto>
                                <v-btn elevation="4" variant="elevated" color="success" @click=buy(book) rounded="pill" prepend-icon="mdi-cart"> Purchase Item </v-btn>
                                <v-btn elevation="4" variant="elevated" color="error" rounded="pill" prepend-icon="mdi-delete"> Remove from wish list </v-btn>
                            </v-card-actions>

                                    <v-spacer></v-spacer> 
                          
                                     
                              </v-card>  
                        </v-col>
                    </v-row>
                
            
       
    </v-container>
</template>
