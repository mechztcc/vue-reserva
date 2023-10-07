import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';

import Login from './Login.vue';

import { it } from 'node:test';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

test('When mount component', () => {
  const wrapper = mount(Login, {
    global: {
      components: {
        Login,
      },
      plugins: [vuetify],
    },
  });

  it('Should render a form', () => {
    expect(wrapper.find('input#email')).toBeTruthy();
    expect(wrapper.find('input#password')).toBeTruthy();
    expect(wrapper.find('button[data-cy=submit]').text()).toBe('Continuar');
  });

  it('Should show errors messages when fill inputs with invalid values', () => {
    const email = wrapper.find('input#email');
    email.setValue('emailemail.com');

    const emailError = wrapper.find('small[data-cy="email-error"]');

    const password = wrapper.find('input#password');
    password.setValue('123');

    const passwordError = wrapper.find('small[data-cy="password-error"]');

    expect(emailError.text()).contains('E-mail is required field');
    expect(passwordError.text()).contains('Password is required field');
  });

  it('Should hide errors messages when fill inputs with valid values', () => {
    const email = wrapper.find('input#email');
    email.setValue('albertopaiva2812@gmail.com');

    const emailError = wrapper.find('small[data-cy="email-error"]');

    const password = wrapper.find('input#password');
    password.setValue('123456789!a');

    const passwordError = wrapper.find('small[data-cy="password-error"]');

    expect(emailError).toBeUndefined();
    expect(passwordError).toBeUndefined();
  });
});
