<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="6"
        v-for="(item, index) in store.reservations"
        :key="index"
      >
        <ReservationCard :data="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ReservationCard from '../../components/ReservationCard/ReservationCard.vue';
import { index } from '../../services/ReservationService';
import { useReservationsStore } from '../../stores/useReservationStore/useReservationStore';
import { onMounted } from 'vue';

const store = useReservationsStore();
onMounted(async () => {
  index();
});
</script>

<style lang="scss" scoped></style>
