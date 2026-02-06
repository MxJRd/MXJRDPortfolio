import { useState, useRef } from 'preact/hooks'
import { ReactComponent as DownloadIcon } from '../../../assets/download.svg'
import resume from '../../../assets/resume'
import ResumeCard from './ResumeCard'
import MaxResume from '../../../assets/Max_Reed_CV.pdf'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

const BulletComponent = ({ bulletContent, animationSlide }: { bulletContent: string, animationSlide: string }) => {
  const hasAnimated = useRef(false)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  if (inView && !hasAnimated.current) {
    hasAnimated.current = true
  }

  return (
    <p ref={ref} className={classNames('tracking-wide font-roboto-default', `${hasAnimated.current ? animationSlide : ''}`)}>{bulletContent}</p>
  )
}

const Resume = ({ sectionStyles }: { sectionStyles: string }) => {
  const { companies } = resume ?? {}
  const [company, setCompany] = useState(companies.pacificHealth)
  const { bullets, primer, tagline, name: companyName, title } = company ?? {}

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
        <div className='flex flex-col lg:flex-row lg:items-start'>
          <div className='flex flex-col self-center w-full lg:w-auto gap-4 px-6 py-4 md:self-start lg:min-w-[275px] lg:max-w-[275px]'>
            {
              Object.values(companies).map((companyInfo) => {
                const { name, current } = companyInfo
                return <ResumeCard name={name} current={current} setCompany={setCompany} company={companyInfo} />
              })
            }
          </div>
          <div className='p-1 space-y-2 md:p-4 mb-16 flex-1 lg:min-w-0 lg:max-w-none w-full'>
            <div>
              <p className='pb-2 font-roboto-matrix text-lg text-blue-500'>{companyName + (` ${tagline ?? ''}`)}</p>
              <hr />
            </div>
            <p className='pb-4 font-roboto-matrix text-pink-200'>{title}</p>
            <p className='pb-4 font-roboto-matrix'>{primer}</p>
            {
              bullets.map((bullet, idx) => <BulletComponent bulletContent={bullet} animationSlide={`${idx % 2 === 0 ? 'animate-slide-from-right' : 'animate-slide-from-left'}`} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
