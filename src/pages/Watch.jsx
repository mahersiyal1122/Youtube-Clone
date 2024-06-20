import React, { useContext, useEffect, useState } from 'react'
import { YtContext } from '../context/YtContext'
import { useParams } from 'react-router-dom'
import VideoSection from '../components/VideoSection'

const Watch = () => {
  const [category, setCategory] = useState("all")
  const { setSideBarVisibility, videosData } = useContext(YtContext)
  const { videoTitle } = useParams()
  const showVideo = videosData.find((e) => e.id === videoTitle)

  useEffect(() => {
    setSideBarVisibility(false)
  }, [])
  return (
    <section className='w-[90%]'>
      <VideoSection category={category} showVideo={showVideo} />
    </section>
  )
}

export default Watch
