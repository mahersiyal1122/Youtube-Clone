import React, { useContext } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import SignInBtn from './SignInBtn';
import { BsFire } from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import youtube_icon from "../assets/youtube_icon.png"
import youtube_music_icon from "../assets/youtube_music_icon.svg"
import yt_kids from "../assets/yt_kids.png"
import { IoSettingsOutline } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { MdOutlineFeedback } from "react-icons/md";
import { HiOutlineFlag } from "react-icons/hi2";
import { MdVideoLibrary } from "react-icons/md";

import { YtContext } from '../context/YtContext';
import { Link } from 'react-router-dom';
const SideBar = () => {

  const { sideBarVisibility } = useContext(YtContext)

  return (
    <section id='sidebar' className={`h-[calc(100vh-68px)] ${!sideBarVisibility ? "w-20 ml-2 overflow-hidden" : "w-64"} flex flex-col bg-[#0f0f0f] overflow-y-auto py-1 max-[600px]:w-screen max-[600px]:fixed max-[600px]:z-[100] max-[600px]:h-fit max-[600px]:bottom-0 max-[600px]:ml-0 max-[600px]:border-x-0 max-[600px]:border-b-0 max-[600px]:border max-[600px]:border-zinc-600 `}>
      <div className={`flex_col ${!sideBarVisibility && "items-center"} max-[600px]:flex-row`}>
        <Link to={"/"} className='w-full'>
          <div className={`${!sideBarVisibility ? "sidebarIconBox2nd" : "sidebarIconBox"} `}>
            <span className='sidebarIcons'><MdHomeFilled /></span>
            <span>Home</span>
          </div>
        </Link>
        <Link to={"/shorts"} className='w-full'>
          <div className={`${!sideBarVisibility ? "sidebarIconBox2nd" : "sidebarIconBox"} `}>
            <span className='sidebarIcons'><SiYoutubeshorts /></span>
            <span>Shorts</span>
          </div>
        </Link>
        <Link to={"/feed/subscriptions"} className='w-full'>
          <div className={`${!sideBarVisibility ? "sidebarIconBox2nd" : "sidebarIconBox"} `}>
            <span className='sidebarIcons'><MdSubscriptions /></span>
            <span>Subscriptions</span>
          </div>
        </Link>
        <Link to={"/feed/library"} className='w-full hidden max-[6000px]:block'>
          <div className={`${!sideBarVisibility ? "sidebarIconBox2nd" : "sidebarIconBox"} `}>
            <span className='sidebarIcons'><MdVideoLibrary /></span>
            <span>Library</span>
          </div>
        </Link>
      </div>
      {sideBarVisibility && <hr className='sidebar_hr' />}
      <div className={`flex_col ${!sideBarVisibility && "items-center"} max-[600px]:hidden`}>
        <Link to={"/feed/you"} className='w-full'>
          <div className={`${!sideBarVisibility ? "sidebarIconBox2nd" : "sidebarIconBox"} `}>
            <span className='sidebarIcons'><IoPersonSharp /></span>
            <span>You</span>
          </div>
        </Link>
        <Link to={"/feed/history"} className='w-full'>
          <div className={`${!sideBarVisibility ? "sidebarIconBox2nd" : "sidebarIconBox"} `}>
            <span className='sidebarIcons'><LuHistory /></span>
            <span>History</span>
          </div>
        </Link>
      </div>

      {sideBarVisibility && <div>
        <hr className='sidebar_hr' />
        <div className='flex_col gap-3 my-2'>
          <p className='text-sm px-7'>Sign in to like videos, comment, and subscribe.</p>
          <span className='pl-7'><SignInBtn /></span>
        </div>
        <hr className='sidebar_hr' />
        <div className='flex_col'>
          <h3 className='mx-6 text-base font-medium mt-2 mb-1'>Explore</h3>
          <Link to={"/feed/trending"} className='w-full'>
            <div className='sidebarIconBox'>
              <span className='sidebarIcons'><BsFire /></span>
              <span>Trending</span>
            </div>
          </Link>
          <div className='sidebarIconBox'>
            <span className='sidebarIcons'><IoMdMusicalNote /></span>
            <span>Music</span>
          </div>
          <Link to={"/gaming"} className='w-full'>
            <div className='sidebarIconBox'>
              <span className='sidebarIcons'><SiYoutubegaming /></span>
              <span>Gaming</span>
            </div>
          </Link>
          <div className='sidebarIconBox'>
            <span className='sidebarIcons'><FaNewspaper /></span>
            <span>News</span>
          </div>
          <div className='sidebarIconBox'>
            <span className='sidebarIcons'><FaTrophy /></span>
            <span>Sports</span>
          </div>
        </div>
        <hr className='sidebar_hr' />
        <div className='flex_col'>
          <h3 className='mx-6 text-base font-medium mt-2 mb-1'>More from Youtube</h3>
          <div className='sidebarIconBox'>
            <span className=''><img className='w-6' src={youtube_icon} alt="" /></span>
            <span>YouTube Premium</span>
          </div>
          <div className='sidebarIconBox'>
            <span className=''><img className='w-6' src={youtube_music_icon} alt="" /></span>
            <span>YouTube Premium</span>
          </div>
          <div className='sidebarIconBox'>
            <span className=''><img className='w-6' src={yt_kids} alt="" /></span>
            <span>YouTube Kids</span>
          </div>
        </div>
        <hr className='sidebar_hr' />
        <div className='flex_col'>
          <div className='sidebarIconBox'>
            <span className='sidebarIcons'><IoSettingsOutline /></span>
            <span>Settings</span>
          </div>
          <div className='sidebarIconBox'>
            <span className='sidebarIcons'><HiOutlineFlag /></span>
            <span>Report history</span>
          </div>
          <div className='sidebarIconBox'>
            <span className='sidebarIcons'><LuHelpCircle /></span>
            <span>Help</span>
          </div>
          <div className='sidebarIconBox'>
            <span className='sidebarIcons'><MdOutlineFeedback /></span>
            <span>Send Feedback</span>
          </div>
        </div>
        <hr className='sidebar_hr' />
        <div className='mx-6 mb-5 text-[13px] text-[#aaa] font-medium flex_col gap-3'>
          <div className='flex flex-wrap gap-x-[6px] gap-y-[0px]'>
            <span className='cursor-pointer'>About</span>
            <span className='cursor-pointer'>Press</span>
            <span className='cursor-pointer'>Copyright</span>
            <span className='cursor-pointer'>Contact us</span>
            <span className='cursor-pointer'>Creators</span>
            <span className='cursor-pointer'>Advertise</span>
            <span className='cursor-pointer'>Developers</span>
          </div>
          <div className='flex flex-wrap gap-x-[6px] gap-y-[0px]'>
            <span className='cursor-pointer'>Terms</span>
            <span className='cursor-pointer'>Privacy & Safety</span>
            <span className='cursor-pointer'>How Youtube works</span>
            <span className='cursor-pointer'>Test new features</span>
          </div>
          <p className='text-[#717171] text-xs'>&copy; 2024 Zulqarnain Sikander</p>
        </div>
      </div>}
    </section>
  )
}

export default SideBar
