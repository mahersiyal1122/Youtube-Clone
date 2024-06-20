import React, { useContext, useEffect, useState } from 'react'
import { YtContext } from '../context/YtContext';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
const VideoBoxMini = ({ id, title, thumbnail, channelName, channelPic, videoPublished, views, vidDuration }) => {

    const [channelThumb, setChannelThumb] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const { formatCount, getVideoDuration, sideBarVisibility } = useContext(YtContext)


    const truncateText = (text) => {
        if (sideBarVisibility) {
            return text.substring(0, 28) + "...";
        }
        else if (window.innerWidth >= 850 && window.innerWidth <= 1200) {
            return text
        }
        else if (window.innerWidth <= 600) {
            return text
        }
        else if (text.length > 75) {
            return text.substring(0, 58) + "...";
        }
        return text;
    };

    const scrollToTopFunc=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        if (channelPic) {
            setChannelThumb(channelPic.high.url);
        }
    }, [channelPic]);

    return (
        <div onClick={()=>scrollToTopFunc()} className=''>
            <Link to={"/watch/" + id} className={`flex gap-2 cursor-pointer group/threedots max-[600px]:flex-col `}>
                <div className={`relative w-[11.7vw] h-24 max-[1200px]:w-[180px] max-[600px]:w-screen max-[600px]:h-max `}>
                    <img className='w-[11.7vw] h-24 rounded-[10px] max-[1200px]:w-[180px] max-[600px]:w-screen max-[600px]:h-max max-[600px]:rounded-none ' src={thumbnail} alt="" />
                    <span className='absolute text-white bottom-1 right-2 bg-black px-1 rounded-md text-xs ' >{getVideoDuration(vidDuration)}</span>
                </div>
                <div className={`flex ${sideBarVisibility ? "w-[14vw]" : "w-[17vw]"} h-24 flex-col gap-1 max-[1200px]:w-[calc(100vw-20rem)] max-[600px]:w-screen max-[600px]:flex-row max-[600px]:gap-3 max-[600px]:mx-3 max-[600px]:mt-1 max-[500px]:w-[95%] max-[600px]:h-max  `}>
                    <div className={`max-[600px]:block hidden relative w-10 h-10 ${!isLoaded ? "bg-white" : "border-none"} text-black rounded-[50%]`}>
                        {channelThumb && <img style={{ display: isLoaded ? 'block' : 'none' }} onLoad={() => setIsLoaded(true)} className='absolute w-10 h-10 rounded-full' src={channelThumb} alt="" />}
                    </div>
                    <div className='flex flex-col gap-1 max-[600px]:w-[84%]'>
                        <div className='flex gap-2 justify-between max-[600px]:'>
                            <h4 className='text-sm font-medium leading-[1.3]'>{truncateText(title)}
                            </h4>
                            <div className='min-[600px]:invisible group-hover/threedots:visible max-[600px]:text-xl '><BsThreeDotsVertical /></div>
                        </div>
                        <div className='flex flex-col gap-[2px] max-[600px]:flex-row max-[600px]:gap-2 max-[600px]:mt-[-3px]'>
                            <div className='text-xs text-[#aaa] items-center flex gap-1'>{channelName} <span className='text-[11px] max-[600px]:hidden'><FaCheckCircle />
                            </span>
                            </div>
                            <div className='text-xs text-[#aaa] flex gap-[6px] items-center max-[600px]:flex-row-reverse '>
                                <div>{formatCount(views)}</div>
                                <div className='w-1 h-1 bg-[#aaa] rounded-full'></div>
                                <div className='max-[600px]:hidden'>{videoPublished}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default VideoBoxMini
