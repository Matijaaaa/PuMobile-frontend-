<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5 mt-4"
            >Credit Card Information</v-card-title
          >
          <v-divider></v-divider>

          <v-card-text>
            <v-text-field
              v-model="cardNumber"
              label="Card Number"
              hint="xxxx xxxx xxxx xxxx"
              @input="formatCardNumber"
              maxlength="19"
            ></v-text-field>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="expirationDate"
                  label="Expiration Date"
                  hint="MM/YY"
                  @input="formatExpirationDate"
                  maxlength="5"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="cardHolder"
                  label="Card Holder"
                  maxlength="30"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <router-link to="/end">
              <v-btn color="primary" :disabled="!isFormValid">Submit</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: "",
      expirationDate: "",
      cardHolder: "",
    };
  },
  computed: {
    isFormValid() {
      // Check if all required fields are filled
      return this.cardNumber && this.expirationDate && this.cardHolder;
    },
  },
  methods: {
    submitCardInfo() {
      store.creditCard.cardNumber = this.cardNumber;
      store.creditCard.expirationDate = this.expirationDate;
      store.creditCard.cardHolder = this.cardHolder;
    },
  },
};
</script>
