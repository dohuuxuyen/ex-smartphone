import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  const [uid, setUid] = useState();
  const [password, setPassword] = useState();
  const [activeUser, setActiveUser] = useState(false);

  const handleLogin = () => {
    if (uid === "admin" && password === "admin") {
      setActiveUser(true);
    } else {
      setActiveUser(false);
    }
  };
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
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
          <a
            href={activeUser ? "/products" : "/login"}
            onClick={handleLogin}
            className="text-white bg-black p-2 rounded-md"
          >
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
