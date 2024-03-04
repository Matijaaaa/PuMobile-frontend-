<template>
  <!--Pozadina-->
  <v-app style="background-color: #2fcf6f">
    <!--Header-->
    <v-app-bar app dark class="yellow" height="70">
      <div class="d-flex justify-center mt-1 ml-9">
        <router-link to="/">
          <svg-icon size="60" color="green" type="mdi" :path="path"></svg-icon>
        </router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiScooter } from "@mdi/js";
import { getHelloWorld } from "./axios";

export default {
  name: "App",
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiScooter,
    };
  },
  async mounted() {
    this.getHelloWorld();

    //this.testRegister();
  },
  methods: {
    async getHelloWorld() {
      const response = await getHelloWorld();
      console.log(response);
    },
    /*async testRegister() {
      const response = await register();
      console.log(response);
    },*/
  },
};
</script>
