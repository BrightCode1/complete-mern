import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import LoginSuccess from "./pages/auth/LoginSuccess";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUser(user);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer newestOnTop={true} />
    </>
  );
}

export default App;
