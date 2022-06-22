import React from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledHeaderText,
  AuthButton,
} from "./styles";
import Google from "../../img/google.png";
import Github from "../../img/github.png";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
        <button type="submit" onClick={onSubmit}>
          Login
        </button>
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
      <AuthButton style={{ backgroundColor: "#df4930" }}>
        <img src={Google} alt="Google" /> Continue with Google
      </AuthButton>
      <AuthButton style={{ backgroundColor: "#000" }}>
        <img src={Github} alt="Github" /> Continue with Github
      </AuthButton>
    </StyledContainer>
  );
};

export default Login;
