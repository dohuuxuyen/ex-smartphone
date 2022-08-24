import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] mb-10">
        <div className="my-[150px] w-[500px] bg-[#f7faf9] mx-auto">
          <h2 className="text-center font-semibold text-2xl uppercase">
            Liên hệ
          </h2>
          <form
            className="flex flex-col w-[400px] mx-auto my-10"
            onSubmit={handleSubmit}
          >
            <input
              className="w-[100%] border py-1 px-2 mb-5 outline-none border-[#ccc]"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-[100%] border py-1 px-2 h-[200px] outline-none border-[#ccc]"
              placeholder="Nội dung"
              required
            ></textarea>
            <button
              className="border mt-5 mb-2 outline-none border-[#ccc] py-2 font-medium"
              type="submit"
            >
              Gửi
            </button>
            {message && (
              <span className="text-center pb-2 text-red-500">
                Cảm ơn, chúng tôi sẽ phản hồi :)
              </span>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
