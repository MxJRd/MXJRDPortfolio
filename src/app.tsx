import { useState } from 'preact/hooks'
import { Suspense, lazy } from 'preact/compat';
import '../src/app.css'
import Home from './components/views/Home'
import NavBar, { CollapsedNavBar } from './components/NavBarContents/NavBar'
import AboutMe from './components/views/AboutMe'
import Accomplishments from './components/views/Achievements'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MusicPlayer from './components/Music/MusicPlayer'
// import Services from './components/views/Services'
import WelcomeOverlay from './components/views/WelcomeOverlay'
import Socials from './components/NavBarContents/Socials'
const Services= lazy(() => import('./components/views/Services'))

function App() {
  const sectionStyles = "flex align-center w-full h-full p-16"
  const [mood, setMood] = useState<string>('none')
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [welcome, setWelcome] = useState<boolean>(true)
  return (
    <>
      {
        welcome
          ? <WelcomeOverlay sectionStyles={sectionStyles} setMood={setMood} setWelcome={setWelcome} />
          : (
            <Router>
              <main id='test' className='fixed flex flex-col items-center justify-between h-full w-full max-w-screen flex-1 text-white'>
                  {/* <CollapsedNavBar setCollapsed={setCollapsed} /> */}
                  <NavBar setCollapsed={setCollapsed} />
                  <Routes>
                    <Route path='/' element={<Home sectionStyles={sectionStyles} setMood={setMood} setWelcome={setWelcome} />} />
                    <Route path='/about' element={<AboutMe sectionStyles={sectionStyles} />} />
                    <Route path='/achievements' element={<Accomplishments sectionStyles={sectionStyles} />} />
                    <Route path='/services' element={
                      <Suspense fallback={<div>loading...</div>}>
                        <Services sectionStyles={sectionStyles} />
                      </Suspense>
                    } />
                    {/* <Route path='/resume' element={<Resume sectionStyles={sectionStyles} />} /> */}
                  </Routes>
                  <Socials stack={'flex-col'} />
                  {mood !== 'none' ? <MusicPlayer mood={mood} /> : null}
                  {/* <MusicAnalyzer /> */}
              </main>  
            </Router>
        )}
    </>
  )
}

export default App
