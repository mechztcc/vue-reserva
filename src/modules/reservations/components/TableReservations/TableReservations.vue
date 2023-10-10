<template>
  <v-table class="mt-10 pa-5 rounded elevation-2">
    <thead>
      <tr>
        <th class="text-left" v-for="(item, index) in rows" :key="index">
          <b>{{ item }}</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in store.reservationsFiltered" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.codeTransaction }}</td>
        <td>{{ item.checkin }}</td>
        <td>{{ item.checkin }}</td>
        <td>{{ item.sendDate }}</td>
        <td>R$ {{ item.price }}</td>
        <td>{{ item.statusName }}</td>
        <td>
          <v-btn color="secondary">Ver</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useReservationsStore } from '../../stores/useReservationStore/useReservationStore';

  const store = useReservationsStore();

  const rows = ref([
    'Nome',
    'Código',
    'Checkin',
    'Checkout',
    'Data do envio',
    'Preço',
    'Status',
    'Ações'
  ]);
</script>

<style lang="scss" scoped></style>
