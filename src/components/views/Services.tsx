import { useRef, useState } from 'preact/hooks'
import BackgroundBadge from '../common/BackgroundBadge'
import MentorshipPic from '../../assets/services-pics/CollaboratingTeamwork.png'
import EmploymentPic from '../../assets/services-pics/GuyLookingAtCity.png'
import FreelancePic from '../../assets/services-pics/LaptopDarkRoom.png'
import ServicesCard from '../common/ServicesCard'
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg'
import Resume from './Resume'

export const ReceiptsModal = ({ setShowReceipts }: { setShowReceipts: (b: boolean) => void }) => {
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

const Services = ({ sectionStyles }: { sectionStyles: string }) => {
  const scrollToResumeRef = useRef<HTMLParagraphElement>(null)
  const executeScroll = () => scrollToResumeRef.current!.scrollIntoView({
    behavior: 'smooth'
  })
  return (
    <section className={`flex flex-col items-center ${sectionStyles} overflow-scroll`}>
      <BackgroundBadge viewTitle={'Services.'} />
        <ul className='flex w-3/5 items-start justify-between gap-8 h-full flex-2'>
          <ServicesCard title='Employment.' content='Download my resume here!' image={EmploymentPic}/>
          <ServicesCard title='Freelance.' content="Let's build something together." image={FreelancePic}/>
          <ServicesCard title='Mentorship.' content='I love teaching!' image={MentorshipPic}/>
        </ul>
        <div className='flex flex-col gap-2 p-12 items-center font-poppins flex-1 h-4/5'>
          <p>Whatever it is you need, I've got your back.</p>
          <a href='mailto:mxjreed@gmail.com'>
            <button className='text-steel-blue'>Contact me.</button>
          </a>
          <div className='cursor p-6' onClick={executeScroll} >
            <ChevronDown />
          </div>
          <Resume sectionStyles={sectionStyles} scrollToRef={scrollToResumeRef}/>
        </div>
    </section>
  )
}

export default Services
