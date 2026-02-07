import { ReactComponent as ReactLogo } from '../../../../assets/tech-icons/React-icon.svg'
import { ReactComponent as TSLogo } from '../../../../assets/tech-icons/Typescript_logo_2020.svg'
import { ReactComponent as GraphQLLogo } from '../../../../assets/tech-icons/GraphQLLogo.svg'
import { ReactComponent as RustLogo } from '../../../../assets/tech-icons/RustLogo.svg'
import { ReactComponent as PythonLogo } from '../../../../assets/tech-icons/PythonLogo.svg'
import { ReactComponent as NodeLogo } from '../../../../assets/tech-icons/NodeLogo.svg'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

interface TimelineItemProps { title: string, content: string, date: string, employer: string, current?: boolean, technologies?: string[], nodeColor?: string, lineColor?: string, iconColor?: string, companyKey?: string }

type TechLogoType = 'ts' | 'react' | 'gql' | 'rust' | 'python' | 'node'

const fetchLogo = (logoName: string) => {
  const logoSize = 'w-6 h-6 md:w-5 md:h-5'
  switch(logoName) {
    case 'ts': 
      return <TSLogo className={classNames(logoSize)}/>
    case 'react':
      return <ReactLogo className={classNames(logoSize)}/>
    case 'gql':
      return <GraphQLLogo className={classNames(logoSize)}/>
    case 'rust':
      return <RustLogo className={classNames(logoSize)}/>
    case 'python':
      return <PythonLogo className={classNames(logoSize)}/>
    case 'node':
      return <NodeLogo className={classNames(logoSize)}/>
  }
}

const TimelineItem = ({ title, content, date, employer, current, technologies, nodeColor, lineColor, iconColor, companyKey }: TimelineItemProps) => {
  const navigate = useNavigate()

  const getNodeStyle = () => {
    if (nodeColor) return nodeColor
    if (current) return 'bg-pink-500'
    return 'dark:bg-blue-900'
  }

  const getLineStyle = () => {
    if (lineColor) return lineColor
    if (current) return 'bg-pink-200 dark:bg-pink-700'
    return 'bg-gray-200 dark:bg-gray-700'
  }

  const getIconColor = () => {
    if (iconColor) return iconColor
    return 'text-blue-800 dark:text-blue-300'
  }

  const handleChevronClick = () => {
    if (companyKey) {
      navigate('/services', { state: { companyKey, scrollToDetails: true } })
    }
  }

  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center pt-1.5">
        <div className={`z-10 flex items-center justify-center w-6 h-6 rounded-full ring-white ring-8 dark:ring-gray-900 ${getNodeStyle()} shrink-0`}>
          <svg className={`w-2.5 h-2.5 ${getIconColor()}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <div className={`md:flex w-full h-0.5 ${getLineStyle()}`}></div>
      </div>
      <div className="mt-2 md:pe-8">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-gray-900 text-white">{title}</h3>
              <h2 className='block mb-1 text-sm font-medium leading-none text-gray-900 text-white'>{employer}</h2>
              <time className="block mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
            </div>
            {technologies && technologies.length > 0 && (
              <div className="flex gap-1.5 mt-2">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center">
                    {fetchLogo(tech)}
                  </div>
                ))}
              </div>
            )}
          </div>
          {companyKey && (
            <button 
              onClick={handleChevronClick}
              className="flex-shrink-0 p-1 hover:bg-gray-700/50 rounded transition-colors bg-gray-800/30 self-start"
              aria-label={`View ${employer} details`}
            >
              <svg className="w-4 h-4 text-gray-300 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </li>
  )
}

export default TimelineItem