<template>
  <v-container>
    <div class="d-flex justify-center mt-16">
      <h1 class="text-8xl font-semibold uppercase tekst">PuMobile</h1>
    </div>
    <div class="mt-4 d-flex justify-center">
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
export default {
  data() {
    return {
      selectedOptionText: "Nearest location",
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOptionText = option;
    },
    saveData() {
      // Add your save logic here
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
/* Center the button */
.mt-4 {
  text-align: center;
}

/* Style the button with a blue background */
.b-dropdown-toggle {
  background-color: blue;
}
</style>
