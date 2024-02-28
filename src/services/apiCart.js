import axios from "axios";
import { API_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { t } from "i18next";



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
    .then(()=> toast.success(t("Product added successfully")))
    .catch((err) => ()=>toast.error(t('Error add product')))
    .finally(()=>{
      return;
    })
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
      toast.error(err.message);
    });

    return data
}

export async function deleteItemCart(item,refetch){

  const storedData = JSON.parse(localStorage.getItem("auth-token"));
  const {
    session: { token },
    user,
  } = storedData;

  await axios
    .delete(`${API_URL}/deleteItemCart?user=${user.user_metadata.fullName}&item=${item}`)
    .then(()=> toast.success(t("Successfully deleted")))
    .catch((err) => toast.error(t('Error delete Cart')))
    .finally(()=>{
      refetch();
      return;
    });


}

