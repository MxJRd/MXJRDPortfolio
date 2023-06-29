import { JobContentType } from "../../assets/resume"
import { ReactComponent as ClosedChevronIcon } from '../../assets/chevron-right.svg'
import Badge from "./Badge"

const TechList = ({ technologies }: { technologies: Array<string> } ) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {technologies.map(tech => <Badge content={tech} />)}
    </div>
  )
}

export const BulletList = ({ bullets }: { bullets: Array<string> }) => {
  return (
    <div className='flex flex-col max-h-[200px] overflow-y-auto'>
      {
        bullets?.map(item => <p className='pt-2'>{item}</p>)
      }
    </div>
  )
}

const ResumeCard = ({ name, setCompany, company, logo }: { name: string, setCompany: (company: JobContentType) => void, company: JobContentType, logo?: any }) => {
  const { technologies } = company || {}
  return (
    <article className='bg-[#CCCCCC] rounded-md p-4 shadow-lg shadow-inner flex-1'>
      <div className='relative w-6 h-6 rotate-45 -translate-y-7 xl:translate-x-68 bg-raisin-black'></div>
      <div className='relative'>
        <div className='flex flex-row items-center gap-4 justify-between -translate-y-4 justify-center relative'>
          <div className='flex'>
            {logo && logo}
            <p className="text-2xl font-bold">{name}</p>
          </div>
          <button className='p-1 text-raisin-black' onClick={() => setCompany(company)}><ClosedChevronIcon /></button>
        </div>
        <TechList technologies={technologies} />
      </div>
    </article>
  )
}

export default ResumeCard
