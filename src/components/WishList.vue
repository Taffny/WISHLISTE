<script setup>

import { useWishStore } from '@/stores/wish'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';


const wishStore = useWishStore()
const { wish } = storeToRefs(wishStore)

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
            <v-col md="12" v-for="(item,index) in wish" :key="index" >
                <v-card color="primary">
                    <v-row class="align-center" style="min-height:200px;">
                        <v-col md="3" class="d-flex flex-column justify-centre align-center">
                            
                                <v-img :src="item.image" max-width="150" max-height="200" contain ></v-img>
                            
                        </v-col>
                        <v-col md="9" class="d-flex flex-column justify-center">
                                <v-card-item>
                                    <v-card-title class=" text-center mb-4">{{ item.name }}</v-card-title>
                                    <div class="text-center mb-2">
                                        <v-card-subtitle class="text-center">Ksh {{ item.price }}</v-card-subtitle>
                                    </div>
                                    <div class="text-center mb-4">
                                    <v-card-text class="text-center">Total: Ksh {{ item.price * item.quantity}} </v-card-text>
                                </div>
                            </v-card-item>
                            <v-card-actions class="justify-center gap-2">
                                <v-btn elevation="4" variant="elevated" color="success" @click=checkout(item)> Purchase Item </v-btn>
                                <v-btn elevation="4" variant="elevated" color="bg-secondary"> Remove from wish list </v-btn>
                            </v-card-actions>
                                    
                                    
                                
                                
                                    <v-spacer></v-spacer> 
                          
                                     
                                
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
