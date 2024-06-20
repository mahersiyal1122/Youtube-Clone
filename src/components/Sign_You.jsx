import React, { useContext } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { YtContext } from '../context/YtContext';
import SignInBtn from './SignInBtn';

const Sign_You = () => {
    const { sideBarVisibility } = useContext(YtContext)
    return (
        <div className={`${!sideBarVisibility ? "w-[calc(100vw-5rem)]" : "w-[calc(100vw-16rem)]"} bg-[#0f0f0f] text-white h-[80vh] overflow-hidden max-[600px]:w-screen`}>
            <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
                <div className='text-[150px]'><IoPersonOutline /></div>
                <div className='text-2xl'>Enjoy your favorite videos</div>
                <div className='text-sm text-center'>Sign in to access videos that you've liked or saved</div>
                <div><SignInBtn/></div>
            </div>
        </div>
    )
}

export default Sign_You
