<template>
  <v-container>
    <v-row>
      <v-col cols="10" md="6" offset="1" offset-md="3">
        <v-card class="pa-5">
          <h1>Bem-vindo!</h1>
          <span
            >Bem vindo de volta, preencha os campos abaixo para acessar sua
            conta.</span
          >
          <v-form class="mt-10" v-on:submit.prevent="submit">
            <v-text-field
              prepend-inner-icon="mdi-email"
              label="Email"
              variant="outlined"
              data-cy="email"
              v-model="form.email"
            ></v-text-field>

            <v-text-field
              prepend-inner-icon="mdi-lock"
              label="Password"
              variant="outlined"
              data-cy="password"
              v-model="form.password"
            ></v-text-field>

            <span class="text-primary">Esqueceu a senha?</span>

            <v-btn
              class="mt-5"
              color="primary"
              size="large"
              block
              type="submit"
              data-cy="submit"
            >
              Continuar
            </v-btn>

            <hr class="my-6" />

            <div class="text-center">
              <span>
                Não possui uma conta?
                <b class="text-primary mx-2"> Criar conta </b>
              </span>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive<{ email?: string; password?: string }>({});

const submit = () => {
  console.log(form);
};
</script>

<style lang="scss" scoped></style>
