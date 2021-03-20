import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        error: "#ffa726",
      },
      dark: { error: "#ffa726" },
    },
  },
});
