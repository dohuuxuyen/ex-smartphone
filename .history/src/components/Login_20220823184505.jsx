import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = ({ activeUser, setActiveUser }) => {
  const [uid, setUid] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    if (uid === "admin" && password === "admin") {
      alert("Đăng nhập thành công !!!");
      setActiveUser(true);
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng !!!");
      setActiveUser(false);
    }
  };
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      {activeUser ? (
        <div className="border w-[250px] flex mx-auto my-[50%] bg-[#f7faf9]">
          <NavLink
            to="/products"
            className="uppercase mx-auto px-6 py-2 text-center font-medium"
          >
            Đi đến trang sản phẩm
          </NavLink>
        </div>
      ) : (
        <div className="border w-[300px] h-[300px] flex mx-auto mt-[120px] bg-[#f7faf9]">
          <div className="p-5 my-auto">
            <h1 className="mb-5">Tài khoản và mật khẩu mặc định là: admin</h1>
            <div>
              <h2 className="">Tài khoản</h2>
              <input
                type="text"
                className="border outline-none"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
              />
            </div>
            <div className="my-5">
              <h2>Mật khẩu</h2>
              <input
                type="password"
                className="border outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="text-white bg-black p-2 rounded-md"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
