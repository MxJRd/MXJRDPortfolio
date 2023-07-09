import { useState } from 'preact/hooks'
import '../src/app.css'
// import Services from './components/views/Services'
import WelcomeOverlay from './components/views/WelcomeOverlay'
import PrimaryView from './components/views/PrimaryView';


function App() {
  const [mood, setMood] = useState<string>('none')
  const [welcome, setWelcome] = useState<boolean>(true)
  const sectionStyles = "flex md:align-center w-full h-full md:p-16 p-4"
  return (
    <>
      {
        welcome
          ? (
            <div className={`sticky left-0 right-0 top-64 ${welcome ? '' : 'animate-ping'}`}>
              <WelcomeOverlay sectionStyles={sectionStyles} setMood={setMood} setWelcome={setWelcome} />
            </div>
          )
          : (
            <PrimaryView sectionStyles={sectionStyles} mood={mood} />
        )}
    </>
  )
}

export default App
