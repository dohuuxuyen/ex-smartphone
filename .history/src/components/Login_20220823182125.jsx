import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = ({ activeUser, setActiveUser }) => {
  const [uid, setUid] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    alert("Đăng nhập thành công !!!");
  };
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="border w-[300px] h-[300px] flex mx-auto mt-[120px] bg-[#f7faf9]">
        <div className="p-5 my-auto">
          <h1 className="mb-5">Tài khoản và mật khẩu mặc định là: admin</h1>
          <div>
            <h2 className="">Tài khoản</h2>
            <input type="text" className="border outline-none" value="admin" />
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
          <NavLink
            to={activeUser ? "/products" : "/login"}
            onClick={handleLogin}
            className="text-white bg-black p-2 rounded-md"
          >
            Đăng nhập
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
