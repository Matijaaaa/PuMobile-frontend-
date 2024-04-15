<template>
  <v-container>
    <div
      class="d-flex justify-center mt-16 animate__animated animate__fadeInDown"
    >
      <h1 class="text-8xl font-semibold uppercase tekst">PuMobile</h1>
    </div>
    <div class="d-flex justify-center mt-8 animate__animated animate__fadeInUp">
      <h2 class="text-8xl font-semibold uppercase start">Choose option</h2>
    </div>
    <div
      class="d-flex justify-center mt-16 animate__animated animate__fadeInLeft"
    >
      <v-btn depressed color="blue" to="/login" x-large rounded> Log in </v-btn>
    </div>
    <div
      class="d-flex justify-center mt-16 animate__animated animate__fadeInRight"
    >
      <v-btn depressed color="blue" to="/signup" x-large rounded>
        Sign up
      </v-btn>
    </div>
  </v-container>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap");
.tekst {
  font-family: "Grechen Fuemen";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 112px;
  letter-spacing: -1.5px;
  color: rgba(0, 0, 0, 0.87);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
.start {
  font-family: "Indie Flower";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 112px;
  letter-spacing: -1.5px;
  color: rgba(0, 0, 0, 0.87);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
