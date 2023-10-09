<template>
  <v-row>
    <v-col cols="8" md="6" offset-md="6">
      <div class="d-flex">
        <v-text-field
          class="mx-2"
          name="search"
          label="Buscar"
          id="search-reservation"
          variant="outlined"
          prepend-inner-icon="mdi-magnify"
          v-model="search"
          @update:model-value="store.onFilterByName(search)"
        ></v-text-field>
        <v-btn color="secondary" size="large" @click="store.onListAll()">
          <v-icon v-if="!store.isLoading">mdi-reload</v-icon>
          <v-icon v-if="store.isLoading">mdi-loading</v-icon>
        </v-btn>
        <v-btn class="mx-2" color="secondary" size="large">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-btn size="large" color="secondary" @click="store.onReverse()">
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
</script>

<style scoped></style>
