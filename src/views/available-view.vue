<template>
  <v-container>
    <div class="d-flex justify-center mt-10">
      <img src="@/assets/scooterhome.png" :width="150" alt="" />
    </div>
    <div class="mt-2 d-flex justify-center mt-8">
      <h1 class="text-8xl font-semibold uppercase naslov">PuMobile</h1>
    </div>
    <div class="d-flex justify-center">
      <div>
        <h1 class="text-sm font-semibold login">Pickup Information:</h1>
        <h1 class="text-sm font-semibold login">
          Location: {{ pickupLocation }}
        </h1>
        <h1 class="text-sm font-semibold login">
          Date: {{ formattedPickupDate }}
        </h1>
        <h1 class="text-sm font-semibold login">
          Time: {{ formattedPickupTime }}
        </h1>
      </div>
      <div class="ml-8">
        <h1 class="text-sm font-semibold login">Drop-off Information:</h1>
        <h1 class="text-sm font-semibold login">
          Location: {{ dropOffLocation }}
        </h1>
        <h1 class="text-sm font-semibold login">
          Date: {{ formattedDropOffDate }}
        </h1>
        <h1 class="text-sm font-semibold login">
          Time: {{ formattedDropOffTime }}
        </h1>
      </div>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        class="py-8"
        elevation="24"
        x-large
        rounded
        color="blue"
        @click="navigateToCheckpoint2"
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
    pickupLocation() {
      return store.selectedLocation;
    },
    dropOffLocation() {
      return store.selectedLocation2;
    },
    formattedPickupDate() {
      const pickupDate = store.selectedPickupTime;
      return pickupDate ? new Date(pickupDate).toLocaleDateString() : "";
    },
    formattedPickupTime() {
      const pickupTime = store.selectedPickupTime;
      return pickupTime ? new Date(pickupTime).toLocaleTimeString() : "";
    },
    formattedDropOffDate() {
      const dropOffDate = store.selectedDropOffTime;
      return dropOffDate ? new Date(dropOffDate).toLocaleDateString() : "";
    },
    formattedDropOffTime() {
      const dropOffTime = store.selectedDropOffTime;
      return dropOffTime ? new Date(dropOffTime).toLocaleTimeString() : "";
    },
  },
  methods: {
    navigateToCheckpoint2() {
      this.$router.push({ path: "/checkpoint2" });
    },
  },
};
</script>
