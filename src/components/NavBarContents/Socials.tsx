import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as MailIcon } from '../../assets/mail.svg'
import { useRef, useState } from 'preact/hooks'
import useClickAway from './hooks/useClickAway'

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


const Socials = ({ stack }: { stack?: string }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [clickedAway, setClickedAway] = useState<boolean>(true)
  return (
    <section className={`absolute bg-pink-500 flex h-full max-h-screen ${stack ? stack : 'w-full'} items-center gap-2 pl-8 pr-6 pb-2 pt-7 rounded-lg left-0 bg-opacity-10 ml-8`}>
      <div className='min-h-60 h-72'></div>
      <a target='_blank' href='https://github.com/mxjrd'>
        <button className='border-2 p-2 rounded text-blue-500'>
          <GithubIcon />
        </button>
      </a>
      <a target='_blank' href='https://linkedin.com/in/mxjrd'>
      <button className='border-2 p-2 rounded text-blue-500'>
          <LinkedInIcon />
      </button>
      </a>
      <a href='mailto:mxjreed@gmail.com'>
        <button className='border-2 p-2 rounded text-blue-500'>
          <MailIcon />
        </button>
      </a>
      <div>
        <button alt='Phone number, hidden unless clicked on. No ez web scraping for u ;P' className='border-2 p-2 rounded text-blue-500' onClick={() => {
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
