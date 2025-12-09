import React from 'react'
import HomeCategoryCard from './HomeCategoryCard'
import { useAppSelector } from '../../../../Redux Toolkit/Store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const HomeCategory = () => {
  const { homePage } = useAppSelector((store) => store);
  const categories = homePage.homePageData?.shopByCategories || [];
  const navigate = useNavigate();

  const slides = [
    {
      img: 'https://contents.mediadecathlon.com/s1236598/k$2903a515ea45071cf931506ffa1590d6/defaut.jpg?format=auto&quality=70&f=1920x0',
      categoryId: 'equipments',
    },
    {
      img: 'https://contents.mediadecathlon.com/s1248252/k$880b0138c044b7d5455d1831ddbb5287/defaut.jpg?format=auto&quality=70&f=1920x0',
      categoryId: 'equipments_trekking',
    },
    {
      img: 'https://contents.mediadecathlon.com/s1248245/k$04c31e52cfaf64c7c8ecb79723ee11b7/defaut.jpg?format=auto&quality=70&f=1920x0',
      categoryId: 'equipments_water_sports',
    },
    {
      img: 'https://contents.mediadecathlon.com/s1250324/k$ee87e7559f58c28d58145592ddc21727/defaut.jpg?format=auto&quality=70&f=1920x0',
      categoryId: 'sports_running',
    },
    {
      img: 'https://contents.mediadecathlon.com/s1180065/k$21914ed47604a78244da5b951715a139/defaut.jpg?format=auto&quality=70&f=1440x0',
      categoryId: 'equipments_skating',
    },
  ];

  return (
    <>
      <div className="flex justify-center gap-7 flex-wrap">
        {categories.map((item, index) => (
          <HomeCategoryCard key={index} item={item} />
        ))}
      </div>
      <div className="w-full mt-12">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-[500px] rounded-lg overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative group cursor-pointer"
              onClick={() => navigate(`/products/${slide.categoryId}`)}
            >
              <img
                src={slide.img}
                alt=""
                className="w-7xl h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover: transition-all duration-300"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeCategory;