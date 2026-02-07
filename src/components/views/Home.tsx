import { useEffect, useRef, useState } from 'preact/hooks'
import DrummingHard from '../../assets/DrummingHard.jpg'
import DrummingHard2 from '../../assets/DrummingHard2.jpg'
import Wedding from '../../assets/Wedding.jpg'

import BackgroundBadge from '../common/BackgroundBadge'
import TextScramble from '../../helpers'
import HoneycombBackground from '../common/HoneycombBackground'
import { SpecialRedirectButton } from '../common/SpecialRedirectButton'
import Carousel from '../common/Carousel'

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
            <SpecialRedirectButton title='Contact me.' to='mailto:mxjreed@gmail.com' />
          </div>
        </div>
        <div className='min-w-[240px] w-[240px] h-[240px]'>
          <Carousel 
            images={[DrummingHard, DrummingHard2, Wedding]} 
            interval={2000}
            className='w-[240px] h-[240px]'
          />
        </div>
      </article>
    </section>
  )
}

export default Home