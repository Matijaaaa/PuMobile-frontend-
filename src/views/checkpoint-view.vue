<template>
  <v-container>
    <div class="d-flex justify-center mt-16">
      <h1 class="text-8xl font-semibold uppercase tekst">PuMobile</h1>
    </div>
    <div class="d-flex justify-center mt-2">
      <h1 class="text-sm font-semibold login">
        Please enter your desired location for pickup
      </h1>
    </div>
    <div class="mt-15 d-flex justify-center">
      <b-dropdown :text="selectedOptionText" variant="primary">
        <b-dropdown-item @click="selectOption('Gardini')"
          >Gardini</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Forum')">Forum</b-dropdown-item>
        <b-dropdown-item @click="selectOption('Tržnica')"
          >Tržnica</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Bus Station')"
          >Bus Station</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        depressed
        color="blue"
        to="/timep"
        x-large
        rounded
        @click.prevent="saveData"
        :disabled="!isOptionSelected"
      >
        Save Times
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import store from "../store.js";

export default {
  data() {
    return {
      selectedOptionText: store.selectedLocation,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOptionText = option;
      store.selectedLocation = option;
    },
    saveData() {
      console.log("Selected Location:", store.selectedLocation);
    },
  },
  computed: {
    isOptionSelected() {
      return this.selectedOptionText !== "Nearest location";
    },
  },
};
</script>

<style scoped>
.b-dropdown-toggle {
  background-color: blue;
}
</style>
