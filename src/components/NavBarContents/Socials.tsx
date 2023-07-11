import { useRef, useState } from 'preact/hooks'
import useClickAway from './hooks/useClickAway'
import CustomButton from '../common/CustomButton'
import classNames from 'classnames'

const PhoneNumberComponent = ({ phoneNumber, open, setOpen }: { phoneNumber: string, open: boolean, setOpen: (open: boolean) => void }) => {
  const divRef = useRef<HTMLDivElement>(null)
  useClickAway(() => setOpen(!open))
  return (
    <>
      {!open
        ? null
        :  
        (<div ref={divRef} className={`absolute translate-x-[60px] -translate-y-[160px] sm:translate-x-[80px] sm:-translate-y-[40px] font-semibold bg-pink-500 p-2 rounded-lg w-32 ${phoneNumber !== '' ? '' : 'hidden'}`}>
          {
            phoneNumber
          }
        </div>)
    }
    </>

  )
}

const Socials = ({ currentWindowHeight, isDesktopView }: { currentWindowHeight: number, isDesktopView: boolean }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [open, setOpen] = useState<boolean>(false)

  const handleClickPhoneIcon = () => {
    if(!open) {
      setOpen(true)
      setPhoneNumber(`${String.fromCharCode(56)}${String.fromCharCode(49)}${String.fromCharCode(56)}-${String.fromCharCode(56)}${String.fromCharCode(51)}${String.fromCharCode(54)}-${String.fromCharCode(49)}${String.fromCharCode(57)}${String.fromCharCode(56)}${String.fromCharCode(56)}`)
    } else {
      setOpen(false)
      setPhoneNumber('')
    }
  }
  const windowHeight = `${currentWindowHeight}px`

  const stack = classNames('flex-col items-center bg-pink-500 ml-6')
  const row = 'flex-col my-5 mx-6 top-12 left-0'
  return (
    <section style={{ height: `${isDesktopView ? windowHeight : ''}`  }} className={`absolute flex ${isDesktopView ? stack : row} gap-2 pl-4 sm:pl-8 pr-6 pb-2 pt-7 rounded-lg left-0 bg-opacity-10`}>
      <div className='h-64 min-h-60' hidden={!(isDesktopView)}></div>
      <article className={`flex ${isDesktopView ? 'flex-col' : 'flex-row'} gap-2`}>
        <a target='_blank' href='https://github.com/mxjrd'>
          <CustomButton iconName='github' size='medium' />
        </a>
        <a target='_blank' href='https://linkedin.com/in/mxjrd'>
          <CustomButton iconName='linkedin' size='medium' />
        </a>
      </article>
      <article className={`flex ${isDesktopView ? 'flex-col' : 'flex-row'} gap-2`}>
        <a href='mailto:mxjreed@gmail.com'>
          <CustomButton iconName='email' size='medium' />
        </a>
        <div>
          {/* <button alt='Phone number, hidden unless clicked on. No ez web scraping for u ;P' className='hover:bg-gray-400 p-2 text-blue-500 border-2 rounded' onClick={() => handleClickPhoneIcon()}>
            <PhoneIcon/>
          </button> */}
          <CustomButton iconName='phone' size='medium' clickHandler={() => handleClickPhoneIcon()} />
          <PhoneNumberComponent open={open} setOpen={setOpen} phoneNumber={phoneNumber}/>
        </div>
      </article>
    </section>
  );
};

export default Socials
