import ArticleCard from "../common/ArticleCard"
import BackgroundBadge from "../common/BackgroundBadge";
import aboutStrings from "./aboutStrings"

const AboutMe = () => {
  const { about, achievements } = aboutStrings
  return (
    <section className={`flex flex-col md:items-center sm:items-end max-sm:pl-[32vw] w-full h-full overflow-auto pt-1`}>
      <BackgroundBadge viewTitle={'About.'} />
      <ArticleCard title={about.title} content={about.content}/>
      <ArticleCard title={achievements.title} content={achievements.content}/>
      <ArticleCard title={'Recent Jams'} content={'Take a peek at what I\'m listening to :)'} />
    </section>
  )
}

export default AboutMe
