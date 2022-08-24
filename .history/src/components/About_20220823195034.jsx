import React from "react";

const About = () => {
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] mb-10">
      <div className="py-5">
        <h1 className="text-center font-semibold text-2xl ">
          Giới thiệu EX SMARTPHONE
        </h1>
        <div className="my-4">
          <h2 className="text-xl font-medium mb-2 ">Giới thiệu chung</h2>
          <p className="text-[14px] text-justify">
            Công ty Cổ phần Xây dựng và Đầu tư thương mại EX sở hữu chuỗi cửa
            hàng EX SMARTPHONE - là nhà bán lẻ hàng đầu, chuyên cung cấp các sản
            phẩm công nghệ chính hãng tại thị trường Việt Nam. Năm 1996, EX
            SMARTPHONE được thành lập, từng bước trở thành địa chỉ đáng tin cậy
            của người tiêu dùng Việt. Với khẩu hiệu “Nếu những gì chúng tôi
            không có, nghĩa là bạn không cần”, chúng tôi đã, đang và sẽ tiếp tục
            nỗ lực đem đến các sản phẩm công nghệ chính hãng đa dạng, phong phú
            đi kèm mức giá tốt nhất phục vụ nhu cầu của quý khách hàng.{" "}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2 ">
            Những dấu mốc quan trọng
          </h2>
          <ul className="mr-[50px]">
            <li className="list-disc">
              <span>Năm 1996: </span>
              <span>
                Thành lập cửa hàng EX SMARTPHONE đầu tiên tọa lạc trên con phố
                sầm uất của Thành phố Hồ Chí Minh
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
