import React from 'react'
import { CgProfile } from "react-icons/cg";
const SignInBtn = () => {
    return (
        <div className='flex items-center justify-center gap-1 text-[#3EA6FF] border border-zinc-500 w-[max(5.8vw,70px)] h-[max(5vh,29px)] rounded-3xl hover:bg-[#3ea5ff5b] hover:border-none cursor-pointer'>
            <div className='text-[max(1.5vw,15px)]'><CgProfile /></div>
            <div className='text-[max(1vw,10px)] font-medium'>Sign in</div>
        </div>
    )
}

export default SignInBtn
