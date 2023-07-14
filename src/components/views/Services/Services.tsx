import BackgroundBadge from '../../common/BackgroundBadge'
import MentorshipPic from '../../../assets/services-pics/CollaboratingTeamwork.png'
import EmploymentPic from '../../../assets/services-pics/GuyLookingAtCity.png'
import FreelancePic from '../../../assets/services-pics/LaptopDarkRoom.png'
import ServicesCard from '../../common/ServicesCard'
import { ReactComponent as ChevronDown } from '../../../assets/chevron-down.svg'
import Resume from './Resume'
import HoneycombBackground from '../../common/HoneycombBackground'

export const ReceiptsModal = ({ setShowReceipts }: { setShowReceipts: (b: boolean) => void }) => {
  return (
    <div className='w-4/5 p-4 overflow-y-auto bg-black h-4/5'>
      <div className='flex items-center content-center justify-between text-center'>
        <h1>Click through!</h1>
        <button className='' onClick={() => setShowReceipts(false)}>X</button>
      </div>
      <ul className='flex flex-col items-start flex-1 list-disc'>
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
  return (
    <section className={`flex flex-col ${sectionStyles} overflow-y-auto overflow-x-hidden`}>
      <HoneycombBackground />
      <BackgroundBadge viewTitle={'Services.'} />
      <div className='flex flex-col py-14 md:p-4'>
        <ul className='flex flex-col sm:flex-row h-full gap-2 xl:gap-8 lg:gap-6 md:gap-4 self-center max-w-[250px] sm:max-w-full pb-8'>
          <ServicesCard title='Employment' content='Download my resume here!' image={EmploymentPic}/>
          <ServicesCard title='Freelance' content="Let's build something together." image={FreelancePic}/>
          <ServicesCard title='Mentorship' content='I love teaching!' image={MentorshipPic}/>
        </ul>
        <div className='flex flex-col items-center invisible p-12 md:visible'>
          <p className='text-2xl font-poppins text-semibold'>Scroll to see my resume!</p>
          <a href='#services-scroll' className='cursor text-fuchsia' >
            <ChevronDown style={{ width: '36px', height: '36px' }} />
          </a>
        </div>
      </div>
        <div className='flex flex-col items-center flex-1 gap-2 md:p-12 font-poppins h-4/5'>
          <Resume sectionStyles={sectionStyles} />
        </div>
    </section>
  )
}

export default Services