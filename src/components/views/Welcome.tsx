import { useEffect } from "react";

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
            <button onClick={waitToSetMood('mathy')} className='text-black bg-white btn'>Mathy</button>
          </div>
          <div>
            <button onClick={waitToSetMood('yazzy')} className='text-black bg-white btn'>Yazzy</button>
          </div>
        </div>
        <div>
          <button onClick={setWelcomeAndMood('none')} className='self-center text-black bg-white btn'>You hate music. :(</button> 
        </div>
      </div>
    </section>
  )
}

export default Welcome
