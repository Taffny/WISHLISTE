<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart'


const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)

</script>

<template>
    
    <v-container >
        <div v-if="cart.length == 0" class="mt-12">
            <v-card color="primary" variant="tonal" class="pa-4" elevation="4">
                <div class="text-display-small mb-12 mt-12 text-center">
                    Your cart is empty
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn to="/books" variant="elevated">Browse Books</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </div>
        <div v-else>
        <v-row>
            <v-col md="12">
                <div class="text-display-medium mb-12 mt-12 text-center">
                    Your Orders
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" v-for="(item, index) in cart" :key="index">
                <v-card color="primary" class="pa-4" elevation="4">
                    <v-row>
                        <v-col cols="4" class="text-center d-flex justify-center" >
                                <v-img aspect-ratio="3/4" class="rounded-lg" max-height="300" max-width="100%" contain :src="item.image" ></v-img>
                            
                        </v-col>
                        <v-col cols="8" class="text-right">
                                <v-card-item >
                                    <v-card-title class="mb-4 text-wrap text-h5 font-weight-bold" >{{ item.name }}</v-card-title>
                                    <v-card-subtitle class="text-subtitle1 text-success">Ksh {{ item.price }}</v-card-subtitle>
                                    <v-card-subtitle align="center" class="my-2">
                                        <v-row class="align-center">
                                            <v-col cols="4">Quantity:</v-col>
                                            <v-col cols="6">
                                                <v-number-input v-model="item.quantity" rounded="pill" density="comfortable" control-variant="split" :min="1" :max="10"></v-number-input>
                                            </v-col>
                                        </v-row>
                                    </v-card-subtitle>
                                    <v-card-text class="mt-2">Total:<strong> Ksh {{ item.price * item.quantity}} </strong></v-card-text>
                                </v-card-item>
                                <v-card-actions>
                                    <v-spacer></v-spacer> 
                                    <v-btn elevation="4" variant="elevated" rounded="pill" prepend-icon="mdi-cart" color="secondary"> Checkout </v-btn>
                                </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        </div>
    </v-container>
</template>
