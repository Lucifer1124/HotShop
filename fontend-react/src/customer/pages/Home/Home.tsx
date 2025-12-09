import React, { useState } from 'react'
import Banner from './Banner/Banner'
import HomeCategory from './HomeCategory/HomeCategory'
import TopBrand from './TopBrands/Grid'
import ElectronicCategory from './Top Category/TopCategory'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Backdrop, Button, CircularProgress } from '@mui/material'
import ChatBot from '../ChatBot/ChatBot'
import { useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAppSelector } from '../../../Redux Toolkit/Store'
import DealSlider from './Deals/Deals'



const Home = () => {
    const [showChatBot, setShowChatBot] = useState(false)
    const { homePage } = useAppSelector(store => store)
    const navigate = useNavigate();

    const handleShowChatBot = () => {
        setShowChatBot(!showChatBot)
    }
    const handleCloseChatBot = () => {
        setShowChatBot(false)
    }
    const becomeSellerClick = () => {
        navigate("/become-seller")
    }
    return (
        <>
        {(!homePage.loading)?<div className='space-y-5 lg:space-y-10 relative'>
            
            {/* <Banner /> */}


          {homePage.homePageData?.grid &&  <section >
                {/* <h1 className='text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-20 text-center'>SHOP FOR WEDDING</h1> */}
                <TopBrand />
            </section>}
          
        {homePage.homePageData?.deals &&    <section className='pt-10'>
           
                <DealSlider/>
            </section>}
           {homePage.homePageData?.shopByCategories && <section className='flex flex-col justify-center items-center py-20 px-5 lg:px-20'>
                    <h1 className=' lg:text-5xl font-bold text-black pb-5 lg:pb-20'>SHOP BY CATEGORY</h1>
                <HomeCategory />
            </section>}


                {/* New paragraph section between */}
                <section className=" flex items-center py-6 px-5 lg:px-10 text-gray-700 text-lg md:text-2xl space-x-3">
                    {/* Location icon (using an SVG inline or from an icon library) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#a738fc]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6 9.5 7.12 9.5 8.5 10.62 11 12 11z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21c-4.97 0-9-4.03-9-9 0-3.75 3.59-8.4 9-13 5.41 4.6 9 9.25 9 13 0 4.97-4.03 9-9 9z"
                        />
                    </svg>

                    <p>
                        We are happy to share that, We're Present in 7+ cities now:{" "}
                        <strong>Bangalore</strong>, <strong>Mumbai</strong>, <strong>Delhi</strong>, <strong>Hyderabad</strong>, <strong>Kolkata</strong>, <strong>Chennai</strong>, <strong>Pune</strong>....
                    </p>

                    {/* HotShop logo text */}
                    <p>Visit</p>
                    <span className="font-audiowide text-[#a738fc] text-2xl md:text-3xl font-bold pl-3">HotShop</span>
                    <p> Stores Now</p>
                </section>


            <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
                <img className='w-full h-full' src={"/seller_banner_image.jpg"} alt="" />
                <div className='absolute top-1/2 left-4 lg:left-[15rem] transform  -translate-y-1/2 font-semibold lg:text-4xl space-y-3 '>
                    <h1 className='text-white'>
                        Sell Your Product
                    </h1>
                    <p className='text-lg md:text-2xl text-white'>With <strong className='font-audiowide  text-[#a738fc] text-3xl md:text-5xl pl-2'>HotShop</strong></p>

                    <div className='pt-6 flex justify-center'>
                        <Button
                            onClick={becomeSellerClick}
                            startIcon={<StorefrontIcon />}
                            variant="contained"
                        >
                            Become Seller
                        </Button>
                    </div>

                </div>

            </section>

            <section className='fixed bottom-10 right-10'>
                {showChatBot ? <ChatBot handleClose={handleCloseChatBot} /> : <Button onClick={handleShowChatBot} sx={{ borderRadius: "2rem" }} variant='contained' className='h-16 w-16  flex justify-center items-center rounded-full'>
                    <ChatBubbleIcon sx={{ color: "white", fontSize: "2rem" }} />
                </Button>}




            </section>
    


        </div>: <Backdrop
                open={true}

            >
                <CircularProgress color="inherit" />
            </Backdrop>}
       
        </>
        
    )
}

export default Home