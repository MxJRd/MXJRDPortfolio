import { Moods } from '../../app'
import MXJRDLogo from '../../assets/MXJRDLogo.png'
import Welcome from './Welcome'
import { useState } from 'react'

const WelcomeOverlay = ({ setMood, setWelcome, sectionStyles }: { sectionStyles: string, setMood: (mood: Moods) => void, setWelcome: (welcome: boolean) => void }) => {
  const [animateDisappear, setAnimateDisappear] = useState<boolean>(false)
  return (
    <div className={`w-[400px] ml-auto mr-auto max-w-[400px] ${animateDisappear ? 'animate-ping' : ''}`}>
      <div className='relative flex flex-col'>
        <img src={MXJRDLogo} alt='MXJRD logo :)' className='max-h-screen rounded-lg' />
        <div className='absolute w-full z-1 -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4'>
          <Welcome setMood={setMood} sectionStyles={sectionStyles} setWelcome={setWelcome} setAnimateDisappear={setAnimateDisappear} />
        </div>
      </div>
    </div>
  )
}

export default WelcomeOverlay