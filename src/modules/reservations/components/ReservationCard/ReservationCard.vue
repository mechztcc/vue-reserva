<template>
  <v-card class="pa-5">
    <v-row>
      <v-col sm="12" md="8">
        <v-btn color="secondary">Aguardando contrato</v-btn>
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
        <div class="d-flex">
          <v-icon>mdi-pound</v-icon>
          <b>JHY63UU</b>
        </div>

        <div class="d-flex">
          <v-icon>mdi-calendar</v-icon>
          <span>22/10/2023</span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.img-size {
  min-width: 100%;
  max-width: 100%;
}
</style>
