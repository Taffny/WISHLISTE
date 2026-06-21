<script setup>

</script>

<template>
    <v-container max-width="100%">
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
    <v-container class="bg-secondary" max-width="100%">
        <v-row>
            <v-col  class="text-centre">
                <div class="text-display-medium mb-12"> Welcome to Readify! </div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Our online bookstore is designed to be more than just a place to buy books—it’s a vibrant hub for readers of all ages and interests. With a carefully curated selection spanning timeless classics, contemporary bestsellers, niche genres, and educational resources, we aim to make discovering your next great read effortless and enjoyable. The platform is intuitive, mobile‑friendly, and built to provide a seamless browsing experience, whether you’re searching for a specific title or exploring recommendations tailored to your taste.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Beyond offering books, we’re creating a community where stories connect people. Readers can enjoy personalized suggestions, participate in themed collections, and access exclusive promotions that make reading more affordable. Our mission is to celebrate the joy of reading while supporting authors and publishers worldwide, ensuring that every visit to our store feels like stepping into a world of endless possibilities.</div>
            </v-col>
        </v-row>
    </v-container>
    <!-- CARD FOR OUR BEST SELLERS -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-img src="/book1.jpg" cover></v-img>
                    <v-card-title>EMOTIONAL SELF-CARE FOR BLACK WOMEN</v-card-title>
                    <v-card-subtitle>2200</v-card-subtitle>
                    <v-btn to="/cart" class="bg-primary">Add to Cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card height="100%">
                    <v-img src="/book2.jpeg" cover></v-img>
                    <v-card-title>THE CHEF</v-card-title>
                    <v-card-subtitle>2500</v-card-subtitle>
                    <v-btn to="/cart" class="bg-primary">Add to Cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card height="100%">
                    <v-img src="/book3.jpeg" cover></v-img>
                    <v-card-title>DIARY OF A WIMPY KID</v-card-title>
                    <v-card-subtitle>2399</v-card-subtitle>
                    <v-btn to="/cart" class="bg-primary">Add to Cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card height="100%">
                    <v-img src="/book4.jpeg" cover></v-img>
                    <v-card-title>HEART AND HUSTLE</v-card-title>
                    <v-card-subtitle>1899</v-card-subtitle>
                    <v-btn to="/cart" class="bg-primary">Add to Cart</v-btn>
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