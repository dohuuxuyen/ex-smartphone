import React from "react";

const Login = () => {
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="border w-[400px] h-[400px] flex mx-auto mt-[120px]">
        <div className="m-auto">
          <div>
            <h2 className="">Tài khoản</h2>
            <input type="text" className="border outline-none" />
          </div>
          <div className="my-5">
            <h2>Mật khẩu</h2>
            <input type="text" className="border outline-none" />
          </div>
          <button className="text-white bg-black p-2 rounded-md">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
