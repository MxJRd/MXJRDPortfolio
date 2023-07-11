import ArticleCard from '../common/ArticleCard'
import BackgroundBadge from '../common/BackgroundBadge';
import aboutStrings from './aboutStrings'

const AboutMe = (): JSX.Element => {
  const { about, achievements } = aboutStrings
  return (
    <section className={`flex flex-col items-center max-sm:p-6 w-full h-full overflow-auto pt-1`}>
      <BackgroundBadge viewTitle={'About.'} />
      <ArticleCard title={about.title} content={about.content}/>
      <ArticleCard title={achievements.title} content={achievements.content}/>
      <ArticleCard title={'Recent Jams'} content={'Take a peek at what I\'m listening to :)'} />
    </section>
  )
}

export default AboutMe
