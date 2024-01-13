import capitalize from 'lodash.capitalize'
import { Moods } from '../../app'

interface MoodSetterProps {
  mood: Moods
  setMood: (mood: Moods) => void
}

const MoodSetter = ({ mood, setMood }: MoodSetterProps) => {
  return (
    <button className={`absolute mt-2 mr-4 px-4 py-1 shadow-xl rounded-lg w-fit min-w-[90px] h-8 ${mood === 'yazzy' ? 'bg-blue-500 hover:bg-pink-500' : 'bg-pink-500 hover:bg-blue-500'} right-0 transition hover:-translate-y-1`} onClick={() => setMood(mood === 'mathy' ? 'yazzy' : 'mathy')}>
      {capitalize(mood)}
    </button>
  )
}

export default MoodSetter
