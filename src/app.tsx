import { useState } from 'preact/hooks'
import '../src/app.css'
// import WelcomeOverlay from './components/views/Welcome/WelcomeOverlay'
import PrimaryView from './components/views/PrimaryView';
import classNames from 'classnames';
import WelcomeControls from './components/views/Welcome/WelcomeControls';
import WelcomeView from './components/views/Welcome/WelcomeView';

export type Moods = 'yazzy' | 'mathy' | 'none'

const getMoodGradient = (mood: string) => {
  const hoverMathyGradient = 'linear-gradient(to right, #242124 50%, #FF00FF 300%) 100% no-repeat'
  const hoverYazzyGradient = 'linear-gradient(to right, #242124 50%, #FF00FF 300%) 100% no-repeat'

 // mood ? hoverMathyGradient : hoverYazzyGradient
  return ''
}

const getWelcomeGradient = (args: { welcome: boolean, welcomeGradient: string }) => {
  const { welcome, welcomeGradient } = args
  const primaryGradient = 'linear-gradient(to bottom right, #242124 60%, #FF00FF 300%) 100% no-repeat'

  return welcome ? welcomeGradient : primaryGradient
}

function App() {
  const [mood, setMood] = useState<Moods>('none')
  const [welcome, setWelcome] = useState<boolean>(true)
  const sectionStyles = 'flex md:align-center w-full h-full md:p-16 p-4'
  const [animateDisappear, setAnimateDisappear] = useState<boolean>(false)

  const welcomeGradient = getMoodGradient(mood)
  const isWelcomeGradient = getWelcomeGradient({ welcome, welcomeGradient })

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
