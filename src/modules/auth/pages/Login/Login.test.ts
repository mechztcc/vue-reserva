import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";

import Login from "./Login.vue";

import { it } from "node:test";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({ components, directives });

test("When mount component", () => {
  const wrapper = mount(Login, {
    global: {
      components: {
        Login,
      },
      plugins: [vuetify],
    },
  });

  it("Should render a form", () => {
    expect(wrapper.find("input[data-cy=email]")).toBeTruthy();
    expect(wrapper.find("input[data-cy=password]")).toBeTruthy();
    expect(wrapper.find("button[data-cy=submit]").text()).toBe("Continuar");
  });
});
