import { Link } from "react-router-dom"
import MXJRDLogo from '../../assets/MXJRDLogo.png'
import { ReactComponent as ChevronLeft } from '../../assets/chevron-right.svg'

const NavBarContents = ({ setCollapsed }: { setCollapsed: (collapseNavBar: boolean) => void }) => {
  return (
    <nav className="pt-8 pb-8 pr-14 pl-8 flex justify-between shadow-md overflow-hidden min-w-full h-[260px] z-1000 font-poppins font-medium text-blue-500">
      <div className='flex gap-2 pl-6.5'>
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
        </div>s
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

const Navbar = ({ setCollapsed }: { setCollapsed: (collapseNavBar: boolean) => void }) => (
  <div className='relative w-full'>
    <NavBarContents setCollapsed={setCollapsed} />
  </div>
)

export default Navbar
