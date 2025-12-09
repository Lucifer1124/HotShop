import React from 'react'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
import { equipmentsLevelTwo } from '../../../data/category/level two/equipmentsLevelTwo'
import { kidsLevelTwo } from '../../../data/category/level two/kidsLevelTwo'
import { sportsLevelTwo } from '../../../data/category/level two/sportsLevelTwo'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { menLevelThree } from '../../../data/category/level three/menLevelThreeCategory'
import { womenLevelThree } from '../../../data/category/level three/womenLevelThreeCategory'
import { kidsLevelThree } from '../../../data/category/level three/kidsLevelThreeCategory'
import { sportsLevelThree } from '../../../data/category/level three/sportsLevelThreeCategory'
import { equipmentsLevelThree } from '../../../data/category/level three/equipmentsLevelThree'

const categoryTwo: { [key: string]: any[] } = {

    men: menLevelTwo,
    women: womenLevelTwo,
   kids:kidsLevelTwo,
    sports:sportsLevelTwo,
    equipments:equipmentsLevelTwo


}

const categoryThree: { [key: string]: any[] } = {
    men: menLevelThree,
    women: womenLevelThree,
   kids:kidsLevelThree,
   sports:sportsLevelThree,
    equipments:equipmentsLevelThree

}

const CategorySheet = ({ selectedCategory,toggleDrawer,setShowSheet }: any) => {

const navigate=useNavigate()


    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId
        })

    }
    const handleCategoryClick = (category:string) => {
        if(toggleDrawer){
            toggleDrawer(false)()
        }
        if(setShowSheet){
            setShowSheet(false)
        }
        
        navigate("/products/"+category)
    }
    return (
        <Box className='bg-white shadow-lg  lg:h-[500px] overflow-y-auto'>
            <div className=' flex text-sm flex-wrap'>
                {categoryTwo[selectedCategory]?.map((item: any,index) => 
                <div  key={item.name} className={`p-8 lg:w-[20%] ${index%2==0?"bg-slate-50":"bg-white"}`}>

                    <p className='text-[#a738fc] mb-5 font-semibold'>{item.name}</p>

                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectedCategory], item.categoryId)?.map((item: any) => <div key={item.name}>

                            <li 
                            onClick={()=>handleCategoryClick(item.categoryId)}
                            className='hover:text-[#a710fc] cursor-pointer'>
                                {item.name}
                            </li>

                        </div>)}
                    </ul>


                </div>)}
            </div>
        </Box>
    )
}

export default CategorySheet