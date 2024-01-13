import { useEffect, useRef, useState } from 'preact/hooks'
import DrummingHard from '../../assets/DrummingHard.jpg'

import BackgroundBadge from '../common/BackgroundBadge'
import TextScramble from '../../helpers'
import HoneycombBackground from '../common/HoneycombBackground'
import { makeButtonExpand, makeLift, makePressed } from '../../animations'
import Timeline from './AboutMe/timeline/Timeline'

const ScrambleComponent = ({ position }: { position: string }) => {
  const scrambleRef = useRef<HTMLParagraphElement>(null)
  const [idx, setIdx] = useState<number>(0)
  const OccupationTextScrambler = new TextScramble(scrambleRef.current!, [], () => null)

  const occupations = [
    'Software engineer.',
    'Drummer.',
    'Audio engineer.',
    'Mechanic.',
    'Mixologist.',
    'Mentor.'
  ]

  const nextOccupation = async () => await OccupationTextScrambler.setText(occupations[idx])
  const goNextOccupation = () => {
    setIdx((prevIdx) => (prevIdx + 1) % occupations.length)
  }

  useEffect(() => {
    goNextOccupation()
    OccupationTextScrambler.setPromise(nextOccupation)
  }, [])

  useEffect(() => {
    nextOccupation()
    const timer = setTimeout(goNextOccupation, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [OccupationTextScrambler])

  return (
    <p ref={scrambleRef} id='test' className={`${position} text-center text-xl font-roboto-matrix`}></p>
  )
}

const ContactMeButton = () => {
  const [clickedAnimation, setClickedAnimation] = useState<boolean>(false)

  return (
    <a href='mailto:mxjreed@gmail.com'>
      <button
        // style={{ borderTopRightRadius: '2px', borderBottomLeftRadius: '2px' }}
        className={
          `${makeLift} ${clickedAnimation ? makePressed : ''}
          ${makeButtonExpand}
          relative px-5 py-3 border-2 text-raisin-black border-raisin-black bg-white hover:bg-gray-400 hover:text-blue-500
          rounded-br-lg rounded-tl-lg
          after:rounded-br-lg after:rounded-tl-lg
          `
        }
        onClick={() => setClickedAnimation(true)}
        onTransitionEnd={() => setClickedAnimation(false)}
      >
        Contact me.
      </button>
    </a>
  )
}

const Home = ({ sectionStyles }: { sectionStyles: string }) => {
  return (
    <section className={`${sectionStyles} flex-wrap font-poppins px-28 sm:py-4 py-14`}>
      <HoneycombBackground />
      <article className='flex flex-wrap justify-center w-full h-full gap-4 md:gap-12'>
        <BackgroundBadge viewTitle='Welcome.' />
        <div className='flex flex-col gap-1 min-w-[340px]'>
          <p className='text-center'>
            My name is
          </p>
          <h1><span className='text-blue-200'>M</span>a<span className='text-blue-200'>x</span> <span className='text-pink-200'>J</span>. <span className='text-blue-200'>R</span>ee<span className='text-blue-200'>d</span></h1>
          <ScrambleComponent position='relative'/>
          <p className='pt-6 text-center text-dusty-pink'>Play some tunes, enjoy your stay.</p>
          <div className='pt-4'>
            <ContactMeButton />
          </div>
        </div>
        <div className='min-w-[240px]'>
          <img className='w-[240px] h-[240px] rounded-lg object-cover object-right' src={DrummingHard} />
        </div>
        <div className='w-4/5'>
          <Timeline />
        </div>
      </article>
    </section>
  )
}

export default Home