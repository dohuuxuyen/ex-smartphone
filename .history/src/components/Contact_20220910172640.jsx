import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    setInput("");
    setContent("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setMessage(false);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
    setMessage(false);
  };
  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] mb-[190px] sm:px-2">
        <div className="my-[150px] w-[500px] bg-[#f7faf9] mx-auto sm:w-[100%]">
          <h2 className="text-center font-semibold text-2xl uppercase py-2">
            Liên hệ
          </h2>
          <form
            className="flex flex-col w-[400px] mx-auto my-5 sm:w-[100%] px-5"
            onSubmit={handleSubmit}
          >
            <input
              value={input}
              className="w-[100%] border py-1 px-2 mb-5 outline-none border-[#ccc] bg-[#f7faf9]"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => handleInput(e)}
            />
            <textarea
              value={content}
              className="w-[100%] border py-1 px-2 h-[200px] outline-none border-[#ccc] bg-[#f7faf9]"
              placeholder="Nội dung"
              required
              onChange={(e) => handleContent(e)}
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
