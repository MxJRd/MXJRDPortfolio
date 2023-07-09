import { JobContentType } from "../../assets/resume"
import Badge from "./Badge"
import CustomButton from "./CustomButton"

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
    <article id='clip-corners' className='flex flex-col bg-gray-500 rounded-b-md rounded-tl-md w-full overflow-hidden p-4 min-w-[275px] max-w-[275px] self-center'>
      <div className='relative'>
        <div className='relative flex flex-row items-center justify-center justify-between gap-4 -translate-y-4 pt-3'>
          <div className='flex'>
            {logo && logo}
            <p className="text-2xl font-bold">{name}</p>
          </div>
          <CustomButton iconName='right-chevron' color='black' size='small' clickHandler={() => setCompany(company)} />
        </div>
        <TechList technologies={technologies} />
      </div>
    </article>
  )
}

export default ResumeCard
