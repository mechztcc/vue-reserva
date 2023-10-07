<template>
  <v-container>
    <v-row>
      <v-col cols="10" md="6" offset="1" offset-md="3">
        <h1>Bem-vindo!</h1>
        <span>
          Bem vindo de volta, preencha os campos abaixo para acessar sua conta.
        </span>
        <v-form class="mt-10" v-on:submit.prevent="submit">
          <div class="d-flex flex-column mb-5">
            <v-text-field
              prepend-inner-icon="mdi-email"
              label="Email"
              variant="outlined"
              data-cy="email"
              id="email"
              clearable
              v-model="form.email"
            ></v-text-field>

            <small
              data-cy="email-error"
              class="text-red"
              v-if="errorFields.email"
            >
              {{ errorFields.email[0].message }}
            </small>
          </div>

          <div class="d-flex flex-column mb-5">
            <v-text-field
              prepend-inner-icon="mdi-lock"
              label="Password"
              variant="outlined"
              data-cy="password"
              id="password"
              :type="isHide ? 'password' : 'text'"
              @click:prepend-inner="isHide = !isHide"
              clearable
              v-model="form.password"
            ></v-text-field>

            <small
              data-cy="password-error"
              class="text-red"
              v-if="errorFields.password"
            >
              {{ errorFields.password[0].message }}
            </small>
          </div>

          <span class="text-primary">Esqueceu a senha?</span>

          <v-btn
            class="mt-5"
            color="secondary"
            size="large"
            block
            type="submit"
            data-cy="submit"
            :loading="isLoading"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { login } from '@/modules/auth/services/AuthService/AuthService';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator';
import type { Rules } from 'async-validator';
import { reactive, ref } from 'vue';

const form = reactive<{ email?: string; password?: string }>({});
const isHide = ref(true);
const isLoading = ref(false);
const rules: Rules = {
  password: {
    type: 'string',
    min: 8,
    max: 20,
    required: true,
    message: 'Password is required field.',
  },
  email: [
    {
      type: 'email',
      required: true,
      message: 'E-mail is required field.',
    },
  ],
};

const response = ref<any>({});

const { pass, isFinished, errorFields } = useAsyncValidator(form, rules);

const submit = async () => {
  if (!pass.value) return;

  isLoading.value = true;
  const { data } = await login({ email: form.email, password: form.password });
  isLoading.value = false;
};
</script>

<style lang="scss" scoped></style>
