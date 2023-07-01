import { Route, Router, Routes } from "react-router"
import NavBar, { CollapsedNavBar } from "../NavBarContents/NavBar"
import Socials from "../NavBarContents/Socials"
import MusicPlayer from "../Music/MusicPlayer"
import { Suspense, lazy } from 'preact/compat';
import { useRef, useState } from "react"
import Home from "./Home"
import AboutMe from "./AboutMe"
import { BrowserRouter } from "react-router-dom";
import { TrackInfoType } from "../../assets/music/MusicMoods";
const Services= lazy(() => import('./Services'))

const PrimaryView = ({ mood, setMood, setWelcome, sectionStyles }: { mood: string, setMood: (mood: string) => void, setWelcome: (welcome: boolean) => void, sectionStyles: string }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [currentTrack, setCurrentTrack] = useState<TrackInfoType>()
  const audioRef = useRef<HTMLAudioElement>(null)
  return (
      <BrowserRouter>
        <main className='fixed flex flex-col items-center justify-between h-full w-full overflow-y-auto overflow-x-hidden max-w-screen flex-1 text-white'>
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