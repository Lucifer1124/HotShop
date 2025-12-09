import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import { Deal } from "../../../../types/dealTypes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate, useNavigation } from 'react-router-dom';

const sports = [
  { name: "CRICKET", img: "https://imgeng.jagran.com/images/2024/05/04/article/image/virat%20kohli%20ipl%202024%20-1714829111489.jpg", categoryId: "sports_cricket" },
  { name: "FOOTBALL", img: "https://phantom-marca.uecdn.es/fd27d90f3e18ce0a7fd411ea30e58ee9/resize/1200/f/webp/assets/multimedia/imagenes/2022/12/09/16706003806665.jpg", categoryId: "sports_football"  },
  { name: "TENNIS", img: "https://thafd.bing.com/th/id/OIP.oGZWOCOVvaUyf7JfPdHuVwHaE8?w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2", categoryId: "sports_tennis"  }, 
  { name: "RUNNING", img: "https://t3.ftcdn.net/jpg/00/91/85/16/360_F_91851629_IStGZORlXvCyzzawl8GqNfmSPpZq6k7E.jpg", categoryId: "sports_running"  },
  { name: "TREKKING", img: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1183637155-1703730708105.jpg", categoryId: "sports_trekking"  },
  { name: "FITNESS", img: "https://fitnesscfgyms.com/wp-content/uploads/2021/10/fitness-center.jpeg", categoryId: "sports_fitness"  },
  { name: "BADMINTON", img: "https://cdn.britannica.com/44/256944-050-8D414329/PV-Sindhu-2020-Tokyo-Olympics.jpg", categoryId: "sports_badminton"  },
  { name: "CYCLING", img: "https://www.trainerroad.com/blog/wp-content/uploads/2021/11/benefits-of-cycling.jpg", categoryId: "sports_cycling"  },
  { name: "SWIMMING", img: "https://www.zen8swimtrainer.com/cdn/shop/articles/5-essential-swimming-skills-715062.png?v=1607690465", categoryId: "sports_swimming"  },
  { name: "BASKETBALL", img: "https://media.lex.dk/media/204248/article_topimage_20250314-050543-6-3498x2332ma.jpg", categoryId: "sports_basketball"  },
   
  ];
  

export default function DealSlider() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate(`/products/${sports[1].name}`);
  };

    const {homePage}=useAppSelector(store=>store)
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024, // Large screen
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768, // Tablet
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480, // Mobile
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],

    };
    return (
      <div> <div className="py-4  ml-20 mr-20">
      <h2 className="text-lg lg:text-4xl font-bold text-black pb-5 lg:pb-20 text-center">TOP CATEGORIES</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="px-4"
      >
        {sports.map((sport, index) => (
          <SwiperSlide key={index} className="text-center">
            <img onClick={() => navigate(`/products/${sports[index].categoryId}`)}
              src={sport.img}
              alt={sport.name}
              className="w-full h-[200px] object-cover rounded-lg shadow-sm"
            />
            <p className="mt-2 font-semibold text-black">{sport.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        <h1 className='text-center text-lg lg:text-4xl font-bold text-black pb-5 pt-6 lg:pb-10'>TODAY'S DEAL</h1>

        <div className=" py-5 lg:px-20">
          <div className="slide-container  ">
            <Slider {...settings}>
              {homePage.homePageData?.deals?.map((item: Deal) => <div className="border flex flex-col items-center justify-center">
                <DealCard deal={item} />
              </div>)}

            </Slider>
          </div>
        </div>
        </div>

    );
}