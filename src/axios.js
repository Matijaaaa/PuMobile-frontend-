import axios from "axios";
import $router from "@/router";

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

instance.interceptors.request.use((request) => {
  let token = Auth.getToken();
  if (!token) {
    $router.go();
    return;
  } else {
    request.headers["Authorization"] = "Bearer " + token;
  }

  return request;
});

let Auth = {
  async login(email, password) {
    let response = await instance.post("/auth", {
      email: email,
      password: password,
    });

    let user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },
};

export { getHelloWorld, Auth };
