import axios from "axios";
import { API_URL } from "../utils/constants";
import toast from "react-hot-toast";
import {t} from 'i18next'

export async function login({ email, password }) {
  const data = {
    email: email,
    password: password,
  };
  try {
    const res = await axios.post(`${API_URL}/login`, data);
    if (res.status === 200) {
      const data = res.data;
      localStorage.setItem("auth-token", JSON.stringify(data));
      return data;
    } else {
      throw new Error(`Nieudane logowanie. Kod statusu: ${res.status}`);
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
export async function register({ fullName, email, password }) {
  const data = {
    fullName,
    email,
    password,
  };
  try {
    const res = await axios.post(`${API_URL}/register`, data);
    if (res.status === 200) {
      return res.status;
    }
  } catch (error) {
    if(error.response.status === 406){
      throw new Error(t('email taken'))
    }else{
      throw new Error(t('register error'));
    }
  }
}

export async function getCurrentUser() {
  const storedData = JSON.parse(localStorage.getItem("auth-token"));
  const {
    session: { token },
    user,
  } = storedData;
  const data = {
    token,
    user,
  };

  try {
    const res = await axios.post(`${API_URL}/verify-token`, data);
    if (res.status === 200) {
      return res.data?.user;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
}

export async function logout() {
  localStorage.removeItem("auth-token");
}

export async function updateCurrentUser({ password, fullName, avatar }) {}

export async function updateBench({ collection, file }) {
  let formData = new FormData();
  formData.append("collection", collection);
  formData.append("file", file);

  try {
    const res = await axios.post(`${API_URL}/updateBenchmark`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    toast.error(err);
  }
}

export async function updateData({ collection, data }) {
  const query = {
    collection,
    data,
  };
  try {
    const res = await axios.post(`${API_URL}/updateDatabase`, query);
    if (res.status === 200) {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}
