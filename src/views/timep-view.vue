<template>
  <v-container>
    <div class="d-flex justify-center mt-16">
      <h1 class="text-8xl font-semibold uppercase tekst">PuMobile</h1>
    </div>
    <div class="d-flex justify-center mt-8">
      <h1 class="text-2xl font-semibold login">
        Please choose time and date of the pickup
      </h1>
    </div>
    <div class="d-flex justify-center mt-16">
      <date-picker v-model="time1" type="datetime"></date-picker>
    </div>
    <div class="d-flex justify-center mt-16">
      <date-picker v-model="time2" type="datetime" :min="time1"></date-picker>
    </div>
  </v-container>
</template>

<script>
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
};
</script>
