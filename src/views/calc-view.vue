<template>
  <v-container>
    <div class="d-flex justify-center mt-10">
      <img src="@/assets/scooterhome.png" :width="100" alt="" />
    </div>
    <div class="mt-2 d-flex justify-center mt-8">
      <h1 class="text-sm font-semibold login">PuMobile</h1>
    </div>
    <div class="d-flex justify-center">
      <h1 class="text-3xl font-semibold login">Price</h1>
    </div>

    <!-- Price Information -->
    <div class="d-flex justify-center mt-16">
      <h1 class="text-3xl font-semibold login">
        Duration: {{ selectedDuration }} hours
        <br />
        Base Cost: {{ baseCost }} EUR
        <br />
        Different Location Fee: {{ differentLocationFee }} EUR
        <br />
        Total Price: {{ totalPrice }} EUR
      </h1>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn color="blue" x-large rounded @click="SavePrice()">
        Continue
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import store from "../store.js";

export default {
  data() {
    return {
      Price: 0,
    };
  },
  computed: {
    // ... (previous computed properties)

    // Updated computed property for selectedDuration
    selectedDuration() {
      const pickupTime = store.selectedPickupTime;
      const dropOffTime = store.selectedDropOffTime;

      if (pickupTime && dropOffTime) {
        const durationInMillis =
          new Date(dropOffTime).getTime() - new Date(pickupTime).getTime();
        return durationInMillis / (1000 * 60 * 60); // Duration in hours
      }

      return 0; // Return 0 if pickup or drop-off time is not available
    },

    // Updated computed property for base cost
    baseCost() {
      // Assuming 1 EUR per hour
      return 1;
    },

    // Updated computed property for additional cost
    differentLocationFee() {
      // Assuming 1 EUR additional cost for different drop-off location
      return store.selectedLocation !== store.selectedLocation2 ? 1 : 0;
    },

    // Updated computed property for total price
    totalPrice() {
      const baseCost = this.baseCost * this.selectedDuration;
      this.Price = baseCost + this.differentLocationFee;
      return baseCost + this.differentLocationFee;
    },
  },
  methods: {
    SavePrice() {
      store.Price = this.Price;
      this.$router.push({ name: "card" });
    },
  },
};
</script>
