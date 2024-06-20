import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdSort } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { comment_profile_icon } from '../assets/data';
import VideoBoxMini from './VideoBoxMini';
import { YtContext } from '../context/YtContext.jsx';
import { FaCheckCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const VideoSection = ({ showVideo, category }) => {
  const { sideBarVisibility } = useContext(YtContext)
  const [descriptionContent, setDescriptionContent] = useState(false)
  const [hideSort, setHideSort] = useState(false)
  const [sortDivBgClr, setSortDivBgClr] = useState("top_comments")
  const [inputValue, setInputValue] = useState("")
  const [textAreaClick, setTextAreaClick] = useState(false)
  const [replyArrow, setReplyArrow] = useState(false)
  const [channelThumb, setChannelThumb] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  const [commentVisibilty, setCommentVisibilty] = useState(true)

  const [htmlContent, setHtmlContent] = useState('');

  const { setSideBarVisibility,formatLikeCount, fetchPublishedTime, formatSubsCount, videosData } = useContext(YtContext)

  const truncateText = (text) => {
    if (descriptionContent) {
      return text;
    }
    else {
      if (text?.length > 120) {
        return text.substring(0, 120);
      }
      return text;
    }
  };

  const onClickSortDivBgClr = (e) => {
    setSortDivBgClr(e)
  }

  useEffect(() => {
    const handleSort = (e) => {
      if (!e.target.closest("#sortComments")) {
        setHideSort(false)
      }
    }
    document.addEventListener("click", handleSort)
    return () => { document.removeEventListener("click", handleSort) }
  }, [])

  useEffect(() => {
    if (showVideo) {
      setChannelThumb(showVideo?.snippet?.channel?.snippet?.thumbnails?.high?.url);
      let fetchVideo = showVideo?.player?.embedHtml

      fetchVideo = fetchVideo.replace(/width="\d+"/, `width="100%"`)
      fetchVideo = fetchVideo.replace(/height="\d+"/, `height="100%"`)
      fetchVideo = fetchVideo.replace(/<iframe/, '<iframe style="position: absolute;z-index: 40; top: 0; left: 0;"');
      setHtmlContent(fetchVideo)
    }
  }, [showVideo]);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setCommentVisibilty(false)
    }
    else {
      setCommentVisibilty(true)
    }
  }, [window.innerWidth])

  return (
    <div id='videoSection' className={`${!sideBarVisibility ? "w-[calc(100vw-5.6rem)]" : "w-[calc(100vw-15rem)]"} bg-[#0f0f0f] text-white h-[calc(100vh-68px)] pt-5 overflow-hidden overflow-y-auto max-[600px]:w-screen max-[600px]:pt-0`}>
      <div className='flex justify-between mx-5 gap-14 max-[1200px]:flex-col max-[730px]:mx-0 max-[730px]:ml-2 max-[600px]:ml-0 max-[600px]:w-screen'>
        <div className='w-[58vw] flex flex-col gap-2 max-[1200px]:w-[calc(100vw-8rem)] max-[600px]:w-screen '>
          <div className='max-[1200px]:flex justify-center'>
            <div className={`relative ${sideBarVisibility?"h-[27vw]":"w-[58vw] h-[32vw] "} max-[1200px]:h-[35vw]  max-[1200px]:w-[70vw] max-[1000px]:w-full max-[1000px]:h-[40vw] max-[730px]:h-[50vw] max-[600px]:h-[max(64vw,200px)] `} dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
          <h3 className='text-xl font-bold max-[600px]:mx-2'>{showVideo?.snippet?.title}</h3>
          <div className='flex items-center justify-between max-[730px]:flex-col max-[730px]:items-start max-[730px]:gap-5 max-[600px]:mx-2'>
            <div className='flex gap-2 items-center w-full max-[730px]:justify-between'>
              <div className='flex items-center gap-2'>
                <div className={`relative w-11 h-11 ${!isLoaded ? "bg-white" : "border-none"} text-black rounded-[50%]`}>
                  {channelThumb && <img style={{ display: isLoaded ? 'block' : 'none' }} onLoad={() => setIsLoaded(true)} className='absolute w-11 h-11 rounded-full' src={channelThumb} alt="" />}
                </div>
                <div className='flex_col'>
                  <div className='flex gap-1 items-center text-base font-medium cursor-pointer'>{showVideo?.snippet?.channelTitle} <span className='text-[#aaa] text-[13px]'><FaCheckCircle />
                  </span></div>
                  <div className='text-xs text-[#aaa]'>{formatSubsCount(showVideo?.snippet?.channel?.statistics?.subscriberCount)}</div>
                </div>
              </div>
              <div className='bg-white text-black text-[max(0.95vw,12px)] font-medium w-[max(6vw,75px)] h-[max(2vw,36px)] flex items-center justify-center rounded-3xl cursor-pointer ml-3'>Subscribe</div>
            </div>
            <div className='videoButtonsFlow flex gap-[10px] text-[max(0.95vw,11px)] font-medium max-[600px]:w-[98%] max-[600px]:overflow-x-auto'>
              <div className='flex items-center justify-center rounded-3xl cursor-pointer bg-[#272727]'>
                <div className='flex gap-[3px] rounded-[24px_0px_0px_24px] px-3 h-[max(2vw,36px)] items-center justify-center hover:bg-[#5a5656cd]'>
                  <div className='text-[max(1.5vw,18px)]'><AiOutlineLike /></div>
                  <div>{formatLikeCount(showVideo?.statistics?.likeCount)}</div>
                </div>
                <div className='w-[0.7px] h-6 bg-[#676464]'></div>
                <div className='text-[max(1.5vw,18px)] flex rounded-[0px_24px_24px_0px] px-3 w-[50px] h-[max(2vw,36px)] items-center hover:bg-[#5a5656cd] '><span className='rotate-[180deg]'><AiOutlineLike /></span></div>
              </div>
              <div className='flex gap-1 items-center justify-center rounded-3xl cursor-pointer bg-[#272727] hover:bg-[#5a5656cd] w-[max(6vw,70px)] h-[max(2vw,36px)] max-[600px]:px-2'>
                <div className='text-[max(1.5vw,18px)]'><PiShareFat /></div>
                <div>Share</div>
              </div>
              <div className='flex gap-1 items-center justify-center rounded-3xl cursor-pointer bg-[#272727] hover:bg-[#5a5656cd] w-[max(8.5vw,100px)] h-[max(2vw,36px)] max-[600px]:px-3'>
                <div className='text-[max(1.5vw,18px)]'><LiaDownloadSolid /></div>
                <div>Download</div>
              </div>
              <div className='flex text-[max(1.5vw,18px)] items-center justify-center rounded-full cursor-pointer bg-[#272727] hover:bg-[#5a5656cd] w-[max(2vw,36px)] h-[max(2vw,36px)] max-[600px]:p-2'><HiOutlineDotsHorizontal /></div>
            </div>
          </div>
          <div className='flex_col gap-[2px] bg-[#272727] rounded-[10px] w-full px-[10px] py-3 mt-1 max-[600px]:w-[96%] max-[600px]:mx-2'>
            <div className='flex gap-2 text-sm font-medium'>
              <div>{Number(showVideo?.statistics?.viewCount).toLocaleString()} views</div>
              <div>{fetchPublishedTime(showVideo?.snippet?.publishedAt)}</div>
            </div>
            <div>
              <pre id='vid_Description' className={`font-["Roboto","Arial"] text-sm break-words whitespace-pre-wrap ${descriptionContent ? "h-max block" : "h-16 inline"}`}>
                {truncateText(showVideo?.snippet?.description)}</pre>
              <span onClick={() => setDescriptionContent(!descriptionContent)} className='font-medium cursor-pointer'>{descriptionContent ? "Show less" : "...more"}</span>
            </div>
          </div>
          <div className='flex gap-10 my-5 max-[600px]:mx-2 max-[600px]:gap-5'>
            <div className='text-xl font-bold'>{showVideo?.statistics?.commentCount} Comments</div>
            <div onClick={() => setHideSort(!hideSort)} id='sortComments' className='relative flex gap-2 items-center cursor-pointer active:bg-[#272727] transition-colors ease-in-out '>
              <div className='text-[26px] text-[#f1f0f0d4]'><MdSort /></div>
              <div className='text-sm font-medium'>Sort by</div>
              {hideSort && <div className={`absolute z-[90] top-9 bg-[#272727] text-sm py-2 rounded-[10px]`}>
                <div onClick={() => onClickSortDivBgClr("top_comments")} className={`w-32 h-12 px-4 flex items-center ${sortDivBgClr === "top_comments" ? "bg-[#7d7a7ab4]" : ""} hover:bg-[#cbc6c6b4] `}>Top Comments</div>
                <div onClick={() => onClickSortDivBgClr("newest_first")} className={`w-32 h-12 px-4 flex items-center ${sortDivBgClr === "newest_first" ? "bg-[#7d7a7ab4]" : ""} hover:bg-[#cbc6c6b4]`}>Newest first</div>
              </div>}
            </div>
            <div onClick={() => {
              setCommentVisibilty(!commentVisibilty)
            }} className='hidden max-[1200px]:flex items-center active:bg-[#272727] p-1 rounded-full'>
              <span className='text-[22px]'>{commentVisibilty ? <FaEyeSlash /> : <FaEye />}</span>
            </div>
          </div>
          {commentVisibilty && <div className=''>
            <form action="" className='flex_col gap-6' >
              <div className='flex gap-5 mr-2'>
                <div className='w-11 h-11 text-black'>
                  <img src={comment_profile_icon} alt="" />
                </div>
                <div className='flex_col w-[90%]'>
                  <textarea onClick={() => setTextAreaClick(true)}
                    onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Add a comment...' className='bg-transparent w-full h-8 border border-[#aaa] placeholder:text-[#aaa] border-x-0 border-t-0 outline-none focus:border-white' />
                  {textAreaClick &&
                    <div className='flex justify-end gap-3 mt-2'>
                      <div onClick={() => { setTextAreaClick(false); setInputValue("") }} className='cursor-pointer px-[14px] py-[6px] rounded-2xl hover:bg-[#8a8484a7] text-sm'>Cancel</div>
                      <div className={`px-[14px] py-[6px] rounded-2xl ${inputValue.length > 0 ? "bg-[#338ad5] text-black font-medium cursor-pointer hover:bg-[#6ab5f7] " : "bg-[#272727bd] cursor-default"}  text-sm`}  >Comment</div>
                    </div>
                  }
                </div>
              </div>
              <div className='flex gap-4 mr-2'>
                <div className='w-11 h-11 cursor-pointer bg-purple-600 text-black rounded-[50%]'>
                  {/* <img src="" alt="" /> */}
                </div>
                <div className='w-[90%]'>
                  <div className='flex items-center gap-2'>
                    <span className='text-[13px] font-medium cursor-pointer'>@sabdfsjf</span>
                    <span className='text-xs text-[#aaa] cursor-pointer hover:text-[#ffffffe2] '>2 weeks ago</span>
                  </div>
                  <div className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, id! Soluta dolorem aliquid architecto iusto fuga voluptates fugit minus. Illo!
                  </div>
                  <div className='flex items-center mt-1 gap-2'>
                    <div className='flex items-center'>
                      <div className='text-xl px-[6px] py-[6px] rounded-full hover:bg-[#5a5656cd] cursor-pointer'><AiOutlineLike /></div>
                      <div className='text-xs text-[#aaa]'>23</div>
                    </div>
                    <div className='text-xl px-[6px] py-[6px] rounded-full hover:bg-[#5a5656cd] cursor-pointer rotate-[180deg] '><AiOutlineLike /></div>
                    <div className='text-xs font-medium py-[6px] px-3 rounded-2xl hover:bg-[#5a5656cd] cursor-pointer'>Reply</div>
                  </div>
                  <div>
                    <div onClick={() => setReplyArrow(!replyArrow)} className='flex items-center text-sm font-medium text-[#3EA6FF] hover:bg-[#3ea5ff33] active:bg-[#65a6de44] w-fit py-2 px-3 rounded-3xl cursor-pointer' tabIndex={0} >
                      <div className='text-lg mr-[10px]'>{replyArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                      <div className='mr-1'>34</div>
                      <div>replies</div>
                    </div>
                    {replyArrow && <div className='flex_col my-[2px] gap-2'>
                      <div className='flex gap-4 mr-2 ml-3'>
                        <div className='w-6 h-6 cursor-pointer bg-white text-black rounded-[50%]'>
                          {/* <img src="" alt="" /> */}
                        </div>
                        <div className='w-[90%]'>
                          <div className='flex items-center gap-2'>
                            <span className='text-[13px] font-medium cursor-pointer'>@sabdfsjf</span>
                            <span className='text-xs text-[#aaa] cursor-pointer hover:text-[#ffffffe2] '>2 weeks ago</span>
                          </div>
                          <div className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, id! Soluta dolorem aliquid architecto iusto fuga voluptates fugit minus. Illo!
                          </div>
                          <div className='flex items-center mt-1 gap-2'>
                            <div className='flex items-center'>
                              <div className='text-xl px-[6px] py-[6px] rounded-full hover:bg-[#5a5656cd] cursor-pointer'><AiOutlineLike /></div>
                              <div className='text-xs text-[#aaa]'>23</div>
                            </div>
                            <div className='text-xl px-[6px] py-[6px] rounded-full hover:bg-[#5a5656cd] cursor-pointer rotate-[180deg]'><AiOutlineLike /></div>
                            <div className='text-xs font-medium py-[6px] px-3 rounded-2xl hover:bg-[#5a5656cd] cursor-pointer'>Reply</div>
                          </div>
                        </div>
                      </div>
                      <div className='flex gap-4 mr-2 ml-3'>
                        <div className='w-6 h-6 cursor-pointer bg-white text-black rounded-[50%]'>
                          {/* <img src="" alt="" /> */}
                        </div>
                        <div className='w-[90%]'>
                          <div className='flex items-center gap-2'>
                            <span className='text-[13px] font-medium cursor-pointer'>@sabdfsjf</span>
                            <span className='text-xs text-[#aaa] cursor-pointer hover:text-[#ffffffe2] '>2 weeks ago</span>
                          </div>
                          <div className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, id! Soluta dolorem aliquid architecto iusto fuga voluptates fugit minus. Illo!
                          </div>
                          <div className='flex items-center mt-1 gap-2'>
                            <div className='flex items-center'>
                              <div className='text-xl px-[6px] py-[6px] rounded-full hover:bg-[#5a5656cd] cursor-pointer'><AiOutlineLike /></div>
                              <div className='text-xs text-[#aaa]'>23</div>
                            </div>
                            <div className='text-xl px-[6px] py-[6px] rounded-full hover:bg-[#5a5656cd] cursor-pointer rotate-180 '><AiOutlineLike /></div>
                            <div className='text-xs font-medium py-[6px] px-3 rounded-2xl hover:bg-[#5a5656cd] cursor-pointer'>Reply</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </form>
          </div>
          }
        </div>
        <div className={`w-[30vw] pb-32 max-[1200px]:w-[calc(100vw-8rem)] ${!commentVisibilty ? "max-[1200px]:mt-[-50px]" : ""} max-[600px]:w-screen `}>
          <div className='grid gap-y-5'>
            {videosData.map((video, index) => {
              // console.log(video);
              if (category === "all" || category === video.category) {
                let vs = video.snippet
                return <VideoBoxMini key={index} id={video.id} title={vs.title} thumbnail={vs.thumbnails?.maxres?vs.thumbnails?.maxres?.url:vs.thumbnails?.high?.url}
                  videoPublished={fetchPublishedTime(vs.publishedAt)}
                  views={video.statistics?.viewCount}
                  vidDuration={video.contentDetails?.duration}
                  channelPic={vs?.channel?.snippet.thumbnails}
                  channelName={vs.channelTitle} />
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
