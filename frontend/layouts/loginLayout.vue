<template>
  <div id="googleButton"></div>
</template>
<script>

export default {
  mounted() {
    // initialize Google Sign in  
    google.accounts.id.initialize({
      client_id: '173804267674-pus2gnne0k6dvqhtr20qifd77ce8admd.apps.googleusercontent.com',
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
  
  methods: {
    handleCredentialResponse(response) {
    console.log(response);
    
      // call your backend API here
      console.log(response.credential)
      // the token can be accessed as: response.credential
    }
  }
}
</script>