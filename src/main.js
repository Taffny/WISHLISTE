import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({ 
    components, 
    directives, 
    icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme:{
    defaultTheme:'light',
    themes: {
      light: {
        colors: {
          primary: "#546E7A", 
          secondary: "#B0BEC5" ,
        }
      },
    },
  },
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
