import axios from "axios";
import { API_URL } from "../utils/constants";
import toast from "react-hot-toast";

const storedData = JSON.parse(localStorage.getItem("auth-token"));
  const {
    session: { token },
    user,
  } = storedData;

export async function addCart(type, product) {

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
    .then(()=> toast.success("Product added successfully"))
    .catch((err) => ()=>toast.error(err.message))
    .finally(()=>{
      return;
    })
}

export async function getCart() {
   
  let data = await axios
    .get(`${API_URL}/getCart?user=${user.user_metadata.fullName}`)
    .then((res) => res.data)
    .catch((err) => {
      toast.error(err.message);
    });

    return data
}

export async function deleteItemCart(item,refetch){

  await axios
    .delete(`${API_URL}/deleteItemCart?user=${user.user_metadata.fullName}&item=${item}`)
    .then(()=> toast.success("Successfully delete"))
    .catch((err) => toast.error(err.message))
    .finally(()=>{
      refetch();
      return;
    });


}

