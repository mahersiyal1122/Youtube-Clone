import React, { useContext, useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";

import { YtContext } from '../context/YtContext';
import { Link } from 'react-router-dom';
const VideoBox = ({ id, title, thumbnail, channelName, channelPic, videoPublished, views, vidDuration }) => {
    const [channelThumb, setChannelThumb] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const { sideBarVisibility, setSideBarVisibility, formatCount, getVideoDuration } = useContext(YtContext)

    useEffect(() => {
        if (channelPic) {
            setChannelThumb(channelPic.high.url);
        }
    }, [channelPic]);

    const truncateText = (text) => {
        if (text.length > 75) {
            if (window.innerWidth >= 1000)
                return text.substring(0, 65) + "...";
            else if (window.innerWidth < 1000){
                return text.substring(0, 60) + "...";
            }
        }
        return text;
    };



    return (
        <div>
            <Link to={"/watch/" + id} onClick={() => setSideBarVisibility(false)} className={`flex flex-col gap-2
             ${!sideBarVisibility ? "w-[21vw] max-[1200px]:w-[28vw] max-[1000px]:w-[40vw]" : "w-[25vw]"}
              cursor-pointer max-[600px]:w-screen`}>
                <div className={`relative ${!sideBarVisibility ? "w-[21vw] h-44 max-[1200px]:w-[28vw] max-[1000px]:w-[40vw] max-[650px]:h-36" : "w-[25vw] h-48"} max-[600px]:w-screen max-[600px]:h-[max(50vw,150px)] `}>
                    <img className={`absolute ${!sideBarVisibility ? "w-[21vw] h-44 max-[1200px]:w-[28vw] max-[1000px]:w-[40vw] max-[650px]:h-36" : "w-[25vw] h-48"} rounded-xl max-[600px]:w-screen max-[600px]:rounded-none max-[600px]:h-[max(50vw,150px)]`} src={thumbnail} alt="" />
                    <span className='absolute text-white bottom-[6px] right-[10px] bg-black px-1 rounded-md text-xs ' >{getVideoDuration(vidDuration)}</span>
                </div>
                <div className='flex gap-2 max-[600px]:mx-[10px]'>
                    <div>
                        <div className={`relative w-11 h-11 ${!isLoaded ? "bg-white" : "border-none"} text-black rounded-[50%] max-[600px]:w-10 max-[600px]:h-10`}>
                            {channelThumb && <img style={{ display: isLoaded ? 'block' : 'none' }} onLoad={() => setIsLoaded(true)} className='absolute w-11 h-11 rounded-full max-[600px]:w-10 max-[600px]:h-10' src={channelThumb} alt="" />}
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-[max(1.1vw,13px)] font-medium leading-[1.3]'>{truncateText(title)}</h4>
                        <div className='text-[max(0.95vw,12px)] text-[#aaa] flex items-center gap-1'>{channelName} <span className='text-[13px]'><FaCheckCircle />
                        </span></div>
                        <div className='text-[max(0.95vw,12px)] text-[#aaa] flex gap-[6px] items-center '>
                            <div>{formatCount(views)}</div>
                            <div className='w-1 h-1 bg-[#aaa] rounded-full'></div>
                            <div>{videoPublished}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default VideoBox
