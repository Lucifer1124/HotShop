import React from "react";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import ReplayIcon from "@mui/icons-material/Reply";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { equipmentsLevelTwo } from "../../../../data/category/level two/equipmentsLevelTwo";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const slides = [
  {
    img: "https://contents.mediadecathlon.com/s1217256/k$a75be994ba14971e2c1868d490a45c1f/defaut.jpg?format=auto&quality=70&f=1920x0",
    title: "Dive into Fun",
    subtitle: "With our Swimming Collection offer for today ₹299 onwards",
    categoryId: "sports",
  },
  {
    img: "https://contents.mediadecathlon.com/s1217249/k$65be7de8fc428d736760e05e2e3ac100/defaut.jpg?format=auto&quality=70&f=1920x0",
    title: "Summer Vibes",
    subtitle: "Explore our latest offers on beachwear collection",
    categoryId: "sports",
  },
  {
    img: "https://contents.mediadecathlon.com/s1221962/k$177dbf797dc4afaf4679d05e5b1497a2/defaut.jpg?format=auto&quality=70&f=1920x0",
    title: "Stay Fit",
    subtitle: "Get the best sports gear for your workout today at exiciting offers",
    categoryId: "sports",
  },
  {
    img: "https://contents.mediadecathlon.com/s1217258/k$49dd99ab9ba5a62cc504c1093b829d79/defaut.png?format=auto&quality=70&f=1920x0",
    title: "Summer Cooler",
    subtitle: "Explore our Summer fit those are hit",
    categoryId: "sports",
  },
  {
    img: "https://contents.mediadecathlon.com/s1222272/k$b1ceb72140dd88b2582890b342b98c75/defaut.jpg?format=auto&quality=70&f=1920x0",
    title: "Adventure is just a Camp away",
    subtitle: "Camping is now Happening",
    categoryId: "sports",
  },
];
const features = [
  { icon: <ReplayIcon fontSize="large" color="primary" />, label: "Easy Return" },
  { icon: <LocalShippingIcon fontSize="large" color="primary" />, label: "Free Delivery above ₹999" },
  { icon: <CreditCardIcon fontSize="large" color="primary" />, label: "Secure Payments" },
  { icon: <StorefrontIcon fontSize="large" color="primary" />, label: "Pick up from 100+ stores" },
];
const grid = [
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23807268/2023/6/29/9930b235-5318-4755-abbe-08f99e969e781688026636544LehengaCholi7.jpg",
  },
  {"categoryId":"men_formal_shoes",
        "section": "GRID",
        "name": "men formal shoes",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24651572/2023/8/25/4fbf6d8c-d093-46c5-a5a6-7dd67c0c76551692964752597HouseofPataudiMenTanFauxLeatherFormalSlipOnLoafers1.jpg",
  },
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://images.pexels.com/photos/12730873/pexels-photo-12730873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {"categoryId":"men_sherwanis",
        "section": "GRID",
        "name": "men sherwanis",
    image:
      "https://shreeman.in/cdn/shop/files/20_3cfbd5a3-ecb6-482a-b798-7ffd9de1c784.jpg?v=1712061674&width=700",
  },
  {"categoryId":"women_jewellery",
        "section": "GRID",
        "name": "women jewellery",
    image:
      "https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?b=1&s=612x612&w=0&k=20&c=S-QnNZKqf2u3L-GIaDiIinNRU74GBWQaIDwY7gYJboY=",
  },
  {"categoryId":"women_footwear",
        "section": "GRID",
        "name": "women footwear",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13837166/2021/8/19/04e40e02-4c56-4705-94d0-f444b29973aa1629373611707-House-of-Pataudi-Women-Maroon-Embellished-Handcrafted-Wedges-1.jpg",
  },
];

const TopBrand = () => {
  const {homePage}=useAppSelector(store=>store)
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate(`/products/${slides[1].title}`);
  };
  return (
    <div className="">
      <div className="w-full cursor-pointer">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        
        className="max-w-8xl h-[500px] rounded-lg overflow-hidden"
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide  key={index} className="relative group">
            <img
              src={slide.img}
              alt=""
              className="w-full h-full object-cover"
             
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center opacity-0 ">

            <button

  className="mt-64 bg-primary-color px-6 py-2 rounded-full text-white opacity-0"
  onClick={() => navigate(`/products/${slides[index].categoryId}`)}
>
  Shop Now
</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" py-6 px-4 mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-24 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {feature.icon}
              <p className="mt-2 text-blue-800 font-medium">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

{/*Grid*/}
    
    <br></br>
      <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
        <div className=" col-span-3 row-span-12  text-white  rounded ">
          <img
            className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[0].image}
            alt=""
          />
        </div>

        <div className="col-span-2 row-span-6  text-white rounded">
          <img
            className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[1].image}
            alt=""
          />
        </div>

        <div className="col-span-4 row-span-6  text-white  rounded ">
          <img
            className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[2].image}
            alt=""
          />
        </div>

        <div className="col-span-3 row-span-12  text-white  rounded ">
          <img
            className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[3].image}
            alt=""
          />
        </div>

        <div className="col-span-4 row-span-6  text-white  rounded ">
          <img
            className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[4].image}
            alt=""
          />
        </div>
        <div className="col-span-2 row-span-6  text-white rounded ">
          <img
            className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[5].image}
            alt=""
          />
        </div>


        {/* https://tristenwallace.com/wp-content/uploads/2022/06/wed-7.jpg */}
      </div>
      <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20 mt-5">
        <div className=" col-span-3 row-span-12  text-white  rounded ">
          <img
            className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[6].image}
            alt=""
          />
        </div>

        <div className="col-span-2 row-span-6  text-white rounded">
          <img
            className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[7].image}
            alt=""
          />
        </div>

        <div className="col-span-4 row-span-6  text-white  rounded ">
          <img
            className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[8].image}
            alt=""
          />
        </div>

        <div className="col-span-3 row-span-12  text-white  rounded ">
          <img
            className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[9].image}
            alt=""
          />
        </div>

        <div className="col-span-4 row-span-6  text-white  rounded ">
          <img
            className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[10].image}
            alt=""
          />
        </div>
        <div className="col-span-2 row-span-6  text-white rounded ">
          <img
            className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
            src={homePage.homePageData?.grid[11].image}
            alt=""
          />
        </div>


        {/* https://tristenwallace.com/wp-content/uploads/2022/06/wed-7.jpg */}
      </div>
    </div>
  );
};

export default TopBrand;
