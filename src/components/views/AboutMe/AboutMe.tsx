import ArticleCard from '../../common/ArticleCard'
import BackgroundBadge from '../../common/BackgroundBadge'
import HoneycombBackground from '../../common/HoneycombBackground'
import aboutStrings from './aboutStrings'
import { ReactComponent as ReactLogo } from '../../../assets/tech-icons/React-icon.svg'
import { ReactComponent as TSLogo } from '../../../assets/tech-icons/Typescript_logo_2020.svg'
import { ReactComponent as ViteLogo } from '../../../assets/tech-icons/Vitejs-logo.svg'
import { ReactComponent as CSSLogo } from '../../../assets/tech-icons/cssLogo.svg'
import { ReactComponent as TailwindLogo } from '../../../assets/tech-icons/tailwindlogo.svg'
import { ReactComponent as JSLogo } from '../../../assets/tech-icons/jsLogo.svg'
import { ReactComponent as GraphQLLogo } from '../../../assets/tech-icons/GraphQLLogo.svg'
import { ReactComponent as NodeLogo } from '../../../assets/tech-icons/NodeLogo.svg'
import { ReactComponent as HTMLLogo } from '../../../assets/tech-icons/htmlLogo.svg'
import { fetchSVGSize } from '../../../helpers'
import classNames from 'classnames'

type Logos = 'ts' | 'react' | 'vite' | 'css' | 'tw' | 'gql' | 'node' | 'js' | 'html' | 'css'

const fetchLogo = (logoName: string, size: string) => {
  const logoSize = fetchSVGSize(size)
  switch(logoName) {
    case 'ts': 
      return <TSLogo className={classNames(logoSize, 'h-12')}/>
    case 'react':
      return <ReactLogo className={classNames(logoSize, 'h-12')}/>
    case 'vite':
      return <ViteLogo className={classNames(logoSize, 'h-12')}/>
    case 'css':
      return <CSSLogo className={classNames(logoSize, 'h-12')}/>
    case 'tw':
      return <TailwindLogo className={classNames(logoSize, 'h-12')}/>
    case 'js':
      return <JSLogo className={classNames(logoSize, 'h-12 rounded-md')}/>
    case 'gql':
      return <GraphQLLogo className={classNames(logoSize, 'h-12')}/>
    case 'html':
      return <HTMLLogo className={classNames(logoSize, 'h-12')} />
    case 'node':
      return <NodeLogo className={classNames(logoSize, 'h-12')}/>
  }
}

const LogoItem = ({ logoName, size }: {logoName: Logos, size: string }) => {
  const logo = fetchLogo(logoName, size)
  return (
    <>
      {logo}
    </>
  )
}

const ProfessionalTech = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-12'>
      <ul alt='A list of frontend technology logos. These directly correlate with things I have used professionally.' className='flex flex-col items-center gap-4 pr-12 sm:p-4'>
        <li className='flex gap-2'>
          <LogoItem logoName='react' size='large'/>
          <LogoItem logoName='ts' size='large'/>
        </li>
        <li className='flex gap-2'>
          <LogoItem logoName='html' size='large'/>
          <LogoItem logoName='css' size='large'/>
          <LogoItem logoName='js' size='large'/>
          <LogoItem logoName='gql' size='large'/>
        </li>
        <li className='flex gap-2'>
          <LogoItem logoName='vite' size='large'/>
          <LogoItem logoName='tw' size='large'/>
        </li>
      </ul>
    </div>
  )
}

const AboutMe = (): JSX.Element => {
  const { about, achievements } = aboutStrings
  return (
    <section alt='This is the about me section.' className={`flex flex-col items-center max-sm:p-6 w-full h-full overflow-y-auto overflow-x-hidden pt-1`}>
      <HoneycombBackground />
      <BackgroundBadge viewTitle={'About.'} />
      <ArticleCard title={about.title} content={about.content}/>
      <ProfessionalTech />
      <div className='mb-16'>
        <ArticleCard title={achievements.title} content={achievements.content}/>
      </div>
      {/* <ArticleCard title={'Recent Jams'} content={'Take a peek at what I\'m listening to :)'} /> */}
    </section>
  )
}

export default AboutMe
