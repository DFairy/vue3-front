<template>
  <mobileNavigation v-if="isMobile" :data="navigation" />
  <pcNavigation v-else :data="navigation" />
</template>

<script setup>
import { isMobile } from '@/utils/flexible.js'
import mobileNavigation from './mobile/index.vue'
import pcNavigation from './pc/index.vue'
import { navigation } from '@/constant/navigation.js'
</script>

<style></style>
