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
  try {
    request.headers["Authorization"] = "Bearer " + Auth.getToken();
  } catch (e) {
    console.error(e);
  }
  return request;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout();
      $router.go();
    }
  }
);

let Auth = {
  async login(email, password) {
    let response = await instance.post("/auth", {
      email: email,
      password: password,
    });
    console.log(response);

    let user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
  async register(email, password) {
    try {
      let response = await instance.post("/users", {
        email: email,
        password: password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
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
