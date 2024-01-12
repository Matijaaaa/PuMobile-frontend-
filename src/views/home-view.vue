<template>
  <v-container>
    <div class="d-flex justify-center mt-10">
      <img src="@/assets/scooterhome.png" :width="200" alt="" />
    </div>
    <div class="mt-2 d-flex justify-center mt-8">
      <h1 class="text-8xl font-semibold uppercase naslov">PuMobile</h1>
    </div>
    <div class="d-flex justify-center">
      <h1 class="text-lg font-semibold">Be on the move</h1>
    </div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        class="py-8"
        elevation="24"
        x-large
        rounded
        color="blue"
        to="/start"
      >
        <v-icon>mdi-plus</v-icon>
        Get started</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  name: "home-view",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap");
.naslov {
  font-family: "Grechen Fuemen";
  font-style: normal;
  font-weight: 400;
  font-size: 110px;
  line-height: 112px;
  /* identical to box height, or 117% */

  letter-spacing: -1.5px;

  /* 00. On Surface / High Emphasis */

  color: rgba(0, 0, 0, 0.87);

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
