import { Ref, useState } from 'preact/hooks'
import { ReactComponent as DownloadIcon } from '../../assets/download.svg'
import resume from '../../assets/resume'
import ResumeCard from '../common/ResumeCard'
import { ReactComponent as ReactLogo } from '../../assets/tech-icons/React-icon.svg'
import { ReactComponent as TSLogo } from '../../assets/tech-icons/Typescript_logo_2020.svg'
import { ReactComponent as ViteLogo } from '../../assets/tech-icons/Vitejs-logo.svg'
// import { ReactComponent as AppleLogo } from '../../assets/Apple_logo_black.svg'

const ProfessionalTech = () => {
  return (
    <div className='flex flex-col gap-4 p-4 justify-center items-center'>
      <p className='text-4xl font-bold '>Favorite tech!</p>
      <ul alt='A list of frontend technology logos.' className='flex gap-2'>
        <li>
          <ReactLogo className='w-12 h-12' alt='The React logo.'/>
        </li>
        <li>
          <ViteLogo className='w-12 h-12' alt='The Vite logo.'/>
        </li>
        <li>
          <TSLogo className='w-12 h-12' alt='The Typescript logo.'/>
        </li>
      </ul>
    </div>
  )
}

const Resume = ({ sectionStyles }: { sectionStyles: string }) => {
  const { companies: { firstResonance, apple } } = resume || {}
  const [company, setCompany] = useState(firstResonance)
  const { bullets, primer } = company || {}
  return (
    <section className={`flex ${sectionStyles} justify-center h-screen xl:min-w-[1400px] lg:min-w-[1200px] md:min-w-[1000px] sm:max-w-[1000px]`}>
      <div className='flex flex-col gap-2 text-start rounded-lg w-4/5'>
        <h1 id='services-scroll' className="text-4xl font-bold self-center pt-6 whitespace-nowrap">Recent Experience</h1>
        <div className='flex items-center gap-4 self-center'>
          <p className="text-2xl font-bold">Résumé</p>
            <button className='border-2 p-1 rounded'>
              <a href='../../assets/Max_Reed_SinglePager.pdf' download='Max_Reed_Resume' className='text-raisin-black'><DownloadIcon /></a>
            </button>
        </div>
        <div className='flex lg:flex-row flex-col'>
          <div className='flex px-6 py-4 gap-4 self-start flex-col'>
            <ResumeCard name='First Resonance' setCompany={setCompany} company={firstResonance} />
            <ResumeCard name='Apple' setCompany={setCompany} company={apple} />
          </div>
          <div className='p-4 flex-2 space-y-2'>
            <p className='pb-4 font-roboto-matrix'>{primer}</p>
            {bullets.map((bull: any) => <p className='font-roboto-default tracking-wide'>{bull}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
