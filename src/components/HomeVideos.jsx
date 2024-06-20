import React, { useContext } from 'react'
import { YtContext } from '../context/YtContext'
import VideoBox from './VideoBox'


const HomeVideos = ({ category }) => {

  const { videosData, sideBarVisibility, fetchPublishedTime } = useContext(YtContext)


  return (
    <div id='homeVideos' className='p-6 pt-5 bg-[#0f0f0f] h-[calc(100vh-132px)] overflow-y-auto max-[600px]:p-0 max-[600px]:pt-1 max-[600px]:pb-10  '>
      <div className={`grid ${!sideBarVisibility ? "grid-cols-4 max-[1200px]:grid-cols-3 max-[1000px]:grid-cols-2" : "grid-cols-3"} justify-items-center max-[1200px]:justify-items-start max-[1000px]:justify-items-center gap-8 gap-y-10 max-[600px]:grid-cols-1 max-[600px]:gap-y-5`}>
        {videosData.map((video, index) => {
          // console.log(video);
          if (category === "all" || category === video.category) {
            let vs = video.snippet
            return <VideoBox key={index} id={video.id} title={vs.title} thumbnail={vs.thumbnails?.maxres?vs.thumbnails?.maxres?.url:vs.thumbnails?.high?.url}
              videoPublished={fetchPublishedTime(vs.publishedAt)}
              views={video.statistics?.viewCount}
              vidDuration={video.contentDetails?.duration}
              channelPic={vs?.channel?.snippet?.thumbnails}
              channelName={vs.channelTitle} />
          }
        })}
      </div>
    </div>
  )
}

export default HomeVideos
