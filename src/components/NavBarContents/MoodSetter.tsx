import capitalize from 'lodash.capitalize'
import { Moods } from '../../app'
import { useState } from 'react'

interface MoodSetterProps {
  mood: Moods
  setMood: (mood: Moods) => void
}

const MoodSetter = ({ mood, setMood }: MoodSetterProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const isMoodMathy = mood === 'mathy'
  const handleHoverMoodSetter = () => setIsHovered(prev => !prev)
  const showMathyOrYazzy = mood === 'mathy' ? 'Yazzy' : 'Mathy'

  return (
    <button onMouseEnter={handleHoverMoodSetter} onMouseLeave={handleHoverMoodSetter} className={`absolute mt-2 mr-4 px-4 py-1 shadow-xl rounded-lg w-fit min-w-[90px] h-8 ${ isMoodMathy ? 'bg-pink-500 hover:bg-blue-500' : 'bg-blue-500 hover:bg-pink-500' } right-0 transition hover:-translate-y-1`} onClick={() => setMood(mood === 'mathy' ? 'yazzy' : 'mathy')}>
      {
        isHovered ? capitalize(showMathyOrYazzy) : capitalize(mood)
      }
    </button>
  )
}

export default MoodSetter
