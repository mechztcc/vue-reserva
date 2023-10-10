<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="4">
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
        <v-btn
          color="secondary"
          size="large"
          @click="store.onListAll()"
          :loading="store.isLoading"
        >
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <v-btn class="mx-2" color="secondary" size="large">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-btn size="large" color="secondary" @click="store.onReverse()">
          <v-icon v-if="store.asc">mdi-order-alphabetical-ascending</v-icon>
          <v-icon v-if="!store.asc">mdi-order-alphabetical-descending</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          size="large"
          color="secondary"
          @click="store.onChangeLayout()"
        >
          <v-icon v-if="store.isTableLayout">mdi-grid</v-icon>
          <v-icon v-if="!store.isTableLayout">mdi-view-grid</v-icon>
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

<style scoped>
  .rotate {
    rotate: 360deg;
    transition: rotate 4s;
  }
</style>
