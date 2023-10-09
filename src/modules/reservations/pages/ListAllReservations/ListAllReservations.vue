<template>
  <v-container>
    <v-row>
      <v-col>
        <ListAllReservationsFilters />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        sm="12"
        md="12"
        lg="6"
        v-for="(item, index) in reservationsFiltered"
        :key="index"
      >
        <ReservationCard :reservation="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ReservationCard from '../../components/ReservationCard/ReservationCard.vue';
import ListAllReservationsFilters from '../../components/ListAllFilters/ListAllFilters.vue';
import { index } from '../../services/ReservationService';
import { useReservationsStore } from '../../stores/useReservationStore/useReservationStore';
import { onBeforeMount, watch } from 'vue';

const store = useReservationsStore();

onBeforeMount(async () => {
  await index();
});

const { reservationsFiltered } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
