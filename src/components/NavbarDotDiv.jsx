import React from 'react'
import { BsMoon } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { TfiWorld } from "react-icons/tfi";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { MdOutlineFeedback } from "react-icons/md";
const NavbarDotDiv = () => {
    
  return (
    <div className='w-[280px] py-2 rounded-xl absolute z-50 top-14 right-[120px] bg-[#2e2d2d]'>
      <ul className='navbar_ul flex flex-col'>
        <li className=''>
          <span className='ml-[-5.5px]'><svg className='w-5 h-5 p-0 m-0' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  focusable="false" style={{pointerEvents: "none", color: "" , display: "inherit"}}><path d="m12 3.06 7 3.21v4.84c0 1.3-.25 2.6-.75 3.86-.15.37-.33.76-.55 1.17-.15.27-.31.54-.48.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-.56-3.91-1.97-5.23-3.98-.17-.27-.33-.54-.48-.81-.22-.41-.4-.79-.55-1.17-.48-1.26-.73-2.56-.73-3.86V6.27l7-3.21m0-1.1L4 5.63v5.49c0 1.47.3 2.9.81 4.22.17.44.37.86.6 1.28.16.3.34.6.52.88 1.42 2.17 3.52 3.82 5.95 4.44l.12.02.12-.03c2.43-.61 4.53-2.26 5.95-4.43.19-.29.36-.58.52-.88.22-.41.43-.84.6-1.28.51-1.33.81-2.76.81-4.23V5.63l-8-3.67zm1.08 10.15c-.32-.06-.64-.11-.96-.12A2.997 2.997 0 0012 6a2.996 2.996 0 00-.12 5.99c-.32.01-.64.06-.96.12C8.64 12.58 7 14.62 7 17h10c0-2.38-1.64-4.42-3.92-4.89zM10 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1.12 4.09c.37-.08.64-.11.88-.11s.51.03.88.11c1.48.3 2.63 1.46 3 2.91H8.12c.37-1.45 1.52-2.61 3-2.91z"></path></svg></span>
          <span>Your data in YouTube</span>
        </li>
        <li>
          <span><BsMoon /></span>
          <span>
            <span>Appearance: Device theme</span>
            <span><MdOutlineArrowForwardIos /></span>
          </span>
        </li>
        <li>
          <span><IoLanguageOutline /></span>
          <span>
            <span>Language: English</span>
            <span><MdOutlineArrowForwardIos /></span>
          </span>
        </li>
        <li>
          <span><MdOutlineAdminPanelSettings /></span>
          <span>
            <span>Resticted Mode: Off</span>
            <span><MdOutlineArrowForwardIos /></span>
          </span>
        </li>
        <li>
          <span><TfiWorld /></span>
          <span>
            <span>Location: Pakistan</span>
            <span><MdOutlineArrowForwardIos /></span>
          </span>
        </li>
        <li>
          <span><FaRegKeyboard /></span>
          <span>Keyboard shortcuts</span>
        </li>
        <hr className='my-1 border-zinc-600' />
        <li>
          <span><IoSettingsOutline /></span>
          <span>Settings</span>
        </li>
        <hr className='my-1 border-zinc-600' />
        <li>
          <span><LuHelpCircle /></span>
          <span>Help</span>
        </li>
        <li>
          <span><MdOutlineFeedback /></span>
          <span>Send Feedback</span>
        </li>
      </ul>
    </div>
  )
}

export default NavbarDotDiv
