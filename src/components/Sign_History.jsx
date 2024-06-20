import React, { useContext } from 'react'
import { LuHistory } from "react-icons/lu";
import { YtContext } from '../context/YtContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiMiniPause } from "react-icons/hi2";
import SignInBtn from './SignInBtn';

const Sign_History = () => {
    const { sideBarVisibility } = useContext(YtContext)
    return (
        <div className={`flex ${!sideBarVisibility?"w-[calc(100vw-5rem)]":"w-[calc(100vw-16rem)]"} h-[80vh] max-[600px]:w-screen `}>
            <div className={`${!sideBarVisibility ? "w-[70%]" : "w-[70%]"} bg-[#0f0f0f] text-white max-[800px]:w-[60%] max-[600px]:w-full `}>
                <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
                    <div className='text-[120px]'><LuHistory /></div>
                    <div className='text-2xl text-center'>Keep track of what you watch</div>
                    <div className='text-sm text-center'>Watch history isn't viewable when signed out.</div>
                    <div><SignInBtn /></div>
                </div>
            </div>
            <div  className={`w-[30%] mt-[30px] max-[800px]:w-[40%] max-[600px]:hidden `}>
                <div className='w-fit flex items-center gap-2 px-3 py-[6px] hover:bg-zinc-800 rounded-3xl cursor-pointer'>
                    <span><RiDeleteBin6Line /></span>
                    <span>Clear all watch history</span>
                </div>
                <div className='w-fit flex items-center gap-2 px-3 py-[6px] hover:bg-zinc-800 rounded-3xl cursor-pointer'>
                    <span><HiMiniPause /></span>
                    <span>pause watch history</span>
                </div>
                <div className='w-fit flex items-center gap-2 px-3 py-[6px] hover:bg-zinc-800 rounded-3xl cursor-pointer'>
                    <span><RiDeleteBin6Line /></span>
                    <span>Clear all search history</span>
                </div>
                <div className='w-fit flex items-center gap-2 px-3 py-[6px] hover:bg-zinc-800 rounded-3xl cursor-pointer'>
                    <span><HiMiniPause /></span>
                    <span>pause search history</span>
                </div>
            </div>
        </div>
    )
}

export default Sign_History
