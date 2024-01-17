import axios from "axios";
const url = "http://localhost:5000";

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
    .post(`${url}/addCart?user=${user.user_metadata.fullName}`, data, {
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
    .get(`${url}/getCart?user=${user.user_metadata.fullName}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

    return data
}

