<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
        <h1 class="text-center text-3xl font-bold">AEC</h1>
    </div>
    <div class="login-body mt-12 h-full flex justify-center items-center bg-light dark:bg-blue-main-800">
        <SocialLoginButton text="Iniciar sesión con Google"/>
        <p>Iniciar Sesión con Google</p>
    </div>
  </div>
</template>

<script>
import SocialLoginButton from '../../components/auth/SocialLoginButton.vue'
export default {
  components: { 
    SocialLoginButton, 
    },
  name: 'Login',
  layout: 'auth',
}
</script>

<style scoped>
.login-body{
    width: 200%;
    margin-left: 50%;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
}
</style>
