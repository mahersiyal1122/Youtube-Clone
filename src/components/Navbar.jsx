import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YtContext } from '../context/YtContext.jsx';

import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import youtube_icon from "../assets/youtube_icon.png"
import NavbarDotDiv from './NavbarDotDiv';
import SignInBtn from './SignInBtn';


const Navbar = () => {

    const [searchBar, setSearchBar] = useState(false)
    const [navDotDiv, setNavDotDiv] = useState(false)
    

    const { sideBarVisibility, setSideBarVisibility, sideBarTranslateToggle, } = useContext(YtContext)


    const searchBarToggle = () => {
        setSearchBar(true)
    }
    const navDotDivToggle = () => {
        setNavDotDiv(!navDotDiv)
    }

    const sideBarToggle = () => {
        setSideBarVisibility(!sideBarVisibility)
    }


    useEffect(() => {
        const handleSearchBar = (e) => {
            if (!e.target.closest("#searchbar")) {
                setSearchBar(false)
            }
        }
        document.addEventListener("click", handleSearchBar)
        return () => { document.removeEventListener("click", handleSearchBar) }
    }, [])

    useEffect(() => {
        const handleNavDotDiv = (e) => {
            if (!e.target.closest("#navDotDiv")) {
                setNavDotDiv(false)
            }
        }
        document.addEventListener("click", handleNavDotDiv)
        return () => { document.removeEventListener("click", handleNavDotDiv) }
    }, [])


    return (
        <section id='navbar' className={`bg-[#0f0f0f] flex justify-between px-6 py-[14px] sticky top-0 z-[200] max-[600px]:border-x-0 max-[600px]:border-t-0 max-[600px]:border max-[600px]:border-zinc-600 `}>
            <div className='flex gap-6 items-center max-[750px]:gap-2'>
                <span onClick={() => sideBarToggle()} className='w-8 h-8 text-[24px] flex items-center justify-center cursor-pointer text-zinc-300 rounded-full hover:outline outline-[#7171716e] outline-4 hover:bg-[#7171716e] max-[1200px]:hidden '><FiMenu /></span>
                <span onClick={() => sideBarTranslateToggle()} className='w-8 h-8 text-[max(2vw,18px)] items-center justify-center cursor-pointer text-zinc-300 rounded-full hover:outline outline-[#7171716e] outline-4 hover:bg-[#7171716e] hidden max-[1200px]:flex max-[600px]:hidden '><FiMenu /></span>
                <Link to={"/"}>
                    <div className='flex items-center cursor-pointer'>
                        <span className='mr-1 w-[max(2vw,22px)]'><img className='w-[max(2vw,22px)]' src={youtube_icon} alt="" /></span>
                        <div className='text-[max(1.5vw,16px)] font-bold'>YouTube</div>
                        <sup className='text-[max(0.8vw,7px)] -mt-1 text-zinc-400 max-[600px]:hidden'>PK</sup>
                    </div>
                </Link>
            </div>
            <div className='flex items-center gap-5 max-[750px]:gap-2 max-[600px]:hidden'>
                <form className='flex items-center' action="">
                    <div onClick={() => searchBarToggle()} id='searchbar' className='flex items-center bg-[#121212] rounded-[28px_0px_0px_28px] h-[max(2.65vw,28px)] w-[max(36vw,60px)] border-[#2e2d2d] border focus-within:border-[#0933a0] '>
                        {searchBar && <span className='pl-4 text-[max(1.3vw,14px)]'><IoIosSearch /></span>}
                        <input className={`outline-none bg-transparent w-full placeholder:text-[max(1.1vw,12px)] ${searchBar ? "pl-2" : "pl-5"}`} placeholder='Search' type="text" />
                    </div>
                    <span className='bg-[#2e2d2d] w-[max(4.6vw,30px)] h-[max(2.65vw,28px)] flex items-center justify-center rounded-[0px_28px_28px_0px] text-[max(1.5vw,16px)] cursor-pointer'><IoIosSearch /></span>
                </form>
                <div className='w-[max(2.65vw,28px)] h-[max(2.65vw,28px)] text-[max(1.5vw,16px)] flex items-center justify-center cursor-pointer rounded-full bg-[#2e2d2d] hover:bg-[#5a5656]'>
                    <MdKeyboardVoice />
                </div>
            </div>
            <div className='flex items-center gap-5 max-[750px]:gap-2 max-[600px]:hidden'>
                <div id='navDotDiv' onClick={() => navDotDivToggle()} className='w-[max(2.65vw,28px)] h-[max(2.65vw,28px)] text-[max(1.5vw,16px)] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#2e2d2d]'><BsThreeDotsVertical /></div>
                {navDotDiv && <NavbarDotDiv />}
                <div className='hidden cursor-pointer'><MdOutlineVideoCall /></div>
                <div className='hidden cursor-pointer'><IoMdNotificationsOutline /></div>
                <SignInBtn />
            </div>
            <div className='hidden max-[600px]:flex items-center gap-5'>
                <div className='text-[22px]'><IoIosSearch /></div>
                <div className='text-[22px]'><CgProfile /></div>
            </div>
        </section>
    )
}

export default Navbar;
