import { Link } from "react-router-dom"
import MXJRDLogo from '../../assets/MXJRDLogo.png'
import MusicAnalyzer from "../Music/MusicAnalyzer"
import { Ref, useEffect, useRef, useState } from "react"
import { TrackInfoType } from "../../assets/music/MusicMoods"
import useSize from "../Music/useSize"
import classNames from "classnames"

const NavLogoContainer = ({ isDesktopView }: { isDesktopView: boolean }) => {
  return (
    <div className={classNames('flex gap-2 pl-10 sm:pl-14 pt-0.5')}>
      <img className='rounded-lg w-9 h-9' src={MXJRDLogo} />
      <p className={classNames('mt-1.5 text-blue-300', `${isDesktopView ? '-rotate-90 mt-3' : ''}`)}>MX<span className='text-blue-400'>J</span><span className='text-pink-400'>R</span><span className='text-pink-400'>D</span></p>
    </div>
  )
}

const CollapsibleNavBar = ({ setOpenNav }: { setOpenNav: (openNav: boolean) => void }) => {
  return (
    <div className='flex'>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex visible p-2 mb-2 text-sm text-gray-500 rounded-lg md:collapse hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpenNav(true)}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  )
}

const NavBarContents = ({ setOpenNav, audioRef, currentTrack, isDesktopView }: { setOpenNav: (openNavBar: boolean) => void, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType, isDesktopView: boolean }) => {
  const navBarRef = useRef<HTMLElement>(null)
  const { current } = navBarRef
  const currentWindowSize = useSize({ height: window.innerHeight, width: window.innerWidth })
  const [windowSize, setWindowSize] = useState(currentWindowSize)
  const [audioContainerDimensions, setAudioContainerDimensions] = useState<{ height: number, width: number }>({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0 })

  useEffect(() => {
    setWindowSize([window.innerHeight, window.innerWidth])
  }, [windowSize])

  useEffect(() => {
    setAudioContainerDimensions({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0 })
  }, [audioContainerDimensions])

  return (
    <nav ref={navBarRef} className="flex justify-between min-w-full pt-8 pb-8 overflow-hidden font-medium text-blue-500 shadow-md h-52 pr-14 z-1000 font-poppins">
      {audioRef && <MusicAnalyzer containerDimensions={audioContainerDimensions} audioRef={audioRef} currentTrack={currentTrack} />}
      <NavLogoContainer isDesktopView={isDesktopView} />
      <div className='absolute right-3'>
        <CollapsibleNavBar setOpenNav={setOpenNav}/>
      </div>
      <ul className="flex flex-col justify-between gap-10 pl-2 mt-1 md:visible collapse">
        <div className='flex gap-5'>
          <li className='text-blue-500'>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className='text-blue-500 whitespace-nowrap'>
            <Link to='/about'>
              About Me
            </Link>
          </li>
          <li className='text-blue-500'>
            <Link to='/services'>
              Services
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export const ExpandedNavBar = ({ setOpenNav }: { openNav: boolean, setOpenNav: (openNavBar: boolean) => void }) => {
  return (
    <ul style={{ zIndex: 1 }} className='absolute flex flex-col justify-around w-full mt-1 shadow-lg h-52 bg-raisin-black'>
      <Link to='/'>
        <li className='h-10 text-blue-500' onClick={() => setOpenNav(false)}>
            Home
        </li>
      </Link>
      <Link to='/about'>
        <li className='h-10 text-blue-500 whitespace-nowrap' onClick={() => setOpenNav(false)}>
            About Me
        </li>
      </Link>
      <Link to='/services'>
        <li className='h-10 text-blue-500' onClick={() => setOpenNav(false)}>
            Services
        </li>
      </Link>
    </ul>
  )
}

const Navbar = ({ setOpenNav, audioRef, currentTrack, isDesktopView }: { setOpenNav: (openNavBar: boolean) => void, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType, isDesktopView: boolean }) => (
  <div className='relative w-full'>
    <NavBarContents setOpenNav={setOpenNav} audioRef={audioRef} currentTrack={currentTrack} isDesktopView={isDesktopView} />
  </div>
)

export default Navbar
