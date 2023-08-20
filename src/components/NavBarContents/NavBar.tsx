import { Link } from 'react-router-dom'
import MXJRDLogo from '../../assets/MXJRDLogo.png'
import MusicAnalyzer from '../Music/MusicAnalyzer'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import useClickAway from '../../hooks/useClickAway'
import { makeLift } from '../../animations'

const NavLogoContainer = ({ isDesktopView }: { isDesktopView: boolean }): JSX.Element => {
  return (
    <div alt='MXJRD Logo container' className={classNames('flex gap-2 pl-10 sm:pl-14 pt-0.5')}>
      <img className='rounded-lg w-9 h-9' src={MXJRDLogo} />
      <p className={classNames('mt-1.5 text-blue-300', `${isDesktopView ? '-rotate-90 mt-3' : ''}`)}>MX<span className='text-blue-400'>J</span><span className='text-pink-400'>R</span><span className='text-pink-400'>D</span></p>
    </div>
  )
}

const CollapsibleNavBar = ({ setOpenNav }: { setOpenNav: (openNav: boolean) => void }): JSX.Element => {
  return (
    <div alt='Mobile navigation menu.' className='flex'>
      <button data-collapse-toggle='navbar-default' type='button' className='inline-flex visible p-2 mb-2 text-sm text-gray-500 rounded-lg md:collapse hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        onClick={() => setOpenNav(true)}
      >
        <span className='sr-only'>Open main menu</span>
        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
      </button>
    </div>
  )
}

const NavBarContents = ({ setOpenNav, audioRef, isDesktopView }: { setOpenNav: (openNavBar: boolean) => void, audioRef: HTMLAudioElement, isDesktopView: boolean }): JSX.Element => {
  const navBarRef = useClickAway(() => setOpenNav(false))
  const { current } = navBarRef
  const [audioContainerDimensions, setAudioContainerDimensions] = useState<{ height: number, width: number }>({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0 })

  useEffect(() => {
    setAudioContainerDimensions({ height: current?.clientHeight ?? 0, width: current?.clientWidth ?? 0 })
  }, [audioContainerDimensions])

  return (
    <nav alt='Desktop navigation bar.' ref={navBarRef} className='flex justify-between min-w-full pt-8 pb-8 overflow-hidden font-medium text-blue-500 shadow-md h-52 pr-14 z-1000 font-poppins'>
      {audioRef && <MusicAnalyzer containerDimensions={audioContainerDimensions} audioRef={audioRef} />}
      <NavLogoContainer isDesktopView={isDesktopView} />
      <div className='absolute right-3'>
        <CollapsibleNavBar setOpenNav={setOpenNav}/>
      </div>
      <ul alt='Links to different website pages.' className='flex flex-col justify-between gap-10 pl-2 mt-1 md:visible collapse'>
        <div className='flex gap-5 text-blue-500'>
          <li alt='Home link' className={`${makeLift}`}>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li alt='About Me link' className={`${makeLift} whitespace-nowrap`}>
            <Link to='/about'>
              About Me
            </Link>
          </li>
          <li alt='Services link' className={`${makeLift}`}>
            <Link to='/services'>
              Services
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export const ExpandedNavBar = ({ setOpenNav }: { openNav: boolean, setOpenNav: (openNavBar: boolean) => void }): JSX.Element => {
  return (
    <ul style={{ zIndex: 4 }} className='absolute flex flex-col justify-around w-full mt-1 shadow-lg h-52 bg-raisin-black font-bold font-poppins h-10 text-blue-500 text-center'>
      <Link to='/' className='flex-1'>
        <li className='translate-y-[70%]' onClick={() => setOpenNav(false)}>
            Home
        </li>
      </Link>
      <Link to='/about' className='flex-1'>
        <li className='translate-y-[70%] whitespace-nowrap' onClick={() => setOpenNav(false)}>
            About Me
        </li>
      </Link>
      <Link to='/services' className='flex-1'>
        <li className='translate-y-[70%]' onClick={() => setOpenNav(false)}>
            Services
        </li>
      </Link>
    </ul>
  )
}

const Navbar = ({ setOpenNav, audioRef, isDesktopView }: { setOpenNav: (openNavBar: boolean) => void, audioRef: any, isDesktopView: boolean }): JSX.Element => (
  <div className='relative w-full'>
    <NavBarContents setOpenNav={setOpenNav} audioRef={audioRef} isDesktopView={isDesktopView} />
  </div>
)

export default Navbar
