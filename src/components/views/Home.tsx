import { useEffect, useRef, useState } from 'preact/hooks'
import DrummingHard from '../../assets/DrummingHard.jpg'

import BackgroundBadge from '../common/BackgroundBadge'
import TextScramble from '../../helpers'
import classNames from 'classnames'
import HoneycombBackground from '../common/HoneycombBackground'


// const ReceiptsModal = ({ setShowReceipts }: { setShowReceipts: (b: boolean) => void }) => {
//   return (
//     <div className='w-4/5 p-4 overflow-y-auto bg-black h-4/5'>
//       <div className='flex items-center content-center justify-between text-center'>
//         <h1>Click through!</h1>
//         <button className='' onClick={() => setShowReceipts(false)}>X</button>
//       </div>
//       <ul className='flex flex-col items-start flex-1 list-disc'>
//         <li>Mentoring over 15 people to get into one of the most competitive career change programs in the world.</li>
//         <li>Top 0.5% of players season 4 in League of Legends.</li>
//         <li>Built my first car. 1983 Porsche 928, LS1 conversion.</li>
//         <li>Number 13 player (number 2 Archer) worldwide Tera 2015.</li>
//         <li>Top 3.6% of players in Chess.com puzzles.</li>
//         <li>Played alongside huge bands like Red Jumpsuit Apparatus, Drowning Pool and more.</li>
//         <li>Self taught audio engineer (you can see if you picked a mood).</li>
//         <li>Most popular teacher at Fun Music school.</li>
//         <li><a href='https://tcymbals.com/artists/maxwell-j-reed/'>Endorsed drummer</a></li>
//       </ul>
//     </div>
//   )
// }

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
        style={{ borderTopRightRadius: '2px', borderBottomLeftRadius: '2px' }}
        className={
          classNames(
            'px-5 py-3 border-2 text-raisin-black border-raisin-black hover:bg-gray-400 hover:text-blue-500',
            `${clickedAnimation ? 'animate-clickPulse' : ''}`
          )
        }
        onClick={() => setClickedAnimation(true)}
        onAnimationEnd={() => setClickedAnimation(false)}
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
      </article>
    </section>
  )
}

export default Home