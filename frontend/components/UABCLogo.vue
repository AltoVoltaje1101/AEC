<template>
  <img class="UABC-LOGO" alt="UABC Logo" src="/LogoUABCTransparente.png" />
</template>

<style>
.UABC-LOGO {
  height: 300px;
  width: 450px;
  transform: rotateY(720deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
