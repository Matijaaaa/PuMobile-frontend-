// store.js
export default {
  time1: null,
  time2: null,
  selectedLocation: "Nearest location",
  selectedLocation2: "Nearest location",
  scooterAvailability: {
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
  reserveScooter({ location, count }) {
    this.scooterAvailability[location] -= count;
  },
};
