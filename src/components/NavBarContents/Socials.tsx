import { Ref, useState } from 'preact/hooks'
import useClickAway from '../../hooks/useClickAway'
import CustomButton from '../common/CustomButton'
import classNames from 'classnames'

const PhoneNumberComponent = ({ phoneNumber, phoneComponentRef }: { phoneNumber: string, phoneComponentRef: Ref<HTMLDivElement> }) => {
  return (
    <div ref={phoneComponentRef} alt='Phone number, hidden unless clicked on. No ez web scraping for u ;P' className={`absolute translate-x-[60px] -translate-y-[160px] sm:translate-x-[80px] sm:-translate-y-[40px] font-semibold bg-pink-500 p-2 rounded-lg w-32`}>
      {
        phoneNumber
      }
    </div>
  )
}

const Socials = ({ currentWindowHeight, isDesktopView }: { currentWindowHeight: number, isDesktopView: boolean }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(false)
  const phoneNumberComponentRef = useClickAway(() => setShowPhoneNumber(false))

  const handleClickPhoneIcon = () => {
    if (!showPhoneNumber) {
      setShowPhoneNumber(true)
      setPhoneNumber(`${String.fromCharCode(56)}${String.fromCharCode(49)}${String.fromCharCode(56)}-${String.fromCharCode(56)}${String.fromCharCode(51)}${String.fromCharCode(54)}-${String.fromCharCode(49)}${String.fromCharCode(57)}${String.fromCharCode(56)}${String.fromCharCode(56)}`)
    } else {
      setShowPhoneNumber(false)
      setPhoneNumber('')
    }
  }
  const windowHeight = `${currentWindowHeight - 1}px`

  const stack = classNames('flex-col items-center bg-pink-500 ml-6')
  const row = 'flex-col my-5 mx-6 top-12 left-0'

  return (
    <section alt='A toolbar with links to social media.' style={{ zIndex: 3, height: `${isDesktopView ? windowHeight : ''}` }} className={`absolute flex ${isDesktopView ? stack : row} gap-2 pl-1 sm:pl-8 pr-6 pb-2 pt-7 rounded-lg left-0 bg-opacity-10`}>
      <div className='h-64 min-h-60' hidden={!(isDesktopView)}></div>
      <article className={`flex ${isDesktopView ? 'flex-col' : 'flex-row'} gap-2`}>
        <a alt='Link to github' target='_blank' href='https://github.com/mxjrd'>
          <CustomButton iconName='github' size='medium' bgColor='white' />
        </a>
        <a alt='Link to LinkedIn' target='_blank' href='https://linkedin.com/in/mxjrd'>
          <CustomButton iconName='linkedin' size='medium' bgColor='white' />
        </a>
      </article>
      <article className={`flex ${isDesktopView ? 'flex-col' : 'flex-row'} gap-2`}>
        <a alt='Link to Email' href='mailto:mxjreed@gmail.com'>
          <CustomButton iconName='email' size='medium' bgColor='white' />
        </a>
        <div alt='Button group to reveal phone number'>
          <CustomButton iconName='phone' size='medium' clickHandler={() => handleClickPhoneIcon()} bgColor='white' />
          { showPhoneNumber ? <PhoneNumberComponent phoneComponentRef={phoneNumberComponentRef} phoneNumber={phoneNumber} /> : null }
        </div>
      </article>
    </section>
  );
};

export default Socials
