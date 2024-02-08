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
        Number of scooters available :
      </h1>
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
