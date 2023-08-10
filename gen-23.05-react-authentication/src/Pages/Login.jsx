import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../features/authSlice.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setInputValue = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/login", formData)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));

        navigate("/home");
      })
      .catch((err) => {
        alert("Terjadi kesalahan");
        console.error(err.response);
      });
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-4 py-5 px-10 bg-gray-200 rounded">
        <div className="flex items-center justify-center h-10">
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            className="h-full w-auto"
            alt="Logo"
          />
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="w-96">
            <label>Email</label>
            <input
              type="email"
              className="w-full px-3 py-1 outline-none rounded"
              placeholder="Insert your email here"
              name="email"
              value={formData.email}
              onChange={setInputValue}
            />
          </div>
          <div className="w-96">
            <label>Password</label>
            <input
              type="password"
              className="w-full px-3 py-1 outline-none rounded"
              placeholder="Insert your password here"
              name="password"
              value={formData.password}
              onChange={setInputValue}
            />
          </div>
          <div className="w-96">
            <button
              type="submit"
              className="w-full bg-green-600 py-3 px-5 rounded text-white font-semibold hover:bg-green-700 transition ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
