<template>
  <v-container>
    <v-row>
      <v-col>
        <ListAllReservationsFilters />
      </v-col>
    </v-row>
    <v-row v-if="store.reservationsFiltered.length > 0 && store.isTableLayout">
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

    <TableReservations v-if="!store.isTableLayout" />
    <NotFound v-if="store.reservationsFiltered.length == 0" />
  </v-container>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { onBeforeMount } from 'vue';
  import ListAllReservationsFilters from '../../components/ListAllFilters/ListAllFilters.vue';
  import { useReservationsStore } from '../../stores/useReservationStore/useReservationStore';

  import ReservationCard from '../../components/ReservationCard/ReservationCard.vue';
  import NotFound from '../../components/NotFound/NotFound.vue';
  import TableReservations from '../../components/TableReservations/TableReservations.vue';

  const store = useReservationsStore();

  onBeforeMount(async () => {
    await store.onListAll();
  });

  const { reservationsFiltered } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
