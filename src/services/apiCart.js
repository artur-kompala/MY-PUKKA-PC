import axios from "axios";
import { API_URL } from "../utils/constants";

export async function addCart(type, product) {

  const storedData = JSON.parse(localStorage.getItem("auth-token"));
  const {
    session: { token },
    user,
  } = storedData;

  const data = {
    type: type,
    data: product,
  };

  await axios
    .post(`${API_URL}/addCart?user=${user.user_metadata.fullName}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return;
}

export async function getCart() {
    const storedData = JSON.parse(localStorage.getItem("auth-token"));
  const {
    session: { token },
    user,
  } = storedData;

  let data = await axios
    .get(`${API_URL}/getCart?user=${user.user_metadata.fullName}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

    return data
}

