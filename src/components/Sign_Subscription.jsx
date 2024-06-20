import React, { useContext } from 'react'
import { MdOutlineSubscriptions } from "react-icons/md";
import { YtContext } from '../context/YtContext';
import SignInBtn from './SignInBtn';
const Sign_Subscription = () => {
    const { sideBarVisibility } = useContext(YtContext)
    return (
        <div className={`${!sideBarVisibility ? "w-[calc(100vw-5rem)]" : "w-[calc(100vw-16rem)]"} bg-[#0f0f0f] text-white h-[80vh] overflow-hidden max-[600px]:w-screen`}>
            <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
                <div className='text-[150px]'><MdOutlineSubscriptions /></div>
                <div className='text-2xl'>Don't miss new videos</div>
                <div className='text-sm text-center'>Sign in to see updates from your favorite YouTube channels</div>
                <div><SignInBtn/></div>
            </div>
        </div>
    )
}

export default Sign_Subscription
