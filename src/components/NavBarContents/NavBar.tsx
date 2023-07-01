import { Link } from "react-router-dom"
import MXJRDLogo from '../../assets/MXJRDLogo.png'
import { ReactComponent as ChevronLeft } from '../../assets/chevron-right.svg'
import MusicAnalyzer from "../Music/MusicAnalyzer"
import { Ref, useEffect, useRef, useState } from "react"
import { TrackInfoType } from "../../assets/music/MusicMoods"
import useSize from "../Music/useSize"

const CollapsibleNavBar = ({ setOpenNav }: { setOpenNav: (openNav: boolean) => void }) => {
  return (
    <div className='flex'>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex p-3 text-sm text-gray-500 rounded-lg visible md:collapse hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpenNav(true)}
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  )
}

const NavBarContents = ({ setOpenNav, audioRef, currentTrack }: { setOpenNav: (openNavBar: boolean) => void, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType }) => {
  const navBarRef = useRef<HTMLElement>(null)
  const { current } = navBarRef
  const currentWindowSize = useSize({ height: window.innerHeight, width: window.innerWidth })
  const [windowSize, setWindowSize] = useState(currentWindowSize)
  const [audioContainerDimensions, setAudioContainerDimensions] = useState<{ height: number, width: number }>({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0 })
  // console.log(windowSize)
  useEffect(() => {
    setWindowSize([window.innerHeight, window.innerWidth])
  }, [windowSize])
  useEffect(() => {
    setAudioContainerDimensions({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0 })
  }, [audioContainerDimensions])

  return (
    <nav ref={navBarRef} className="pt-8 pb-8 pr-14 flex justify-between shadow-md overflow-hidden min-w-full h-56 z-1000 font-poppins font-medium text-blue-500">
      {audioRef && <MusicAnalyzer containerDimensions={audioContainerDimensions} audioRef={audioRef} currentTrack={currentTrack} />}
      <div className='flex gap-2 pl-14'>
        <img className='w-9 h-9 rounded-lg' src={MXJRDLogo} />
        <p className='mt-1 text-blue-300'>MX<span className='text-blue-400'>J</span><span className='text-pink-400'>R</span><span className='text-pink-400'>D</span></p>
      </div>
      <div className='absolute right-7'>
        <CollapsibleNavBar setOpenNav={setOpenNav}/>
      </div>
      <ul className="flex flex-col gap-10 justify-between mt-1 pl-2 md:visible collapse">
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

export const CollapsedNavBar = ({ openNav, setOpenNav }: { openNav: boolean, setOpenNav: (openNavBar: boolean) => void }) => {
  return (
    <ul style={{ zIndex: 10 }} className='absolute h-72 w-full'>
      <li className='text-blue-500' onClick={() => setOpenNav(false)}>
        <Link to='/'>
          Home
        </Link>
      </li>
      <li className='text-blue-500 whitespace-nowrap' onClick={() => setOpenNav(false)}>
        <Link to='/about'>
          About Me
        </Link>
      </li>
      <li className='text-blue-500' onClick={() => setOpenNav(false)}>
        <Link to='/services'>
          Services
        </Link>
      </li>
    </ul>
  )
}

const Navbar = ({ setOpenNav, audioRef, currentTrack }: { setOpenNav: (openNavBar: boolean) => void, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType }) => (
  <div className='relative w-full'>
    <NavBarContents setOpenNav={setOpenNav} audioRef={audioRef} currentTrack={currentTrack} />
  </div>
)

export default Navbar
