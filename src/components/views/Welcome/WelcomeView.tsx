
import WelcomeOverlay from "./WelcomeOverlay"
import { Moods } from "../../../app"
import { useEffect, useState } from "preact/hooks"
import classNames from "classnames"

interface WelcomeViewProps {
  welcome: boolean, animateDisappear: boolean
  setWelcomeAndMood: (mood: Moods) => () => void
  setAnimateDisappear: (animate: boolean) => void
}

const SEOText = ({ content }: { content: string }): JSX.Element => {
  return <p className='absolute text-transparent'>{content}</p>
}

const WelcomeView = ({ setWelcomeAndMood, welcome, animateDisappear, setAnimateDisappear }: WelcomeViewProps) => {
  let timeoutToClear: number
  const [selection, setSelection] = useState<boolean>(false)
  const waitToSetMood = (mood: Moods) => async () => {
    setSelection(true)
    setAnimateDisappear(true)
    timeoutToClear = setTimeout(setWelcomeAndMood(mood), 700)
  }
  useEffect(() => {
    return () => {
      timeoutToClear && clearTimeout(timeoutToClear)
    }
  }, [])
  const fadeItem = `transition ${selection ? 'opacity-0 duration-500' : 'opacity-100'}`
  return (
    <div className='flex w-full h-full font-poppins overflow-hidden'>
      <SEOText content="Hello! My name is Max Reed and I'm a web developer and frontend expert. Welcome to my website." />
      <div
        style={{ opacity: 0.8 }}
        className='w-[50%] bg-black hover:bg-pink-500 cursor-pointer'
        onClick={waitToSetMood('mathy')}
      >
        <h1 className={classNames('relative top-[40%] text-blue-500 font-semibold', `${selection ? 'animate-slide-to-right' : ''}`)}>Mathy</h1>
      </div>
      <div style={{ zIndex: -10 }} className={`absolute top-[25%] left-0 right-0 m-auto w-fit h-fit ${welcome ? '' : 'animate-ping'}`}>
        <WelcomeOverlay animateDisappear={animateDisappear} />
      </div>
      <div
        style={{ opacity: 0.8 }}
        className='w-[50%] bg-black hover:bg-blue-500 cursor-pointer'
        onClick={waitToSetMood('yazzy')}
      >
        <h1 className={`relative top-[40%] text-pink-500 font-semibold ${selection ? 'animate-slide-to-left' : ''}`}>Jazzy</h1>
        <div className='absolute flex -translate-x-[50%] text-white whitespace-prewrap'>
          <h1 className={`whitespace-nowrap ${fadeItem}`}>Pick a</h1><h1>&nbsp;</h1><h1 className={`${fadeItem}`}>mood</h1>
        </div>
      </div>
      <button
        style={{ zIndex: 10 }}
        className={`absolute left-0 right-0 m-auto bottom-12 md:bottom-24 text-white cursor-pointer bg-gray-500 hover:bg-purple-500 md:px-16 md:py-6 px-3 py-6 font-roboto-matrix max-w-[320px] whitespace-nowrap ${fadeItem}`}
        onClick={waitToSetMood('none')}
      >
        You hate my music. :(
      </button>
    </div>
  )
}

export default WelcomeView
