<template>
  <v-row>
    <v-col cols="8" md="6" offset-md="4">
      <v-text-field
        name="search"
        label="Buscar"
        id="search-reservation"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        v-model="search"
        @update:model-value="store.onFilterBy(search)"
      ></v-text-field>
    </v-col>
    <v-col cols="4" md="2">
      <div class="d-flex justify-end">
        <v-btn size="large" color="primary" @click="store.onReverse()">
          <v-icon v-if="store.asc">mdi-order-alphabetical-ascending</v-icon>
          <v-icon v-if="!store.asc">mdi-order-alphabetical-descending</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useReservationsStore } from '@/modules/reservations/stores/useReservationStore/useReservationStore';
import { ref } from 'vue';

const search = ref('');
const store = useReservationsStore();

function test(name: string) {
  console.log(name);
}
</script>

<style scoped></style>
