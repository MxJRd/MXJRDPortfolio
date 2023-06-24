import { useEffect, useRef, useState } from 'preact/hooks'
import DrummingHard from '../../assets/DrummingHard.jpg'
import BackgroundBadge from '../common/BackgroundBadge'
import TextScramble from '../../helpers'


const ReceiptsModal = ({ setShowReceipts }: { setShowReceipts: (b: boolean) => void }) => {
  return (
    <div className='bg-black p-4 h-4/5 w-4/5 overflow-y-auto'>
      <div className='flex justify-between content-center items-center text-center'>
        <h1>Click through!</h1>
        <button className='' onClick={() => setShowReceipts(false)}>X</button>
      </div>
      <ul className='flex flex-col flex-1 items-start list-disc'>
        <li>Mentoring over 15 people to get into one of the most competitive career change programs in the world.</li>
        <li>Top 0.5% of players season 4 in League of Legends.</li>
        <li>Built my first car. 1983 Porsche 928, LS1 conversion.</li>
        <li>Number 13 player (number 2 Archer) worldwide Tera 2015.</li>
        <li>Top 3.6% of players in Chess.com puzzles.</li>
        <li>Played alongside huge bands like Red Jumpsuit Apparatus, Drowning Pool and more.</li>
        <li>Self taught audio engineer (you can see if you picked a mood).</li>
        <li>Most popular teacher at Fun Music school.</li>
        <li><a href='https://tcymbals.com/artists/maxwell-j-reed/'>Endorsed drummer</a></li>
      </ul>
    </div>
  )
}

const ScrambleComponent = ({ position }: { position: string }) => {
  const scrambleRef = useRef<HTMLParagraphElement>(null)
  const [idx, setIdx] = useState<number>(0)
  const test = new Promise((resolve) => resolve)
  // @ts-ignore Effect works outside the scope of React. We don't want the component to rerender constantly.
  const OccupationTextScrambler = new TextScramble(scrambleRef.current!, [], test)
  const occupations = [
    'Software engineer.',
    'Drummer.',
    'Audio engineer.',
    'Mechanic.',
    'Mixologist.',
    'Mentor.'
  ]
  const goNextOccupation = () => {
    setIdx((prevIdx) => (prevIdx + 1) % occupations.length)
  }
  
  useEffect(() => {
    goNextOccupation()

  }, [])
  useEffect(() => {
    const nextOccupation = async () => await OccupationTextScrambler.setText(occupations[idx])

    nextOccupation()
    const timer = setTimeout(goNextOccupation, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [OccupationTextScrambler])

  return (
    <p ref={scrambleRef} id='test' className={`${position} text-center text-xl font-roboto-matrix min-w-[340px]`}>{occupations[idx]}</p>
  )
}

const Home = ({ sectionStyles }: { sectionStyles: string }) => {
  return (
    <section className={`h-full w-full ${sectionStyles} flex-wrap font-poppins`}>
      <BackgroundBadge viewTitle={'Welcome.'} />
      <article className='flex w-full h-full flex-wrap justify-center gap-12'>
        <div className='flex flex-col gap-1 min-w-[300px]'>
          <p className='text-center'>
            My name is
          </p>
          <h1><span className='text-blue-200'>M</span>a<span className='text-blue-200'>x</span> <span className='text-pink-200'>J</span>. <span className='text-blue-200'>R</span>ee<span className='text-blue-200'>d</span></h1>
          <ScrambleComponent position='relative'/>
          <p className='text-center pt-6 text-dusty-pink'>Play some tunes, enjoy your stay.</p>
          <div className='pt-4'>
            <a href='mailto:mxjreed@gmail.com'>
              <button style={{ borderTopRightRadius: '2px', borderBottomLeftRadius: '2px' }} className='text-raisin-black px-5 py-3 border-2 border-raisin-black'>Contact me.</button>
            </a>
          </div>
        </div>
        <div>
          <img className='w-[240px] h-[240px] rounded-lg' src={DrummingHard} />
        </div>
      </article>
    </section>
  )
}

export default Home