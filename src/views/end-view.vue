<template>
  <v-container>
    <div class="d-flex justify-center mt-10">
      <img src="@/assets/scooterhome.png" :width="80" alt="" />
    </div>
    <div class="mt-2 d-flex justify-center mt-8">
      <h1 class="text-8xl font-semibold uppercase endglavni">PuMobile</h1>
    </div>
    <div class="d-flex justify-center">
      <h1 class="text-lg font-semibold end2">Be on the move</h1>
    </div>
    <div class="d-flex justify-center mt-4">
      <p class="text-lg end3 text-center">
        Thany you for choosing our services. Your reservation will be made after
        you click on the Go! button and your scooter will be waiting for you at
        a chosen location.
      </p>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        @click="saveReservationData()"
        class="py-8"
        elevation="24"
        x-large
        rounded
        color="blue"
      >
        <v-icon>mdi-plus</v-icon>
        Go!
      </v-btn>
    </div>
  </v-container>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap");
.endglavni {
  font-family: "Grechen Fuemen";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 20px;
  /* identical to box height, or 117% */

  letter-spacing: -1.5px;

  /* 00. On Surface / High Emphasis */

  color: rgba(0, 0, 0, 0.87);

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.end2 {
  font-family: "Satisfy";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 100px;
  letter-spacing: -1.5px;
  color: rgba(0, 0, 0, 0.87);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.end3 {
  font-family: "Satisfy";
  font-weight: 400;
  font-size: 40px;
  line-height: 100px;
  letter-spacing: -1.5px;
  color: rgba(0, 0, 0, 0.87);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
<script>
import { PuMobile } from "../axios";
export default {
  data() {
    return {};
  },
  methods: {
    async saveReservationData() {
      try {
        console.log("saveReservationData");
        let response = await PuMobile.saveReservationData();
        this.$router.push({ name: "home-view" });
        return response;
      } catch (error) {
        console.error("Error saving reservation:", error);
      }
    },
  },
};
</script>
