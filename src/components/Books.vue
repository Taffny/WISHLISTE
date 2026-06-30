<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import { useWishStore } from '@/stores/wish'
import { storeToRefs } from 'pinia';

const router = useRouter()
const booksStore = useBooksStore()
const books= booksStore.books
const wishStore=useWishStore()
const cartStore= useCartStore()
const quantity=ref(1)

function view(book){
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_book')
}


function buy(book){
    // Create a new object with all book properties
    const cartItem = Object.assign({},book, { quantity: quantity.value })
    console.log('Adding to cart:', cartItem)
    cartStore.updateCart(cartItem)
    router.push('/cart')
}


function wish(book){
    // Create a new object with all book properties
    const wishItem = Object.assign({}, book, { quantity: quantity.value })
    console.log('Adding to wish:', wishItem)
    console.log('image:', wishItem.image)
    wishStore.updateWish(wishItem)
    router.push('/wish_list')
    
}
</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                
                <div class="text-h4 font-weight-bold text-center text-primary mb-6 text-white">
  <v-icon color="primary" class="mr-2">mdi-book-open-page-variant</v-icon>
  Browse Books
</div>

<v-divider class="my-4"></v-divider>

            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="book in books" :key="book.id">
                <v-card class="h-100 d-flex flex-column" width=380 color="#37474F" rounded="lg">
                    <v-img :src="book.image" class="mt-3" height="200px" ></v-img>
                    <v-card-title class="text-wrap text-h5 font-weight-bold text-center text-uppercase">{{ book.name }}</v-card-title>
                    <v-card-subtitle class="text-subtitle1 text-success text-center" >
                        <v-icon color="success" class="mr-1" >mdi-cash </v-icon>
                        {{ book.price }}
                    </v-card-subtitle>
                    <v-divider class="my-2"></v-divider>
                    <v-card-text class="text-body-1 text-center font-weight-black" >{{ book.description }}</v-card-text>
                    <v-card-text class="text-caption text-grey text-center font-weight-regular" >By:{{ book.author }}</v-card-text>
                    <v-card-actions class="justify-space-between">

                        <v-btn class="bg-primary" variant="elevated" @click="buy(book)" color="success" size="large" rounded="pill" elevation="4" 
    prepend-icon="mdi-cart">Add to Cart</v-btn>

                        <v-btn class="bg-secondary"  variant="elevated" @click="view(book)" color="info" size="large" rounded="pill" elevation="4" 
    prepend-icon="mdi-book-open-page-variant">View Book</v-btn>

                        <v-btn color="secondary" size="medium" rounded="pill" elevation="4" prepend-icon="mdi-heart" @click="wish(book)"
  >
    </v-btn>
    
                    
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
        
    </v-container>
</template>
