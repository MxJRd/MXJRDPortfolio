import { useState } from 'preact/hooks'
import '../src/app.css'
import PrimaryView from './components/views/PrimaryView'
import WelcomeView from './components/views/Welcome/WelcomeView'

export type Moods = 'yazzy' | 'mathy' | 'none'

const getMoodGradient = (args: { mood: string }): string => {
  const { mood } = args ?? {}
  const hoverMathyGradient = 'linear-gradient(to bottom right, #242124 50%, #FF00FF 300%) 100% no-repeat'
  const hoverYazzyGradient = 'linear-gradient(to bottom right, #242124 50%, #00CCFF 300%) 100% no-repeat'
  return mood === 'mathy' ? hoverMathyGradient : hoverYazzyGradient
}

const getWelcomeGradient = (args: { welcome: boolean, moodGradient: string }) => {
  const { welcome, moodGradient } = args
  const primaryGradient = moodGradient

  return welcome ? '' : primaryGradient
}

function App() {
  const [mood, setMood] = useState<Moods>('none')
  const [welcome, setWelcome] = useState<boolean>(true)
  const sectionStyles = 'flex md:align-center w-full h-full md:p-16 p-4'
  const [animateDisappear, setAnimateDisappear] = useState<boolean>(false)

  const moodGradient = getMoodGradient({ mood })
  const isWelcomeGradient = getWelcomeGradient({ welcome, moodGradient })

  const setWelcomeAndMood = (mood: Moods) => () => {
    setMood(mood)
    setWelcome(false)
  }

  return (
    <div style={{ background: isWelcomeGradient }} className={'w-full h-full'}>
      {
        welcome
          ? (
            <WelcomeView welcome={welcome} setWelcomeAndMood={setWelcomeAndMood} animateDisappear={animateDisappear} setAnimateDisappear={setAnimateDisappear}/>
          )
          : (
            <PrimaryView sectionStyles={sectionStyles} mood={mood} />
        )}
    </div>
  )
}

export default App
