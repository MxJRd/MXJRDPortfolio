import { Link } from "react-router-dom"
import MXJRDLogo from '../../assets/MXJRDLogo.png'
import { ReactComponent as ChevronLeft } from '../../assets/chevron-right.svg'
import { MusicAnalyzer } from "../Music/MusicPlayer"
import { Ref, useEffect, useRef, useState } from "react"
import { TrackInfoType } from "../../assets/music/MusicMoods"

const NavBarContents = ({ setCollapsed, audioRef, currentTrack }: { setCollapsed: (collapseNavBar: boolean) => void, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType }) => {
  const navBarRef = useRef<HTMLElement>(null)
  const { current } = navBarRef
  const [containerDimensions, setContainerDimensions] = useState<{ height: number, width: number}>({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0 })

  useEffect(() => {
    setContainerDimensions({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0})
    console.log(containerDimensions)
  }, [containerDimensions])

  return (
    <nav ref={navBarRef} className="pt-8 pb-8 pr-14 flex justify-between shadow-md overflow-hidden min-w-full h-[260px] z-1000 font-poppins font-medium text-blue-500">
      { audioRef && <MusicAnalyzer containerDimensions={containerDimensions} audioRef={audioRef} currentTrack={currentTrack} /> }
      <div className='flex gap-2 pl-14'>
        <img className='w-9 h-9 rounded-lg' src={MXJRDLogo} />
        <p className='mt-1 text-blue-300'>MX<span className='text-blue-400'>J</span><span className='text-pink-400'>R</span><span className='text-pink-400'>D</span></p>
      </div>
      <ul className="flex flex-col gap-10 justify-between mt-1 pl-2">
        <div className='flex gap-6'>
          <li className='text-blue-500'>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className='text-blue-500'>
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

export const CollapsedNavBar = ({ setCollapsed }: { setCollapsed: (collapseNavBar: boolean) => void }) => {
  return (
    <>
      <button className='btn btn-sm' onClick={() => setCollapsed(false)}>
        <ChevronLeft />
      </button>
    </>
  )
}

const Navbar = ({ setCollapsed, audioRef, currentTrack }: { setCollapsed: (collapseNavBar: boolean) => void, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType }) => (
  <div className='relative w-full'>
    <NavBarContents setCollapsed={setCollapsed} audioRef={audioRef} currentTrack={currentTrack} />
  </div>
)

export default Navbar
