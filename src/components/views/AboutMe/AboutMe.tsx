import ArticleCard from './ArticleCard'
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
import { ReactComponent as RustLogo } from '../../../assets/tech-icons/RustLogo.svg'
import { ReactComponent as PythonLogo } from '../../../assets/tech-icons/PythonLogo.svg'
import { fetchSVGSize } from '../../../helpers'
import classNames from 'classnames'
import Timeline from './timeline/Timeline'
import { SpecialRedirectButton } from '../../common/SpecialRedirectButton'

type Logos = 'ts' | 'react' | 'vite' | 'css' | 'tw' | 'gql' | 'node' | 'js' | 'html' | 'css' | 'rust' | 'python'

const fetchLogo = (logoName: string, size: string) => {
  const logoSize = fetchSVGSize(size)
  const responsiveSize = 'h-16 md:h-14'
  switch(logoName) {
    case 'ts': 
      return <TSLogo className={classNames(logoSize, responsiveSize)}/>
    case 'react':
      return <ReactLogo className={classNames(logoSize, responsiveSize)}/>
    case 'vite':
      return <ViteLogo className={classNames(logoSize, responsiveSize)}/>
    case 'css':
      return <CSSLogo className={classNames(logoSize, responsiveSize)}/>
    case 'tw':
      return <TailwindLogo className={classNames(logoSize, responsiveSize)}/>
    case 'js':
      return <JSLogo className={classNames(logoSize, responsiveSize, 'rounded-md')}/>
    case 'gql':
      return <GraphQLLogo className={classNames(logoSize, responsiveSize)}/>
    case 'html':
      return <HTMLLogo className={classNames(logoSize, responsiveSize)} />
    case 'node':
      return <NodeLogo className={classNames(logoSize, responsiveSize)}/>
    case 'rust':
      return <RustLogo className={classNames(logoSize, responsiveSize)}/>
    case 'python':
      return <PythonLogo className={classNames(logoSize, responsiveSize)}/>
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
    <div className='flex flex-col items-center justify-center gap-4 pt-6 pb-6'>
      <ul alt='A list of frontend technology logos. These directly correlate with things I have used professionally.' className='flex flex-col items-center gap-4 pr-12 sm:p-4'>
        <li className='flex gap-2'>
          <LogoItem logoName='rust' size='large'/>
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
          <LogoItem logoName='python' size='large'/>
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
      <div className='mt-6'>
        <SpecialRedirectButton title='Take a peek at my github' to='https://github.com/mxjrd' newTab />
      </div>
      {/* <button >
        <a className='text-white hover:text-slate-100' href="https://github.com/mxjrd" target='_blank'>Take a peek at my github</a>
      </button> */}
      <ProfessionalTech />
      <div className='w-4/5'>
        <Timeline />
      </div>
      <div className='mb-16'>
        <ArticleCard title={achievements.title} content={achievements.content}/>
      </div>
      {/* <ArticleCard title={'Recent Jams'} content={'Take a peek at what I\'m listening to :)'} /> */}
    </section>
  )
}

export default AboutMe
