<template>
  <Navbar />
  <div class="global-wrapper" style="margin-top: 5%;">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
  import Navbar from './modules/shared/components/Navbar/Navbar.vue';
</script>
