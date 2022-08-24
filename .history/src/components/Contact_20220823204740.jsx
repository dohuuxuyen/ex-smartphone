import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] mb-10">
      <div className="py-10 bg-[#f7faf9] ">
        <h2 className="text-center font-semibold text-2xl uppercase">
          Liên hệ
        </h2>
        <form
          className="flex flex-col w-[400px] mx-auto my-20"
          onSubmit={handleSubmit}
        >
          <input
            className="w-[100%] border px-2 mb-5 outline-none border-[#ccc]"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-[100%] border px-2 h-[200px] outline-none border-[#ccc]"
            placeholder="Nội dung"
            required
          ></textarea>
          <button
            className="border mt-5 mb-2 outline-none border-[#ccc] py-2"
            type="submit"
          >
            Gửi
          </button>
          {message && (
            <span className="text-center">Thanks, I'll reply :)</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
