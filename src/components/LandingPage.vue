<script setup>

</script>

<template>
    <v-container max-width="80%" >
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
    <!-- About Us -->
    <v-container class="my-12">
  <v-card elevation="4" rounded="lg" class="pa-6 bg-gradient" color="primary">
    <h2 class="text-h3 text-center mb-6">Welcome to Readify!</h2>
    <p class="text-body-1 mb-4">
      Our online bookstore is more than just a place to buy books—it’s a vibrant hub for readers of all ages and interests.
    </p>
    <p class="text-body-1 mb-4">
      With a <span class="font-weight-bold">curated selection</span> spanning timeless classics, contemporary bestsellers, niche genres, and educational resources, we make discovering your next great read effortless.
    </p>
    <p class="text-body-1 mb-4">
      Beyond offering books, we’re building a <span class="font-weight-bold">community</span> where stories connect people, with themed collections and <span class="font-weight-bold">exclusive promotions</span>.
    </p>
  </v-card>
</v-container>

    <!-- CARD FOR OUR BEST SELLERS -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3" sm="6" xs="12">
                <v-card height="100%" elevation="2" rounded="lg" class="d-flex flex-column h-100">
                    <v-img src="/book1.jpg" cover></v-img>
                    <v-card-title class="text-wrap">EMOTIONAL SELF-CARE FOR BLACK WOMEN</v-card-title>
                    <v-card-subtitle>2200</v-card-subtitle>
                    <v-btn to="/cart" color="secondary" class="px-3"  rounded="pill" elevation="4" prepend-icon="mdi-cart" >Add to Cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3" sm="6" xs="12">
                <v-card height="100%" elevation="2" rounded="lg" class="d-flex flex-column h-100">
                    <v-img src="/book2.jpeg" cover></v-img>
                    <v-card-title>THE CHEF</v-card-title>
                    <v-card-subtitle>2500</v-card-subtitle>
                    <v-btn to="/cart" color="secondary"  rounded="pill" elevation="4">Add to Cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3" sm="6" xs="12">
                <v-card height="100%" elevation="2" rounded="lg" class="d-flex flex-column h-100">
                    <v-img src="/book3.jpeg" cover></v-img>
                    <v-card-title>DIARY OF A WIMPY KID</v-card-title>
                    
                    <v-card-subtitle>2399</v-card-subtitle>
                    <v-btn to="/cart" class="bg-primary"  rounded="pill" elevation="4">Add to Cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3" sm="6" xs="12">
                <v-card height="100%" elevation="2" rounded="lg" class="d-flex flex-column h-100">
                    <v-img src="/book4.jpeg" cover></v-img>
                    <v-card-title>HEART AND HUSTLE</v-card-title>
                    <v-card-subtitle>1899</v-card-subtitle>
                    <v-btn to="/cart" class="bg-primary" color="primary" rounded="pill" elevation="4">Add to Cart</v-btn>
                </v-card>
            </v-col>

        </v-row>
     </v-container>

     <!-- FOOTER -->
      
                
       <!-- Footer -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/FullLogo.jpg" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Readify Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@readifyonline.com</p>
                <p>Phone: +254755675321</p>
            </div>
        </v-col>
    </v-row>
  </v-container>
    
    

</template>