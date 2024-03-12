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
      <v-form ref="form" v-model="valid">
        <div class="mt-12 flex justify-center">
          <h1 class="text-2xl font-semibold login">Info</h1>
        </div>
        <div class="flex justify-center">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Enter your email address"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="mt-8 flex justify-center">
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :rules="passwordRules"
            label="Enter Password"
            hint="At least 8 characters required"
          ></v-text-field>
        </div>
        <div class="d-flex justify-center mt-16">
          <v-btn
            @click="login()"
            depressed
            color="blue"
            x-large
            rounded
            :disabled="!valid"
          >
            Log in
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { Auth } from "@/axios.js";

export default {
  data: () => ({
    valid: false,
    email: "",
    password: "",
    showPassword: false,
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 8 || "Password must be at least 8 characters",
    ],
  }),
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        let success = await Auth.login(this.email, this.password);
        console.log("Rezultat prijave", success);

        if (success) {
          this.$router.push({ name: "timep" });
        }
      }
    },
  },
};
</script>

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
