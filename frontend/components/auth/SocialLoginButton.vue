<template>
  <button class="text-white rounded-full border py-2 px-6 flex" :class="type">
    <component class="w-6 mr-2" :is="socialComponent" />
    <GoogleIcon />
    {{ text }}
  </button>
</template>

<script>
export default {
    name: 'SocialLoginButton',
    components:{
        GoogleIcon: () => import('@/assets/icons/google.svg?inline')
    },
    props: {
        type: {
            type: String,
            default: 'google',
            validate: value => ['google'].includes(value),
        },
        text:{
            type: String,
            required: true,
        },
    },
    data: () => ({
        socialOptions: {
            google: 'GoogleIcon'
        }
    }),
    computed: {
        socialComponent(){
            return this.socialOptions[this.type]
        }
    },
}
</script>

<style scoped>
.google {
    @apply bg-red-main-600 border-red-main-600 text-white;
}
</style>
