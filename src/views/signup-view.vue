<template>
  <v-container>
    <div class="mt-4 pl-16">
      <h1 class="text-8xl font-semibold uppercase naslov2">Sign up</h1>
    </div>
    <div class="mt-6 pl-16">
      <h1 class="text-sm font-semibold login">
        If you already have an account, click
        <router-link to="/login" style="color: blue">here!</router-link>
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
            class="input-group--focused inline"
          ></v-text-field>
        </div>
        <div class="mt-8 flex justify-center">
          <v-text-field
            v-model="confirmPassword"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            :rules="[
              ...passwordRules,
              (v) => v === password || 'Passwords must match',
            ]"
            label="Confirm Password"
            hint="Confirm your password"
            class="input-group--focused inline"
          ></v-text-field>
        </div>
        <div class="d-flex justify-center mt-16">
          <v-btn
            depressed
            @click="register"
            color="blue"
            x-large
            rounded
            :disabled="!valid"
          >
            Sign up
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
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
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
    async register() {
      if (this.$refs.form.validate()) {
        let success = await Auth.register(this.email, this.password);
        console.log("Rezultat registracije", success);

        if (success) {
          this.$router.push({ name: "timep" });
        }
      }
    },
  },
};
</script>
