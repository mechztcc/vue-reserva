<template>
  <v-card class="pa-5 mt-3">
    <v-row>
      <v-col sm="12" md="8">
        <v-btn color="secondary" block>Aguardando contrato</v-btn>
      </v-col>
      <v-col sm="12" md="4" class="d-flex justify-end">
        <v-btn color="secondary">Ver</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="12" md="6">
        <img class="img-size" src="@/assets/house.webp" alt="" />
        <span class="text-primary">Apartamento na praia</span>
      </v-col>
      <v-col sm="12" md="6">
        <span>Código da reserva</span>
        <div class="d-flex">
          <v-icon>mdi-pound</v-icon>
          <b>{{ data.codeTransaction }}</b>
        </div>

        <span class="mt-4">Data da reserva</span>
        <div class="d-flex">
          <v-icon>mdi-calendar</v-icon>
          <span>22/10/2023</span>
        </div>

        <div class="d-flex my-2">
          <div class="d-flex flex-column">
            <span>Checkin</span>
            <div class="d-flex">
              <v-icon>mdi-calendar-arrow-left</v-icon>
              <span>{{ data.checkin }}</span>
            </div>
          </div>

          <div class="d-flex mx-5 flex-column">
            <span>Checkout</span>
            <div class="d-flex">
              <v-icon>mdi-calendar-arrow-right</v-icon>
              <span>{{ data.checkout }}</span>
            </div>
          </div>
        </div>

        <span>Valor</span>
        <div class="d-flex">
          <v-icon>mdi-currency-usd</v-icon>
          <span>R$ {{ data.price }}</span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['data']);
</script>

<style lang="scss" scoped>
.img-size {
  min-width: 100%;
  max-width: 100%;
}
</style>
