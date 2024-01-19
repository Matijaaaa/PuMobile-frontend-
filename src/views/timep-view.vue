<template>
  <v-container>
    <div class="d-flex justify-center mt-16">
      <h1 class="text-8xl font-semibold uppercase tekst">PuMobile</h1>
    </div>
    <div class="d-flex justify-center mt-8">
      <h1 class="text-2xl font-semibold login">
        Please choose time and date of the pickup and drop-off
      </h1>
    </div>

    <div class="d-flex justify-center mt-16">
      <date-picker v-model="time1" type="datetime"></date-picker>
    </div>
    <div class="d-flex justify-center mt-16">
      <date-picker v-model="time2" type="datetime" :min="time1"></date-picker>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        depressed
        color="blue"
        to="/timep"
        x-large
        rounded
        @click.prevent="saveData"
        :disabled="!timesAreSelected"
      >
        Save Times
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Store from "../store.js";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      time1: null,
      time2: null,
    };
  },
  methods: {
    saveData() {
      console.log("Saving times:", this.time1, this.time2);
      Store.time1 = this.time1;
      Store.time2 = this.time2;
      this.$router.push({ path: "/checkpoint" });
    },
  },
  computed: {
    timesAreSelected() {
      const selected = this.time1 !== null && this.time2 !== null;
      console.log("Times are selected:", selected);
      return selected;
    },
  },
};
</script>
