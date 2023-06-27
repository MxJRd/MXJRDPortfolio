import { useState } from 'preact/hooks'
import '../src/app.css'
// import Services from './components/views/Services'
import WelcomeOverlay from './components/views/WelcomeOverlay'
import PrimaryView from './components/views/PrimaryView';


function App() {
  const [mood, setMood] = useState<string>('none')
  const [welcome, setWelcome] = useState<boolean>(true)
  const sectionStyles = "flex align-center w-full h-full p-16"
  return (
    <>
      {
        welcome
          ? <WelcomeOverlay sectionStyles={sectionStyles} setMood={setMood} setWelcome={setWelcome} />
          : (
            <PrimaryView mood={mood} setMood={setMood} setWelcome={setWelcome} sectionStyles={sectionStyles} />
        )}
    </>
  )
}

export default App
