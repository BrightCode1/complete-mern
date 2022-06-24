import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import * as _email from "email-validator";

import authService from "../../features/auth/authService";
import { reset } from "../../features/auth/authSlice";
import Google from "../../img/google.png";
import Github from "../../img/github.png";

import {
  StyledContainer,
  StyledHeader,
  StyledHeaderText,
  AuthButton,
} from "./styles";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, message, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const emailValidate = _email.validate(email);

    if (!emailValidate) {
      toast.error("Invalid email address");
      return;
    }

    if (!password) {
      toast.error("Fill in all fields!");
      return;
    }

    const userData = {
      email: email,
      password: password,
    };
    dispatch(authService.loginUser(userData));
  };

  const onAuthLogin = (auth) => {
    let timer;
    const windowOpen = window.open(
      `http://localhost:5000/api/auth/${auth}`,
      "_blank",
      "width=500,height=600"
    );
    if (windowOpen) {
      timer = setInterval(() => {
        if (windowOpen.closed) {
          if (authService.loginAuth()) {
            navigate("/");
          }
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      if (userInfo) {
        navigate("/");
      } else {
        toast.error("Error getting user data");
      }
    }
    dispatch(reset());
  }, [userInfo, dispatch, navigate, isSuccess, message, isError]);

  return (
    <StyledContainer>
      <StyledHeader>Login</StyledHeader>
      <StyledHeaderText>Welcome Back</StyledHeaderText>
      <form>
        <input
          name="email"
          type="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={onChangeInput}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={onChangeInput}
        />
        {!isLoading ? (
          <button type="submit" onClick={onSubmit}>
            Login
          </button>
        ) : (
          <PulseLoader size={15} />
        )}
      </form>
      <StyledHeaderText
        style={{
          fontWeight: "700",
          marginTop: "20px",
          borderRadius: "50%",
          border: "1px solid #e6e6e6",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        OR
      </StyledHeaderText>
      <AuthButton
        style={{ backgroundColor: "#df4930" }}
        onClick={() => onAuthLogin("google")}
      >
        <img src={Google} alt="Google" /> Continue with Google
      </AuthButton>
      <AuthButton
        style={{ backgroundColor: "#000" }}
        onClick={() => onAuthLogin("github")}
      >
        <img src={Github} alt="Github" /> Continue with Github
      </AuthButton>
    </StyledContainer>
  );
};

export default Login;
