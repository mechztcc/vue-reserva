<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6" v-for="(item, index) in reservations.value" :key="index">
        <ReservationCard :reservation="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ReservationCard from '../../components/ReservationCard/ReservationCard.vue';
import { index } from '../../services/ReservationService';
import { useReservationsStore } from '../../stores/useReservationStore/useReservationStore';
import { onBeforeMount, watch } from 'vue';

const store = useReservationsStore();

onBeforeMount(async () => {
  await index();
});

const { reservations } = storeToRefs(store);
watch(reservations, () => {
  console.log(reservations.value);
});
</script>

<style lang="scss" scoped></style>
