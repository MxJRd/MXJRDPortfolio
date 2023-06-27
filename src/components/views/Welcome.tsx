import { useEffect, useState } from "react";

interface WelcomeProps {
  sectionStyles: string
  setMood: (mood: string) => void
  setWelcome: (welcome: boolean) => void
  setAnimateDisappear: (animate: boolean) => void
}

const Welcome = ({ sectionStyles, setMood, setWelcome, setAnimateDisappear }: WelcomeProps) => {
  let timeoutToClear: number
  const setWelcomeAndMood = (mood: string) => () => {
    setMood(mood)
    setWelcome(false)
  }
  const waitToSetMood = (mood: string) => async () => {
    setAnimateDisappear(true)
    timeoutToClear = setTimeout(setWelcomeAndMood(mood), 700)
  }
  useEffect(() => {
    return () => {
      timeoutToClear && clearTimeout(timeoutToClear)
    }
  }, [])

  return (
    <section className={`bg-black/0.5 flex flex-col ${sectionStyles} rounded-lg h-full`}>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-center gap-2'>
          <div>
            <button onClick={waitToSetMood('mathy')} className='btn bg-white text-black'>Mathy</button>
          </div>
          <div>
            <button onClick={waitToSetMood('yazzy')} className='btn bg-white text-black'>Yazzy</button>
          </div>
        </div>
        <div>
          <button onClick={setWelcomeAndMood('none')} className='btn bg-white text-black self-center'>You hate music. :(</button> 
        </div>
      </div>
      {/* <p>With enough discipline or aptitude, you can be good at anything. Being incredible requires a large amount of both.</p> */}
    </section>
  )
}

export default Welcome
