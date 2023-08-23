import { Route, Routes } from 'react-router'
import NavBar, { ExpandedNavBar } from '../NavBarContents/NavBar'
import MusicPlayer from '../Music/MusicPlayer'
import { Suspense, lazy } from 'preact/compat'
import { useEffect, useRef, useState } from 'react'
import Home from './Home'
import AboutMe from './AboutMe/AboutMe'
import { BrowserRouter } from 'react-router-dom'
import { TrackInfoType } from '../../assets/music/MusicMoods'
import Socials from '../NavBarContents/Socials'
import LoadingSpinner from '../common/LoadingSpinner'
import Projects from './Projects/Projects'
import NotFound from './NotFound'
const Services = lazy(() => import('./Services/Services'))

interface PrimaryViewProps {
  mood: string
  sectionStyles: string
  currentWindowSize: any
}

const PrimaryView = ({ mood, sectionStyles, currentWindowSize }: PrimaryViewProps) => {
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [currentTrack, setCurrentTrack] = useState<TrackInfoType>()

  const [currentWindowHeight, setCurrentWindowHeight] = useState(currentWindowSize[1])
  const [currentWindowWidth, setCurrentWindowWidth] = useState(currentWindowSize[0])

  const isDesktopView = currentWindowWidth > 1050
  const isMobileView = currentWindowWidth < 762

  useEffect(() => {
    setCurrentWindowWidth(currentWindowSize[0])
    setCurrentWindowHeight(currentWindowSize[1])
  }, [currentWindowSize])

  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <>
      <BrowserRouter>
        <main className='fixed flex flex-col items-center justify-between flex-1 w-full h-full overflow-x-hidden overflow-y-auto text-white max-w-screen'>
          {openNav && <ExpandedNavBar openNav={openNav} setOpenNav={setOpenNav} />}
          <NavBar isDesktopView={isDesktopView} setOpenNav={setOpenNav} audioRef={audioRef} mood={mood} />
          <Routes>
            <Route path='/' element={<Home sectionStyles={sectionStyles} />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/services' element={
              <Suspense fallback={<LoadingSpinner />}>
                <Services sectionStyles={sectionStyles} />
              </Suspense>
            } />
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Socials currentWindowHeight={currentWindowHeight} mood={mood} isDesktopView={isDesktopView} />
          {mood !== 'none' ? <MusicPlayer isDesktopView={isDesktopView} isMobileView={isMobileView} mood={mood} audioRef={audioRef} currentTrack={currentTrack!} setCurrentTrack={setCurrentTrack} /> : null}
        </main>
      </BrowserRouter>
    </>
  )
}

export default PrimaryView