import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] mb-10">
      <div className="py-10">
        <h2 className="text-center font-semibold text-2xl uppercase">
          Liên hệ
        </h2>
        <form
          className="flex flex-col w-[400px] mx-auto my-20 "
          onSubmit={handleSubmit}
        >
          <input
            className="w-[100%] border px-2"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="w-[100%] border px-2"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
