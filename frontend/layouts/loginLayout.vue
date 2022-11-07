<template>
    <v-app dark>
      <v-main>
        <v-img height = 720  width = 1600 src='/dark-blue-product-background.jpg'>
        <v-container>
          <br><br><br><br>
          <Nuxt />
        </v-container>
        </v-img>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'loginLayout',
    layout: 'empty',
    mounted() 
    {
      // initialize Google Sign in  
      google.accounts.id.initialize(
        {
          client_id: '1093175988760-j8tom0bto99ui04gqsuouu221camfv7p.apps.googleusercontent.com',
          callback: this.handleCredentialResponse, //method to run after user clicks the Google sign in button
          context: 'signin'
        })
      
      // render button
      google.accounts.id.renderButton(
        document.getElementById('googleButton'),
        { 
          type: 'standard',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
          logo_alignment: 'center',
          width: 250
        }
      )
    },
    
    methods: 
    {
      handleCredentialResponse(response) 
      {
        console.log("Si funciona")
        // call your backend API here
        
        // the token can be accessed as: response.credential
      }
    }
  }
  </script>