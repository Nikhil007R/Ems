import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Form");
    console.log("Email is",email)
    console.log("Password is",password)
    handleLogin(email, password);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 py-3 px-5 placeholder:text-gray-500 font-semibold"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 py-3 px-5 placeholder:text-gray-500 mt-3 font-semibold"
            type="password"
            placeholder="Enter password"
          />
          <button className="text-white outline-none rounded-full bg-emerald-600 py-2 px-5 placeholder:text-white mt-5 font-semibold w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
