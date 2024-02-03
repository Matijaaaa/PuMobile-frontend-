import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
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

async function register(email, password) {
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

export { getHelloWorld, register };
