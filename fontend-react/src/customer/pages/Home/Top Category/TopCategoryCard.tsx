import React from 'react'
import { useNavigate } from 'react-router-dom'


const ElectronicCategoryCard = ({item}:any) => {
  const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/products/${item.categoryId}`)} className='flex w-20 flex-col items-center gap-3 cursor-pointer '>
        <img className='object-contain h-35  ' src={item.image} alt={item.name} />
       
  
    </div>
  )
}

export default ElectronicCategoryCard