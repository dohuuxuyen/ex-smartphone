import React from "react";
import { useState } from "react";

const Login = () => {
  const [uid, setUid] = useState();
  console.log(uid);
  const [password, setPassword] = useState();
  console.log(uid);

  const handleLogin = () => {
    if (uid === "admin") {
      console.log("Dang nhap thanh cong");
    } else {
      console.log("Dang nhap that bai");
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
          <button
            onClick={handleLogin}
            className="text-white bg-black p-2 rounded-md"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
