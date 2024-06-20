import React, { useState } from 'react'
import HomeStickyBar from '../components/HomeStickyBar'
import HomeVideos from '../components/HomeVideos'

const Home = () => {

  const [category, setCategory] = useState("all")

  return (
    <section>
      <HomeStickyBar category={category} setCategory={setCategory} />
      <HomeVideos category={category} />
    </section>
  )
}

export default Home
