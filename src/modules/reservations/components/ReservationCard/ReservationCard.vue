<template>
  <v-card class="pa-5 mt-3">
    <v-row>
      <v-col sm="12" md="8">
        <v-btn color="secondary" block>{{ reservation.statusName }}</v-btn>
      </v-col>
      <v-col sm="12" md="4" class="d-flex justify-end">
        <v-btn color="secondary">Ver</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="12" md="6">
        <div class="d-flex flex-column">
          <img class="img-size" :src="reservation.image" alt="" />
          <span class="text-primary">{{ reservation.name }}</span>
        </div>
      </v-col>
      <v-col sm="12" md="6">
        <span>Código da reserva</span>
        <div class="d-flex">
          <v-icon>mdi-pound</v-icon>
          <b>{{ reservation.codeTransaction }}</b>
        </div>

        <span class="mt-4">Data da reserva</span>
        <div class="d-flex">
          <v-icon>mdi-calendar</v-icon>
          <span>{{ reservation.sendDate }}</span>
        </div>

        <div class="d-flex my-2">
          <div class="d-flex flex-column">
            <span>Checkin</span>
            <div class="d-flex">
              <v-icon>mdi-calendar-arrow-left</v-icon>
              <span>{{ reservation.checkin }}</span>
            </div>
          </div>

          <div class="d-flex mx-5 flex-column">
            <span>Checkout</span>
            <div class="d-flex">
              <v-icon>mdi-calendar-arrow-right</v-icon>
              <span>{{ reservation.checkout }}</span>
            </div>
          </div>
        </div>

        <span>Valor</span>
        <div class="d-flex">
          <v-icon>mdi-currency-usd</v-icon>
          <span>R$ {{ reservation.price }}</span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IReservation } from '../../types/reservation.interface';
import { useReservationsStore } from '../../stores/useReservationStore/useReservationStore';

const store = useReservationsStore();
defineProps<{ reservation: IReservation }>();
</script>

<style lang="scss" scoped>
.img-size {
  min-height: 185px;
  max-height: 185px;
  max-width: 250px;
  min-width: 250px;
  object-fit: cover;
}
</style>
