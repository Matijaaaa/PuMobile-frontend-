<template>
  <v-container>
    <div class="d-flex justify-center mt-10">
      <img src="@/assets/scooterhome.png" :width="150" alt="" />
    </div>
    <div class="mt-2 d-flex justify-center mt-8">
      <h1 class="text-8xl font-semibold uppercase naslov">PuMobile</h1>
    </div>
    <div class="d-flex justify-center">
      <h1 class="text-lg font-semibold naslov2">
        Number of scooters available at {{ selectedTime }} -
        {{ selectedLocation }}:
        {{ numberOfScooters }}
      </h1>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        class="py-8"
        elevation="24"
        x-large
        rounded
        color="blue"
        @click="makeReservation"
      >
        <v-icon>mdi-plus</v-icon>
        Next
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import store from "../store.js";

export default {
  computed: {
    selectedLocation() {
      return store.selectedLocation;
    },
    selectedTime() {
      return store.selectedTime ? new Date(store.selectedTime) : null;
    },
    numberOfScooters() {
      console.log("Selected Location:", this.selectedLocation);
      console.log("Selected Time:", this.selectedTime);

      return (
        store.scooterAvailability[this.selectedLocation]?.[this.selectedTime] ||
        0
      );
    },
  },

  methods: {
    makeReservation() {
      store.reserveScooter();
    },
  },
};
</script>
