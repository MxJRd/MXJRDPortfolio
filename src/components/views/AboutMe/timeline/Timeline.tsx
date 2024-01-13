import TimelineItem from "./TimelineItem"
interface TimelineItem { title: string, content: string, date: string, employer: string, current?: boolean }
const occupations: TimelineItem[] = [
  {
    title: 'Music Teacher',
    employer: 'Fun Music / Self',
    date: '2015 - Present',
    content: 'Taught music classes to all ages.',
    current: true
  },
  {
    title: 'Chocolatier',
    employer: 'Godiva',
    date: '2017 - 2018',
    content: 'Made and sold chocolates.'
  },
  {
    title: 'Insurance Agent',
    employer: 'Aflac/Colonial Life',
    date: '2016-2018',
    content: 'Did insurance things.'
  },
  {
    title: 'Mechanic',
    employer: 'USPS',
    date: '2019 - 2021',
    content: 'Maintained machines.'
  },
  {
    title: 'Software Engineer',
    employer: 'USPS',
    date: '2021 - Present',
    content: 'I build cool software!',
    current: true
  }
]

const Timeline = () => {
  return (
    <ol className="items-center justify-center flex-wrap md:flex">
      {
        occupations.map(({ title, date, content, employer, current }) => <TimelineItem title={title} date={date} content={content} employer={employer} current={current} />)
      }
    </ol>
  )
}

export default Timeline