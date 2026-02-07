import TimelineItem from "./TimelineItem"
interface TimelineItem { title: string, date: string, employer: string, current?: boolean, technologies?: string[], companyKey?: string }

// Color progression utility: programmatic gradient from green to blue
const getProgressionColors = (index: number) => {
  // Programmatic color progression: green-300 → cyan-500 → blue-900
  // As we progress, green decreases and blue increases, meeting in the middle
  const nodeColors = [
    { bg: 'bg-green-300', line: 'bg-green-200' },      // Green start - earliest
    { bg: 'bg-teal-400', line: 'bg-teal-300' },        // Green-blue blend
    { bg: 'bg-cyan-500', line: 'bg-cyan-400' },        // Middle - balanced
    { bg: 'bg-blue-700', line: 'bg-blue-600' },        // Blue emerging
    { bg: 'bg-blue-900', line: 'bg-blue-800' }         // Deep blue - latest
  ]
  
  // Calendar icon colors: inverse progression (blue → green) with contrast
  const iconColors = [
    'text-blue-900 dark:text-blue-200',         // Dark blue on green bg
    'text-blue-800 dark:text-blue-300',         // Blue on teal bg
    'text-blue-100 dark:text-cyan-900',         // Light blue on cyan bg (contrast!)
    'text-teal-200 dark:text-teal-700',         // Light teal on blue bg
    'text-green-200 dark:text-green-700'        // Light green on dark blue bg
  ]
  
  const colorIndex = Math.min(index, nodeColors.length - 1)
  
  return {
    nodeColor: nodeColors[colorIndex].bg,
    lineColor: nodeColors[colorIndex].line,
    iconColor: iconColors[colorIndex]
  }
}

const nonTechnicalJobs: TimelineItem[] = [
  {
    title: 'Music Teacher',
    employer: 'Fun Music / Self',
    date: '2015 - Present',
    current: true
  },
  {
    title: 'Chocolatier',
    employer: 'Godiva',
    date: '2017 - 2018'
  },
  {
    title: 'Insurance Agent',
    employer: 'Aflac/Colonial Life',
    date: '2016-2018'
  },
  {
    title: 'Mechanic',
    employer: 'USPS',
    date: '2019 - 2021'
  }
]

const technicalJobs: TimelineItem[] = [
  {
    title: 'Software Engineer',
    employer: 'Apple',
    date: '2021',
    current: false,
    technologies: ['react', 'ts', 'node'],
    companyKey: 'apple'
  },
  {
    title: 'Frontend Engineer',
    employer: 'First Resonance',
    date: '2021 - 2022',
    current: false,
    technologies: ['react', 'ts', 'gql'],
    companyKey: 'firstResonance'
  },
  {
    title: 'Lead Frontend Engineer',
    employer: 'ComplyAI',
    date: '2022 - 2024',
    current: false,
    technologies: ['react', 'ts', 'python'],
    companyKey: 'complyAI'
  },
  {
    title: 'Senior Software Engineer',
    employer: 'Persistent Technologies',
    date: '2024 - 2025',
    current: false,
    technologies: ['ts', 'react', 'python'],
    companyKey: 'persistentTechnologies'
  },
  {
    title: 'Senior Software Engineer',
    employer: 'Pacific Health',
    date: '2025 - Present',
    current: true,
    technologies: ['rust', 'react', 'ts'],
    companyKey: 'pacificHealth'
  }
]

const Timeline = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-lg font-semibold text-center mb-4 text-pink-400">Non-Technical Experience</h4>
        <ol className="items-center justify-center flex-wrap md:flex">
          {
            nonTechnicalJobs.map(({ title, date, employer, current }) => 
              <TimelineItem title={title} date={date} employer={employer} current={current} />
            )
          }
        </ol>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-center mb-4 text-blue-400">Technical Experience</h4>
        <ol className="items-center justify-center flex-wrap md:flex">
          {
            technicalJobs.map(({ title, date, employer, current, technologies, companyKey }, index) => {
              const colors = getProgressionColors(index)
              return (
                <TimelineItem 
                  key={employer}
                  title={title} 
                  date={date} 
                  employer={employer} 
                  current={current} 
                  technologies={technologies}
                  nodeColor={colors.nodeColor}
                  lineColor={colors.lineColor}
                  iconColor={colors.iconColor}
                  companyKey={companyKey}
                />
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default Timeline