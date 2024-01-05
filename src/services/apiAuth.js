import axios from "axios";
const url = "http://localhost:5000";

export async function login({ email, password }) {
  const data = {
    email: email,
    password: password,
  };

  try {
    const res = await axios.post(`${url}/login`, data);

    if (res.status === 200) {
      const data = res.data
      localStorage.setItem('auth-token', JSON.stringify(data));

      return data;
    } else {
      throw new Error(`Nieudane logowanie. Kod statusu: ${res.status}`);
      
    }
  } catch (error) {
    throw new Error(error.message);
  }
  
}

export async function getCurrentUser() {
  const  storedData =  JSON.parse(localStorage.getItem('auth-token'));
  const {session: {token},user} = storedData
  const data = {
    token,
    user
  }
  
  try {
    const res = await axios.post(`${url}/verify-token`, data);
    if (res.status === 200) {
      console.log(res.data?.user)
      return res.data?.user;
    } else {
      return null
    }
  } catch (err) {
      console.log(err.message)
  }

  return null
}


export async function logout(){

}

export async function updateCurrentUser({ password, fullName, avatar }){

}

export async function signup({ fullName, email, password }){

}
