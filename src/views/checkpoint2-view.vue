<template>
  <v-container>
    <div class="d-flex justify-center mt-16">
      <h1 class="text-8xl font-semibold uppercase tekst">PuMobile</h1>
    </div>
    <div class="d-flex justify-center mt-2">
      <h1 class="text-sm font-semibold login">
        Please enter your desired location for drop-off
      </h1>
    </div>
    <div class="mt-15 d-flex justify-center">
      <b-dropdown :text="selectedOption2Text" variant="primary">
        <b-dropdown-item @click="selectOption('Giardini')"
          >Giardini</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Forum')">Forum</b-dropdown-item>
        <b-dropdown-item @click="selectOption('Tržnica')"
          >Tržnica</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Bus Station')"
          >Bus Station</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Pula City Mall')"
          >Pula City Mall</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Arena')">Arena</b-dropdown-item>
        <b-dropdown-item @click="selectOption('Stoja - Max City')"
          >Stoja - Max City</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Verudela')"
          >Verudela</b-dropdown-item
        >
        <b-dropdown-item @click="selectOption('Veruda - Tržnica')"
          >Veruda - Tržnica</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        depressed
        color="blue"
        to="/available"
        x-large
        rounded
        @click.prevent="saveData"
        :disabled="!isOptionSelected"
      >
        Save Location
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import store from "../store.js";

export default {
  data() {
    return {
      selectedOption2Text: store.selectedLocation2,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption2Text = option;
      store.selectedLocation2 = option;
    },
    saveData() {
      console.log("Selected Location2:", store.selectedLocation2);
    },
  },
  computed: {
    isOptionSelected() {
      return this.selectedOption2Text !== "Nearest location";
    },
  },
};
</script>

<style scoped>
.b-dropdown-toggle {
  background-color: blue;
}
</style>
