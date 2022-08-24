const data = [
  {
    id: 1,
    title: "Iphone 13 Pro Max",
    desc: "iPhone 13 năm nay được trang bị tấm nền Super Retina XDR OLED sáng hơn 28% so với năm ngoái, đạt tối đa 1200 nits khi hiển thị các video và ảnh HDR. Với sự trang bị này bạn có thể trải nghiệm đa tác vụ từ học tập, làm việc cho tới giải trí tối ưu.",
    src: [
      "../assets/images/products/ip13problue.png",
      "../assets/images/products/ip13progold.png",
      "../assets/images/products/ip13progreen.png",
      "../assets/images/products/ip13prosilver.png",
    ],
    colors: ["blue", "gold", "green", "silver"],
    sizes: [
      {
        size: "256GB",
        price:."31.000.000",
      },
      {
        size: "512GB",
        price: "34.790.000",
      },
      {
        size: "1TB",
        price: "39.990.000",
      },
    ],
    category: "iphone",
    newsProducts: "../assets/images/products/ip13problue.png",
    wweklyBest: "../assets/images/products/ip13problue.png",
  },

  {
    id: 2,
    title: "Iphone 11",
    desc: "iPhone 11 vẫn sở hữu thiết kế tràn viền với “tai thỏ” giống iPhone X. Viền bezel phía trên và dưới cũng được làm gọn lại nhằm tối đa màn hình sử dụng. Cùng với đó, 4 góc của máy cũng được bo tròn nhẹ tạo cảm giác chắc chắn khi cầm trên tay. Mặt lưng iPhone 11 làm từ chất liệu kính nên rất sang trọng, tinh tế. Khác với các dòng iPhone trước, sản phẩm này sẽ có 6 màu bản bạc, vàng, xanh lá, trắng, đen đỏ.",
    src: [
      "../assets/images/products/ip11black.png",
      "../assets/images/products/ip11red.png",
      "../assets/images/products/ip11while.png",
      "../assets/images/products/ip11yellow.png",
    ],
    colors: ["black", "red", "while", "yellow"],
    sizes: [
      {
        size: "64GB",
        price: "10.490.000",
      },
      {
        size: "128GB",
        price: "11.990.000",
      },
    ],
    category: "iphone",
  },

  {
    id: 3,
    title: "Xiaomi 11 Lite 5G",
    desc: "Xiaomi 11 Lite 5G đã được giới thiệu một biến thể 5G đơn giản của Mi 11 Lite nhưng hóa ra lại là một chiếc điện thoại hoàn toàn mới với chipset khác. Đây là sản phẩm phủ hợp nếu như bạn đang tìm kiếm một smartphone giá hợp lý với hiệu năng và dung lượng pin khủng.",
    src: [
      "../assets/images/products/xiaomi11lite5gblue.png",
      "../assets/images/products/xiaomi11lite5gpink.png",
      "../assets/images/products/xiaomi11lite5gblack.png",
      "../assets/images/products/xiaomi11lite5gwhile.png",
    ],
    colors: ["blue", "pink", "black", "while"],
    sizes: [
      {
        size: "128GB",
        price: "6.990.000",
      },
      {
        size: "256GB",
        price: "8.290.000",
      },
    ],
    category: "xiaomi",
    wweklyBest: "../assets/images/products/xiaomi11lite5gblue.png",
  },

  {
    id: 4,
    title: "Samsung Galaxy S21 Plus 5G",
    desc: "Galaxy S21+ được giới thiệu với ngoại hình chứa đầy cái nhìn thẩm mĩ của Samsung trong một sản phẩm flagship. Người dùng vẫn sẽ tìm thấy những điểm quen thuộc trong thiết kế của Samsung như hai mặt kính cường lực, khung viền kim loạ sáng bóng và màn hình Infinity-O. Tuy vậy, hãng đã làm mới lại thiết kế của mình khi khéo léo đặt cụm camera vào một miếng kim loại, hoà vào phần viền của máy",
    src: [
      "../assets/images/products/ssgalaxys21plus5gblack.png",
      "../assets/images/products/ssgalaxys21plus5gwhile.png",
    ],
    colors: ["black", "while"],
    sizes: [
      {
        size: "256GB",
        price: "22.450.000",
      },
    ],
    category: "samsung",
  },

  {
    id: 5,
    title: "Xiaomi Redmi 9A",
    desc: "Xiaomi Redmi 9A 2GB/32GB chính hãng màn hình kích thước 6.53 inch, kết hợp với tỉ lệ khung hình 20:9 đem đến trải nghiệm không gian hiển thị tối ưu nhất. Tấm nền IPS LCD với độ phân giải HD+ (700 x 1600 Pixels) cho màu sắc hiển thị chân thực, màu sắc phong phú và tỷ lệ tương phản cao lên tới 1500:1. Màn hình của chiếc Xiaomi Redmi 9A được chứng nhận ánh sáng xanh thấp giúp bảo vệ mắt, đặc biệt là với người dùng có nhu cầu sử dụng liên tục.",
    src: [
      "../assets/images/products/xiaomiredmi9ablack.png",
      "../assets/images/products/xiaomiredmi9ablue.png",
      "../assets/images/products/xiaomiredmi9agreen.png",
    ],
    colors: ["black", "blue", "green"],
    sizes: [
      {
        size: "32GB",
        price: "2.090.000",
      },
    ],
    category: "xiaomi",
  },

  {
    id: 6,
    title: "Iphone 13",
    desc: "Với những cải tiến không ngừng nghỉ cho những sản phẩm điện thoại thông minh của mình, Apple là hãng smartphone luôn nhận được sự tin tưởng từ người tiêu dùng Việt Nam. Dòng sản phẩm iPhone 13 được ra mắt gần đây với màu sắc mới và nâng cấp đáng kể về phần cứng của điện thoại đang nhận được rất nhiều sự quan tâm từ người hâm mộ.",
    src: [
      "../assets/images/products/ip13blue.png",
      "../assets/images/products/ip13pink.png",
      "../assets/images/products/ip13green.png",
      "../assets/images/products/ip13red.png",
    ],
    colors: ["blue", "pink", "green", "red"],
    sizes: [
      {
        size: "128GB",
        price: "18.590.000",
      },
      {
        size: "256GB",
        price: "21.690.000",
      },
      {
        size: "512TB",
        price: "26.590.000",
      },
    ],
    category: "iphone",
  },

  {
    id: 7,
    title: "Iphone X",
    desc: "iPhone X đã trở thành chiếc smartphone mang tính cách mạng của Apple. Tạm biệt thiết kế cũ với viền màn hình dày và phím home, iPhone X mở ra kỉ nguyên của những chiếc iPhone màn hình tràn viền, bảo mật Face ID và các thao tác điều hướng vuốt chạm thuận tiện hơn.",
    src: ["../assets/images/products/ipxblack.png"],
    colors: ["black"],
    sizes: [
      {
        size: "64GB",
        price: "10.490.000",
      },
    ],
    category: "iphone",
    wweklyBest: "../assets/images/products/ipxblack.png",
  },

  {
    id: 8,
    title: "Xiaomi Redmi 10",
    desc: "Về tổng thể, Xiaomi Redmi 10 có kích thước 161.95 x 75.53 x 8.92mm và nặng 181g. Thân máy được hoàn thiện từ chất liệu nhựa nên cầm nắm nhẹ nhàng, vừa phải. Ở mặt trước, Redmi 10 sở hữu màn hình LCD kích thước rộng 6.5 inch, độ phân giải Full-HD+ (2,400 x 1,080 pixel), được bảo vệ bởi kính cường lực Gorilla Glass 3.",
    src: [
      "../assets/images/products/xiaomiredmi10blue.png",
      "../assets/images/products/xiaomiredmi10gray.png",
      "../assets/images/products/xiaomiredmi10while.png",
    ],
    colors: ["blue", "gray", "while"],
    sizes: [
      {
        size: "64GB",
        price: "3.490.000",
      },
      {
        size: "128GB",
        price: "4.290.000",
      },
    ],
    category: "xiaomi",
    wweklyBest: "../assets/images/products/xiaomiredmi10blue.png",
  },

  {
    id: 9,
    title: "Samsung Galaxy Z Flip3 5G",
    desc: "Samsung Galaxy Z Flip3 5G được trình làng với các màu sắc thời thượng bao gồm: Đen, Tím, Kem, Xanh lá. Hãng tạo ra rất nhiều lựa chọn cho người dùng phù hợp với cá tính của riêng mình. Điện thoại có kích thước 167.3 x 73.6 x 7.2mm với trọng lượng 183g, sản phẩm được đánh giá là nhỏ gọn đáng kể hơn so với Z Flip 5G. Thế nhưng thiết kế màn hình phụ lại lên tới 1.9 inch, lớn hơn đáng kể.",
    src: [
      "../assets/images/products/ssgalaxyzflip35gblack.png",
      "../assets/images/products/ssgalaxyzflip35green.png",
      "../assets/images/products/ssgalaxyzflip35gpurple.png",
    ],
    colors: ["black", "green", "purple"],
    sizes: [
      {
        size: "128GB",
        price: "15.990.000",
      },
      {
        size: "256GB",
        price: "16.890.000",
      },
    ],
    category: "samsung",
  },

  {
    id: 10,
    title: "Samsung Galaxy S22 Ultra",
    desc: "Samsung Galaxy S22 Ultra đơn giản nhưng đồng thời cũng tuyệt đẹp. Các góc cạnh của sản phẩm hoàn thiện sắc nét, vuông vắn. Cụm camera vuông như mọi năm đã biến mất, thay vào đó là một thiết kế đồng bộ camera với mặt lưng. Chúng phẳng hơn và liền lạc, tổng thể là đơn giản nhưng đẹp mắt.",
    src: [
      "../assets/images/products/ssgalaxys22ultrablack.png",
      "../assets/images/products/ssgalaxys22ultragreen.png",
      "../assets/images/products/ssgalaxys22ultrawhile.png",
    ],
    colors: ["black", "green", "while"],
    sizes: [
      {
        size: "128GB",
        price: "26.290.000",
      },
      {
        size: "256GB",
        price: "28.990.000",
      },
      {
        size: "512GB",
        price: "31.890.000",
      },
    ],
    category: "samsung",
    newsProducts: "../assets/images/products/ssgalaxys22ultrablack.png",
    wweklyBest: "../assets/images/products/ssgalaxys22ultrablack.png",
  },

  {
    id: 11,
    title: "Iphone 12 Pro Max",
    desc: "iPhone 12 Pro Max chính thức trở thành chiếc iPhone có màn hình lớn nhất tính tới thời điểm hiện tại. Bạn sẽ được trải nghiệm hình ảnh đã mắt trên màn hình 6,7 inch Super Retina XDR này. Viền màn hình và phần khoét tai thỏ đã được làm gọn hơn để tối ưu thêm không gian hiển thị. Tấm nền của iPhone 12 Pro Max hỗ trợ chuẩn HDR10 với độ sáng tối đa lên tới 1200 nit. Màn hình của máy được bảo vệ bởi kính cường lực Ceremic Shield cho độ bền gấp 4 lần thế hệ trước.",
    src: [
      "../assets/images/products/ip12problue.png",
      "../assets/images/products/ip12progold.png",
      "../assets/images/products/ip12problack.png",
      "../assets/images/products/ip12prosilver.png",
    ],
    colors: ["blue", "gold", "black", "silver"],
    sizes: [
      {
        size: "128GB",
        price: "28.490.000",
      },
      {
        size: "256GB",
        price: "30.490.000",
      },
      {
        size: "512TB",
        price: "34.690.000",
      },
    ],
    category: "iphone",
  },

  {
    id: 12,
    title: "Iphone 8",
    desc: "Điện thoại iPhone 8 kết hợp giữa những đường nét đã làm nên chuẩn mực, thương hiệu với sự thời thượng và hiện đại của mặt lưng phủ kính cường lực thay vì nguyên khối kim loại. Điểm thiết kế này mang lại độ bóng bẩy, đẹp mắt hơn cho sản phẩm.",
    src: [
      "../assets/images/products/ip8while.png",
      "../assets/images/products/ip8gold.png",
    ],
    colors: ["while", "gold"],
    sizes: [
      {
        size: "128GB",
        price: "13.050.000",
      },
    ],
    category: "iphone",
  },

  {
    id: 13,
    title: "Xiaomi Redmi 9",
    desc: "Xiaomi Redmi 9 thuộc phân khúc giá rẻ. Với thiết kế gọn gàng, đáp ứng tốt các nhu cầu sử dụng cơ bản, chiếc Xiaomi Redmi 9 là sự lựa chọn hợp lý trong tầm giá. Nếu bạn đang tham khảo một chiếc smartphone giá rẻ thì đừng bỏ qua sản phẩm này nhé. ",
    src: [
      "../assets/images/products/xiaomiredmi9black.png",
      "../assets/images/products/xiaomiredmi9green.png",
      "../assets/images/products/xiaomiredmi9purple.png",
    ],
    colors: ["black", "green", "purple"],
    sizes: [
      {
        size: "32GB",
        price: "2.490.000",
      },
      {
        size: "64GB",
        price: "3.490.000",
      },
    ],
    category: "xiaomi",
  },

  {
    id: 14,
    title: "Samsung Galaxy A73 5G",
    desc: "Điện thoại Samsung Galaxy A73 5G sử dụng kiểu thiết kế Ambient EDGE tạo ra tổng thể mỏng và đối xứng hoàn hảo mà vẫn đảm bảo được các yếu tố về cấu hình bên trong không bị cắt giảm. Viền điện thoại được thiết kế siêu mỏng cùng các góc cạnh bo tròn tạo cho người dùng trải nghiệm cầm nắm rất đằm tay, thoải mái dùng trong cả ngày dài.",
    src: [
      "../assets/images/products/ssgalaxya735gblue.png",
      "../assets/images/products/ssgalaxya735ggray.png",
      "../assets/images/products/ssgalaxya735gwhile.png",
    ],
    colors: ["blue", "gray", "while"],
    sizes: [
      {
        size: "128GB",
        price: "10.990.000",
      },
      {
        size: "256GB",
        price: "12.490.000",
      },
    ],
    category: "samsung",
  },

  {
    id: 15,
    title: "Samsung Galaxy Z Fold3 5G",
    desc: "Samsung đã rất thành công với hai thế hệ smartphone màn hình gập cao cấp đầu tiên của mình là Galaxy Z Fold1 và Z Fold2. Nối tiếp điều đó, Galaxy Z Fold3 lần này được hãng cho ra mắt với độ hoàn thiện cao hơn 2 phiên bản tiền nhiệm cả về thiết kế lẫn hiệu năng, hứa hẹn sẽ mang đến cho người dùng trải nghiệm trọn vẹn.",
    src: [
      "../assets/images/products/ssgalaxyzfold3black.png",
      "../assets/images/products/ssgalaxyzfold3green.png",
      "../assets/images/products/ssgalaxyzfold3silver.png",
    ],
    colors: ["black", "green", "silver"],
    sizes: [
      {
        size: "256GB",
        price: "27.990.000",
      },
    ],
    category: "samsung",
    newsProducts: "../assets/images/products/ssgalaxyzfold3black.png",
    wweklyBest: "../assets/images/products/ssgalaxyzfold3black.png",
  },

  {
    id: 16,
    title: "Iphone 12",
    desc: "iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây với cạnh được vát phẳng, vuông thành sắc cạnh, mang tới một cảm giác cực kì bền bỉ và chắc chắn. Thiết kế này khiến cho người dùng có thể dễ dàng liên tưởng tới những mẫu iPhone huyền thoại trước đây đã làm nên tên tuổi của Apple như iPhone 4 hoặc iPhone 5.",
    src: [
      "../assets/images/products/ip12blue.png",
      "../assets/images/products/ip12black.png",
    ],
    colors: ["blue", "black"],
    sizes: [
      {
        size: "64GB",
        price: "15.390.000",
      },
      {
        size: "128GB",
        price: "17.590.000",
      },
      {
        size: "256GB",
        price: "22.390.000",
      },
    ],
    category: "iphone",
  },

  {
    id: 17,
    title: "Iphone 7 Plus",
    desc: "iPhone 7 Plus là chiếc iPhone đầu tiên được trang bị camera kép có cùng độ phân giải 12 MP, đem lại khả năng chụp ảnh ở hai tiêu cự khác nhau.",
    src: ["../assets/images/products/ip7plusblack.png"],
    colors: ["black"],
    sizes: [
      {
        size: "128GB",
        price: "8.950.000",
      },
    ],
    category: "iphone",
  },

  {
    id: 18,
    title: "Xiaomi Redmi Note 9",
    desc: "Xiaomi Redmi Note 9 được trang bị cụm 4 camera cực ngầu với cảm biến chính lên tới 48MP. Siêu độ phân giải giúp bạn không bạn tái tạo chân thực từng chi tiết trong bức ảnh của mình. Người dùng cũng sẽ ghi lại những khung cảnh thiên nhiên hùng vĩ với camera góc siêu rộng 8MP. Bên cạnh đó, camera cận cảnh giúp người dùng khám phá những góc chụp độc đáo với vật thể nhỏ như hoa hay côn trùng. Và thật tiếc nếu chúng ta không kể đến khả năng chụp ảnh chân dung xoá phông vượt trội với nhận diện khung cảnh chính xác nhờ cảm biến chiều sâu 2MP chuyên biệt.",
    src: [
      "../assets/images/products/xiaomiredminote9black.png",
      "../assets/images/products/xiaomiredminote9green.png",
      "../assets/images/products/xiaomiredminote9blue.png",
    ],
    colors: ["black", "green", "blue"],
    sizes: [
      {
        size: "128GB",
        price: "3.990.000",
      },
    ],
    category: "xiaomi",
  },

  {
    id: 19,
    title: "Samsung Galaxy A31",
    desc: "Samsung Galaxy A31 là một trong những chiếc smartphone đến từ thương hiệu đình đám này. Chiếc điện thoại này được dự đoán là sẽ ra mắt trong thời gian sắp tới. Nhiều năm gần đây, Samsung ngày càng chăm chút cho dòng Galaxy A của mình, bên cạnh hai dòng flagship là Galaxy S và Note ra mắt hàng năm. Cùng xem Samsung Galaxy A31 có những điểm nổi bật nào khiến bạn không thể bỏ qua nó.",
    src: [
      "../assets/images/products/ssgalaxya31black.png",
      "../assets/images/products/ssgalaxya31blue.png",
      "../assets/images/products/ssgalaxya31while.png",
    ],
    colors: ["black", "blue", "while"],
    sizes: [
      {
        size: "128GB",
        price: "5.190.000",
      },
    ],
    category: "samsung",
  },

  {
    id: 20,
    title: "Xiaomi Poco X3",
    desc: "POCO X3 mang khoác trên mình một “bộ cánh” bóng bẩy, hiện đại với mặt lưng được hoàn thiện từ kính giúp cho máy có được vẻ đẹp cực kì tinh tế. Ngoài ra, kích thước tổng thể của máy cũng rất “đẹp”, lần lượt là 165.3 x 76.6 x 8.8 mm, đáng chú ý là độ dày của máy chỉ 8.8mm cùng với trọng lượng khá nhẹ là 208g. Tất cả những yếu tố trên giúp máy có được khả năng cầm nắm rất tốt.",
    src: [
      "../assets/images/products/xiaomipocox3black.png",
      "../assets/images/products/xiaomipocox3blue.png",
    ],
    colors: ["black", "blue"],
    sizes: [
      {
        size: "128GB",
        price: "5.490.000",
      },
    ],
    category: "xiaomi",
  },

  {
    id: 21,
    title: "Iphone 11 Pro Max",
    desc: "iPhone 11 Pro Max chính hãng sẽ sở hữu màn hình 6.5 inch với tai thỏ giống như iPhone XS Max. Viền xung quanh máy cũng được làm mỏng tối đa và mở rộng không gian sử dụng. Màn hình sử dụng tấm nền OLED kết hợp với công nghệ Super Retina HD mang đến những trải nghiệm mới, thú vị hơn..",
    src: [
      "../assets/images/products/ip11prowhile.png",
      "../assets/images/products/ip11progold.png",
      "../assets/images/products/ip11problack.png",
    ],
    colors: ["while", "gold", "black"],
    sizes: [
      {
        size: "64GB",
        price: "24.990.000",
      },
      {
        size: "256GB",
        price: "28.990.000",
      },
      {
        size: "512GB",
        price: "32.990.000",
      },
    ],
    category: "iphone",
    wweklyBest: "../assets/images/products/ip11prowhile.png",
  },

  {
    id: 22,
    title: "Xiaomi 12",
    desc: "Đừng bỏ lỡ chiếc điện thoại Xiaomi 12 được mệnh danh là “Bậc Thầy Điện Ảnh” với những tính năng chụp hình siêu đỉnh cùng với đó là rất nhiều nâng cấp phần cứng hứa hẹn sẽ là một trợ thủ đắc lực trong cuộc sống hàng ngày của bạn. ",
    src: [
      "../assets/images/products/xiaomi12blue.png",
      "../assets/images/products/xiaomi12purple.png",
      "../assets/images/products/xiaomi12black.png",
    ],
    colors: ["blue", "purple", "black"],
    sizes: [
      {
        size: "128GB",
        price: "15.990.000",
      },
      {
        size: "512GB",
        price: "21.890.000",
      },
    ],
    category: "xiaomi",
    newsProducts: "../assets/images/products/xiaomi12blue.png",
    wweklyBest: "../assets/images/products/xiaomi12blue.png",
  },
];

export default data;
