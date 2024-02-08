export default {
  times: {
    time1: {
      Gardini: 10,
      Forum: 10,
      Tržnica: 10,
      bus_station: 10,
      pula_city_mall: 10,
      Arena: 10,
      stoja_max_city: 10,
      Verudela: 10,
      veruda_tržnica: 10,
    },
    time2: {},
  },
  selectedLocation: "Nearest location",
  selectedTime: null,
  scooterAvailability: function () {
    const formattedTime = this.selectedTime
      ? this.selectedTime.toISOString()
      : null;
    return this.times[formattedTime]?.[this.selectedLocation] || 0;
  },
  reserveScooter() {
    const formattedTime = this.selectedTime
      ? this.selectedTime.toISOString()
      : null;
    console.log(
      "Reserving scooter at time:",
      formattedTime,
      " location:",
      this.selectedLocation
    );
    console.log("Existing times:", this.times);

    if (this.times[formattedTime]?.[this.selectedLocation] > 0) {
      this.times[formattedTime][this.selectedLocation]--;
    }

    console.log("Updated times:", this.times);
  },
};
