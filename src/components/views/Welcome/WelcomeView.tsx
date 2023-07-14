
import WelcomeOverlay from "./WelcomeOverlay"
import { Moods } from "../../../app"
import { useEffect } from "preact/hooks"

const WelcomeView = ({ setWelcomeAndMood, welcome, animateDisappear, setAnimateDisappear }: { setWelcomeAndMood: any, welcome: boolean, animateDisappear: boolean, setAnimateDisappear: any }) => {
  let timeoutToClear: number
  
  const waitToSetMood = (mood: Moods) => async () => {
    setAnimateDisappear(true)
    timeoutToClear = setTimeout(setWelcomeAndMood(mood), 700)
  }
  useEffect(() => {
    return () => {
      timeoutToClear && clearTimeout(timeoutToClear)
    }
  }, [])
  return (
    <div className='flex w-full h-full'>
      <div
        style={{ opacity: 0.8 }}
        className='w-[50%] bg-black hover:bg-pink-500 cursor-pointer'
        onClick={waitToSetMood('mathy')}
      >
        <h1 className='relative top-[40%] text-blue-500'>Mathy</h1>
      </div>
      <div style={{ zIndex: -10 }} className={`absolute top-[25%] left-0 right-0 m-auto w-fit h-fit ${welcome ? '' : 'animate-ping'}`}>
        <WelcomeOverlay animateDisappear={animateDisappear} />
      </div>
      <div
        style={{ opacity: 0.8 }}
        className='w-[50%] bg-black hover:bg-blue-500 cursor-pointer'
        onClick={waitToSetMood('yazzy')}
      >
        <h1 className='relative top-[40%] text-pink-500'>Jazzy</h1>
        <div className='absolute flex -translate-x-[50%] text-white whitespace-prewrap'>
          <h1>Pick a</h1><h1>&nbsp;</h1><h1>mood</h1>
        </div>
      </div>
      <button
        style={{ zIndex: 10 }}
        className='absolute left-0 right-0 m-auto bottom-24 text-white cursor-pointer bg-gray-500 hover:bg-blue-300 px-16 py-6'
        onClick={waitToSetMood('none')}
      >
        You hate music.
      </button>
    </div>
  )
}

export default WelcomeView
