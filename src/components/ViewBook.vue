<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const booksStore = useBooksStore()
const book = booksStore.selectedBook

const cartStore= useCartStore()
const quantity=ref(1)

function buy(book){
    const cartItem = { ...book, quantity: quantity.value }
    cartStore.updateCart(cartItem)
    router.push('/cart')
}

</script>

<template>
   <v-container>
    <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height=620 > </v-img>
            </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <v-card-item>
                        <v-card-title class="mb-4">{{ book.name }}</v-card-title>
                        <v-chip class="mb-4"> {{ book.genre }}</v-chip>
                            <v-row>
                                <v-col md="4">
                                    <v-rating :model-value="book.rating" :size="24" readonly ></v-rating>
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-text style="height:250px; overflow-y:auto;"> {{ book.long_description }}</v-card-text>
                        <v-card-subtitle>Ksh {{ book.price }}</v-card-subtitle>
                        <v-card-text> 
                            <v-row>   
                                                 
                                <v-col md="4">Quantity</v-col>
                                <v-col md="6">
                                    <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" > </v-number-input>A book helping nurture black womens mindset </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card-item>
                    <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-card-text>{{ book.price*quantity }}</v-card-text>
                        <v-btn elevation="4" variant="elevated" @click="buy(book)"> Add to Cart </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
   </v-container>
</template>