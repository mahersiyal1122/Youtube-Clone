import React, { useContext } from 'react'
import { HomeBarData } from '../assets/data'
import { YtContext } from '../context/YtContext'

const HomeStickyBar = ({category,setCategory}) => {

    const {sideBarVisibility}=useContext(YtContext)

    return (
        <section id='homeStickyBar' className={`relative flex bg-[#0f0f0f] items-center ${!sideBarVisibility?"w-[calc(100vw-5rem)]":"w-[calc(100vw-16rem)]"} text-[max(0.95vw,12px)] font-medium max-[600px]:w-screen max-[600px]:border-x-0 max-[600px]:border-t-0 max-[600px]:border max-[600px]:border-zinc-600`}>
            <div id='homeStickyBarDiv' className='flex overflow-x-auto mx-[max(1.5vw,10px)] py-4 max-[600px]:py-[10px] '>
            {HomeBarData.map((barData, i) => (
                <div onClick={()=>setCategory(event=>event===barData.category?"all":barData.category)} className={` ${category===barData.category?"bg-white text-black":"hover:bg-[#5a5656]"} cursor-pointer px-[12px] py-[6px] rounded-[8px] mx-[6px]  bg-[#2e2d2d] w-max text-nowrap`} key={i}>{barData.value}</div>
            ))}
            </div>
        </section>
    )
}

export default HomeStickyBar
