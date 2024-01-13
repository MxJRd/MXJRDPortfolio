import { useState } from 'preact/hooks'
import { ReactComponent as DownloadIcon } from '../../../assets/download.svg'
import resume from '../../../assets/resume'
import ResumeCard from './ResumeCard'
import MaxResume from '../../../assets/Max_Reed_CV.pdf'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

const BulletComponent = ({ bulletContent, animationSlide }: { bulletContent: string, animationSlide: string }) => {
  const { ref, inView } = useInView({
    threshold: 0
  })

  return (
    <p ref={ref} className={classNames('tracking-wide font-roboto-default', `${inView && animationSlide}`)}>{bulletContent}</p>
  )
}

const Resume = ({ sectionStyles }: { sectionStyles: string }) => {
  const { companies: { firstResonance, apple, complyAI, creatrify } } = resume || {}
  const [company, setCompany] = useState(complyAI)
  const { bullets, primer } = company || {}
  return (
    <section className={`flex ${sectionStyles} justify-center h-screen xl:min-w-[1400px] lg:min-w-[1200px] md:min-w-[1000px] sm:max-w-[1000px]`}>
      <div className='flex flex-col w-4/5 gap-2 rounded-lg text-start'>
        <h1 id='services-scroll' className='self-center pt-6 text-4xl font-bold whitespace-nowrap'>
          Recent Experience
        </h1>
        <div className='flex items-center self-center gap-4'>
          <p className='text-2xl font-bold'>Résumé</p>
            <button className='p-1 border-2 rounded bg-white'>
              <a href={MaxResume} download='Max_Reed_Resume' className='text-raisin-black'><DownloadIcon /></a>
            </button>
        </div>
        <span className='text-lg text-pink-400 self-center'>(Pink is current workplace)</span>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col self-center w-full gap-4 px-6 py-4 md:self-start'>
            <ResumeCard current name='ComplyAI' setCompany={setCompany} company={complyAI} />
            <ResumeCard current name='Creatrify' setCompany={setCompany} company={creatrify} />
            <ResumeCard name='First Resonance' setCompany={setCompany} company={firstResonance} />
            <ResumeCard name='Apple' setCompany={setCompany} company={apple} />
          </div>
          <div className='p-1 space-y-2 md:p-4 flex-2 mb-16'>
          <p className='pb-4 font-roboto-matrix text-lg text-blue-500'>{company.name}</p>
            <p className='pb-4 font-roboto-matrix'>{primer}</p>
            {bullets.map((bull, idx) => <BulletComponent bulletContent={bull} animationSlide={`${idx % 2 === 0 ? 'animate-slide-from-right' : 'animate-slide-from-left'}`}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
