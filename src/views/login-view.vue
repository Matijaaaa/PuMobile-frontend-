<template>
  <v-container>
    <div class="mt-4 pl-16">
      <h1 class="text-8xl font-semibold uppercase naslov2">Log in</h1>
    </div>
    <div class="mt-6 pl-16">
      <h1 class="text-sm font-semibold login">
        If you don't have an account, click
        <router-link to="/signup" style="color: blue">here!</router-link>
      </h1>
      <form>
        <div class="mt-12 flex justify-center">
          <h1 class="text-2xl font-semibold login">Info</h1>
        </div>
        <div class="flex justify-center">
          <v-text-field
            class="inline"
            label="Enter your email addres"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="mt-8 flex justify-center">
          <v-text-field
            append-icon="mdi-map-marker ? 'mdi-eye' : 'mdi-eye-off'"
            type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Enter Password"
            hint="At least 8 characters required"
            class="input-group--focused inline"
          ></v-text-field>
        </div>
        <div class="d-flex justify-center mt-16">
          <v-btn depressed color="blue" to="/timep" x-large rounded>
            Log in
          </v-btn>
        </div>
      </form>
    </div>
  </v-container>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
.login {
  font-family: "Indie Flower";
  font-style: normal;
  font-weight: 400;
  font-size: 43px;
  line-height: 42px;
  letter-spacing: -2px;
  color: rgba(0, 0, 0, 0.87);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Obavezno",
      (value) => (value && value.length >= 7) || "Min 7 characters",
      (value) => value.includes("@") || "@ is required",
    ],
    email: "",
    password: "",
    passwordRules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
};
</script>
