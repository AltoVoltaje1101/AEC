<template>
  <v-app dark>
    <v-app-bar 
    :clipped-left="clipped" 
    fixed 
    app
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      
      <v-spacer/>
      <v-btn icon @click.stop="miniVariant = !miniVariant" to="inicio">INICIO
      </v-btn>
      <v-spacer/>
      <v-btn icon @click.stop="clipped = !clipped" to="perfil">Perfil
      </v-btn>
      <v-spacer/>
      <v-btn icon @click.stop="fixed = !fixed" to="clases"
          router
          exact>Clases
      </v-btn>
      <v-spacer/>
      <v-btn icon @click.stop="clipped = !clipped" to="atributos">Atributos
      </v-btn>
      <v-spacer/>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>


    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      pagina:{
        to: '/clases'
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AEC',
    }
  },
}
</script>
