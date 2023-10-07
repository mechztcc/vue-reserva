<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6" v-for="(item, index) in 4" :key="index">
        <ReservationCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ReservationCard from '../../components/ReservationCard/ReservationCard.vue';
</script>

<style lang="scss" scoped></style>
