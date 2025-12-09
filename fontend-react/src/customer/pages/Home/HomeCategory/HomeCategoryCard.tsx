import React from 'react'
import "./HomeCategoryCard.css"
import { useNavigate } from 'react-router-dom'

const HomeCategoryCard = ({item}:any) => {
  const navigate=useNavigate()
  return (
    <div
      onClick={() => navigate(`/products/${item.categoryId}`)}
      className='group cursor-pointer w-[220px] lg:w-[320px]' // increased width
    >
      <div className='w-full aspect-[4/3] overflow-hidden border-[3px] border-[#8672ff] rounded-xl'> {/* increased border and rounded */}
        <img
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' // more zoom on hover
          src={item.image}
          alt=""
        />
      </div>
      <p className='text-center text-lg font-semibold text-black mt-2'>
        {item.categoryId || "No Name"}
      </p>
    </div>
  )
}

export default HomeCategoryCard