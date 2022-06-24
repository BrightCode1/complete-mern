import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const register = createAsyncThunk(
  "api/auth/register",
  async (user, thunkApi) => {
    try {
      const res = await axios.post(`api/auth/register`, user);
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.data));
      }
      return res.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

const loginUser = createAsyncThunk("api/auth/login", async (user, thunkApi) => {
  try {
    const res = await axios.post(`api/auth/login`, user);
    if (res.data.success) {
      localStorage.setItem("user", JSON.stringify(res.data.data));
    }
    return res.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkApi.rejectWithValue(message);
  }
});

const logoutUser = createAsyncThunk(
  "api/auth/register",
  async (user, thunkApi) => {
    localStorage.removeItem("user");
  }
);

const loginAuth = async () => {
  const response = await axios
    .get("http://localhost:5000/api/auth/login/success", {
      withCredentials: true,
    })
    .catch((err) => {
      console.log("Couldn't get user", err);
    });

  if (response && response.data) {
    const { data } = response.data;

    if (!response.data.success) {
      toast.error(response.data.message);
      return;
    }
    localStorage.setItem("user", JSON.stringify(data));
  }
};

const authService = {
  register,
  loginUser,
  logoutUser,
  loginAuth,
};

export default authService;
