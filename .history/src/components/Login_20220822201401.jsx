import React from "react";

const Login = () => {
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="border border-[#000] w-[400px] h-[400px] flex mx-auto mt-[120px]">
        <div className="m-auto">
          <div>
            <h2 className="font-medium">Tài khoản</h2>
            <input type="text" className="border outline-none" />
          </div>
          <div>
            <h2>Mật khẩu</h2>
            <input type="text" className="border outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
