<script setup>

</script>
<template>
<v-container align="center" class="mt-16">
    <v-row>
        <v-col>
            <v-card max-width="80%" class="bg-secondary" >
             <v-form class="ma-8">
                <v-row>
                    <v-col md="3">
                        <div>First Name</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field ></v-text-field>
                    </v-col>
                    <v-col md="3">
                        <div>Last Name</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <div>Email</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field ></v-text-field>
                    </v-col>
                    <v-col md="3">
                        <div >Phone</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field type="number"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <div>Location</div>
                    </v-col>
                    <v-col md="3">
                        <v-select :items="['Langata','Rongai','Muthaiga','Runda']"> 

                        </v-select>
                    </v-col>
                    <v-col md="3">
                        <div>Adress</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <div>Password</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field ></v-text-field>
                    </v-col>
                    <v-col md="3">
                        <div>Confirm password</div>
                    </v-col>
                    <v-col md="3">
                        <v-text-field></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <div>Sign up</div>
                    </v-col>
                    
                    <v-col md="3">
                        <div>Already have an account?</div>
                    </v-col>
                    
                </v-row>
                

             </v-form>
            </v-card>
        </v-col>
    </v-row>
</v-container>


</template>