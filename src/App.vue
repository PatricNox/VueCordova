<template>
  <div id="app" class="font-sans">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Locale } from "@/i18n";
import moment from "moment";

@Component({
  components: {},
})
export default class App extends Vue {
  created() {
    this.setLocale();
  }

  setLocale() {
    // Set locale depending on localstorage item.
    const locale = localStorage.getItem("localization") ?? Locale.ENGLISH;
    if (locale) {
      this.$root.$i18n.locale = locale;
      moment.locale(locale);
    }
  }
}
</script>
