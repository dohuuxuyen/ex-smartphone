import React from "react";

const Footer = () => {
  return (
    <div className="h-[355px] bg-[#F7FAF9] flex items-center sm:mx-2">
      <div className="h-[215px] w-[100%] max-w-[1200px] mx-auto flex justify-between">
        <div className="w-[25%]">
          <h2 className="font-semibold mb-5">TỔNG ĐÀI HỖ TRỢ</h2>
          <p>Liên hệ đặt hàng: 1800 1111</p>
          <p className="my-3">Thắc mắc đơn hàng: 1800 2222</p>
          <p>Góp ý, khiếu nại: 1800 333</p>
        </div>
        <div className="w-[25%]">
          <h2 className="font-semibold mb-5">VỀ CHÚNG TÔI</h2>
          <p>Giới thiệu</p>
          <p className="my-3">Liên hệ</p>
          <p>Tuyển dụng</p>
          <p className="my-3">Tin tức</p>
          <p>Hệ thống cửa hàng</p>
        </div>
        <div className="w-[25%]">
          <h2 className="font-semibold mb-5">CHĂM SÓC KHÁCH HÀNG</h2>
          <p>Chính sách đổi trả</p>
          <p className="my-3">Chính sách bảo hành</p>
          <p>Chính sách hoàn tiền</p>
        </div>
        <div className="w-[25%]">
          <h2 className="font-semibold mb-5">EX SMARTPHONE</h2>
          <p className="text-justify">
            Với thông điệp "EX SMARTPHONE STYLE", EX SMARTPHONE mong muốn đem
            đến cho khách hàng một lối sống tinh gọn bằng các sản phẩm chất
            lượng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
