/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components";

export default createVuetify({
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    MyButton: {
      color: "primary",
    },
  },
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});
