<template>
  <v-app>
      <div class= "h-screen">
        <main class= "h-full bg-light dark:bg-dark">
            <v-toolbar
      dark
      height="100"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-toolbar-title>
        <h1 style="text-align:center">Automatic Evidence Collector</h1>
      </v-toolbar-title>
      <br>
    </v-toolbar>
      <v-sheet
        color="black"
        height="595"
        width="1300"
      >
            <Nuxt />
      </v-sheet>
        </main>
      </div>
      <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'loginLayout',
  layout: 'empty',
  data() {
    return {
      fixed: false,
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 25px;
}
</style>