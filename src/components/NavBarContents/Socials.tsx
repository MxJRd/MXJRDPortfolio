import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as MailIcon } from '../../assets/mail.svg'
import { useRef, useState } from 'preact/hooks'
import useClickAway from './hooks/useClickAway'
import CustomButton from '../common/CustomButton'

const PhoneNumberComponent = ({ phoneNumber, clickedAway, setClickedAway }: { phoneNumber: string, clickedAway: boolean, setClickedAway: (clickedAway: boolean) => void }) => {
  const divRef = useRef<HTMLDivElement>(null)
  useClickAway(() => setClickedAway(!clickedAway))
  return (
    <>
      {clickedAway
        ? null
        :  
        (<div ref={divRef} className={`absolute translate-x-[80px] -translate-y-[40px] bg-pink-500 p-2 rounded-lg w-32 ${phoneNumber !== '' ? '' : 'hidden'}`}>
          {
            phoneNumber
          }
        </div>)
    }
    </>

  )
}
const SmallSocialsBar = () => {
  return (
    <div>
      <a target='_blank' href='https://github.com/mxjrd'>
        <button className='p-2 text-blue-500 border-2 rounded'>
          <GithubIcon />
        </button>
      </a>
      <a target='_blank' href='https://linkedin.com/in/mxjrd'>
      <button className='p-2 text-blue-500 border-2 rounded'>
          <LinkedInIcon />
      </button>
      </a>
      <a href='mailto:mxjreed@gmail.com'>
        <button className='p-2 text-blue-500 border-2 rounded'>
          <MailIcon />
        </button>
      </a>
      <div>
        <button alt='Phone number, hidden unless clicked on. No ez web scraping for u ;P' className='p-2 text-blue-500 border-2 rounded' onClick={() => {
          if(clickedAway) {
            setClickedAway(false)
            setPhoneNumber('')
          } else {
            setClickedAway(true)
            setPhoneNumber(`${String.fromCharCode(56)}${String.fromCharCode(49)}${String.fromCharCode(56)}-${String.fromCharCode(56)}${String.fromCharCode(51)}${String.fromCharCode(54)}-${String.fromCharCode(49)}${String.fromCharCode(57)}${String.fromCharCode(56)}${String.fromCharCode(56)}`)
          }
        }}>
          <PhoneIcon/>
        </button>
        <PhoneNumberComponent clickedAway={clickedAway} setClickedAway={setClickedAway} phoneNumber={phoneNumber}/>
      </div>
    </div>
  )
}
const Socials = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [clickedAway, setClickedAway] = useState<boolean>(true)
  const stack = 'flex-col h-full items-center bg-pink-500'
  const row = 'h-24 flex-row w-full justify-start top-0 left-28'
  return (
    <section className={`absolute flex ${row} gap-2 pl-8 pr-6 pb-2 pt-7 rounded-lg left-0 bg-opacity-10 ml-8`}>
      <div className='h-64 min-h-60'></div>
      <a target='_blank' href='https://github.com/mxjrd'>
        <CustomButton iconName='github' size='medium' />
      </a>
      <a target='_blank' href='https://linkedin.com/in/mxjrd'>
        <CustomButton iconName='linkedin' size='medium' />
      </a>
      <a href='mailto:mxjreed@gmail.com'>
        <CustomButton iconName='email' size='medium' />
      </a>
      <div>
        <button alt='Phone number, hidden unless clicked on. No ez web scraping for u ;P' className='p-2 text-blue-500 border-2 rounded' onClick={() => {
          if(clickedAway) {
            setClickedAway(false)
            setPhoneNumber('')
          } else {
            setClickedAway(true)
            setPhoneNumber(`${String.fromCharCode(56)}${String.fromCharCode(49)}${String.fromCharCode(56)}-${String.fromCharCode(56)}${String.fromCharCode(51)}${String.fromCharCode(54)}-${String.fromCharCode(49)}${String.fromCharCode(57)}${String.fromCharCode(56)}${String.fromCharCode(56)}`)
          }
        }}>
          <PhoneIcon/>
        </button>
        <PhoneNumberComponent clickedAway={clickedAway} setClickedAway={setClickedAway} phoneNumber={phoneNumber}/>
      </div>
    </section>
  );
};

export default Socials
