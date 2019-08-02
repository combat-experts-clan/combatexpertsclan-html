import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken1,
        secondary: colors.red.darken1,
        accent: colors.indigo.base
      },
      light: {
        primary: colors.blue.darken1,
        secondary: colors.red.darken1,
        accent: colors.indigo.base
      }
    }
  }
};

export default new Vuetify(opts);
