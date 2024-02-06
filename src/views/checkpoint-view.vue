<template>
  <v-container>
    <div class="d-flex justify-center mt-16">
      <h1 class="text-8xl font-semibold uppercase tekst">PuMobile</h1>
    </div>
    <div class="mt-4 d-flex justify-center">
      <b-dropdown text="Nearest location" variant="primary">
        <b-dropdown-item>Option 1</b-dropdown-item>
        <b-dropdown-item>Option 2</b-dropdown-item>
        <b-dropdown-item>Option 3</b-dropdown-item>
      </b-dropdown>
    </div>
  </v-container>
</template>

<script>
export default {
  // your component options
};
</script>

<style scoped>
/* Center the button */
.mt-4 {
  text-align: center;
}

/* Style the button with a yellow background */
.b-dropdown-toggle {
  background-color: blue;
}
</style>
