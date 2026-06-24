<script setup>
const user=JSON.parse(localStorage.getItem('user'))
</script>

<template>
    
    <v-container>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card elevation="4" rounded="lg" class="pa-6" color="#37474F">

        <!-- Profile Header -->
        <v-row align="center">
          <v-col cols="3" class="text-center">
            <v-avatar size="96">
              <v-img src="mainLogo.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="9">
            <h2 class="text-h6 font-weight-bold ">Taffy</h2>
            <p class="text-subtitle2 text-grey">Book Lover • Muthaiga</p>
            <p class="text-subtitle2 text-grey">Email: {{ user.email }}</p>
            <p class="text-subtitle2 text-grey">Phone: {{ user.phone }}</p>
            <v-btn color="primary" rounded="pill" prepend-icon="mdi-pencil">
              Edit Profile
            </v-btn>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- Profile Stats -->
        <v-row>
          <v-col cols="4" class="text-center">
            <h3 class="text-h6 font-weight-bold">12</h3>
            <p class="text-caption">Wishlist</p>
          </v-col>
          <v-col cols="4" class="text-center">
            <h3 class="text-h6 font-weight-bold">5</h3>
            <p class="text-caption">Orders</p>
          </v-col>
          <v-col cols="4" class="text-center">
            <h3 class="text-h6 font-weight-bold">3</h3>
            <p class="text-caption">Reviews</p>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- Quick Actions -->
        <v-row>
          <v-col cols="6">
            <v-btn block color="secondary" rounded="pill" prepend-icon="mdi-heart" @click="wish(book)">
              View Wishlist
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block color="secondary" rounded="pill" prepend-icon="mdi-cart">
              View Orders
            </v-btn>
          </v-col>
        </v-row>

      </v-card>
    </v-col>
  </v-row>
</v-container>

</template>

//style profile