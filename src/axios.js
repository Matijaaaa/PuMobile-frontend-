import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", //adresa backenda
  timeout: 3000, // 3 sekunda
});

async function getHelloWorld() {
  try {
    let response = await instance.get("/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

/*async function register(email, password) {
  try {
    let response = await instance.post("/register-test", {
      email: "admin@gmail.com",
      password: "admin1234",
    });
    console.log("REGISTER TEST:", response.data);
  } catch (error) {
    console.error(error);
  }
}
async function saveReservation(reservationData) {
  try {
    let response = await instance.post("/app/reservation", reservationData);
    console.log("Reservation saved successfully:", response.data);
    // You can return or handle the response data as needed
    return response.data;
  } catch (error) {
    console.error("Error saving reservation:", error);
    // Handle error as needed
    throw error; // Rethrow the error to handle it in the component
  }
}*/

let Auth = {
  async login(email, password) {
    let response = await instance.post("/auth", {
      email: email,
      password: password,
    });

    let user = response.data;
    localStorage.setItem("user", user);
    return true;
  },
};

export { getHelloWorld, Auth };
