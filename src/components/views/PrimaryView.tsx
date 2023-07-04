import { Route, Router, Routes } from "react-router"
import NavBar, { CollapsedNavBar } from "../NavBarContents/NavBar"
import Socials from "../NavBarContents/Socials"
import MusicPlayer from "../Music/MusicPlayer"
import { Suspense, lazy } from 'preact/compat';
import { useEffect, useRef, useState } from "react"
import Home from "./Home"
import AboutMe from "./AboutMe"
import { BrowserRouter } from "react-router-dom";
import { TrackInfoType } from "../../assets/music/MusicMoods";
import useSize from "../Music/useSize";
const Services= lazy(() => import('./Services'))

interface PrimaryViewProps {
  mood: string
  setMood: (mood: string) => void
  setWelcome: (welcome: boolean) => void
  sectionStyles: string
}

const PrimaryView = ({ mood, setMood, setWelcome, sectionStyles }: PrimaryViewProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [currentTrack, setCurrentTrack] = useState<TrackInfoType>()
  const currentWindowSize = useSize({ width: window.innerWidth, height: window.innerHeight })
  const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth])
  useEffect(() => {
    setWindowSize(currentWindowSize)
  }, [window.innerHeight, window.innerWidth])
  const audioRef = useRef<HTMLAudioElement>(null)
  console.log('WIN: ', windowSize)
  return (
      <BrowserRouter>
        <main className='fixed flex flex-col items-center justify-between flex-1 w-full h-full overflow-x-hidden overflow-y-auto text-white max-w-screen'>
            {openNav && <CollapsedNavBar openNav={openNav} setOpenNav={setOpenNav} /> }
            <NavBar setOpenNav={setOpenNav} setCollapsed={setCollapsed} audioRef={audioRef} currentTrack={currentTrack} />
            <Routes>
              <Route path='/' element={<Home sectionStyles={sectionStyles} setMood={setMood} setWelcome={setWelcome} />} />
              <Route path='/about' element={<AboutMe sectionStyles={sectionStyles} />} />
              <Route path='/services' element={
                <Suspense fallback={<div>loading...</div>}>
                  <Services sectionStyles={sectionStyles} />
                </Suspense>
              } />
            </Routes>
            <Socials stack={'flex-col'} />
            {mood !== 'none' ? <MusicPlayer mood={mood} audioRef={audioRef} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} /> : null}
        </main>
    </BrowserRouter>
  )
}

export default PrimaryView