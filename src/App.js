import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import SideBar from './components/SideBar';
import Watch from './pages/Watch';
import You from './pages/You';
import History from './pages/History';
import SideBarTranslate from './components/SideBarTranslate';
const App = () => {
  return (
    <main>
      <Navbar />
      <div className='flex'>
        <SideBar />
        <SideBarTranslate/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/feed/subscriptions' element={<Subscriptions />} />
          <Route path='/feed/you' element={<You/>} />
          <Route path='/feed/history' element={<History/>} />
          <Route path='/watch/:videoTitle' element={<Watch />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
