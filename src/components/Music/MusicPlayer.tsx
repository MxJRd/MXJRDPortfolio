import { Ref, useEffect, useRef, useState } from "preact/hooks"
import { ReactComponent as PlayButton } from '../../assets/play-circle.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-circle.svg'
import { ReactComponent as PrevButton } from '../../assets/chevrons-left.svg'
import { ReactComponent as NextButton } from '../../assets/chevrons-right.svg'
import MusicMoods, { TrackInfoType } from "../../assets/music/MusicMoods"

const MusicPlayer = ({ mood, audioRef, currentTrack, setCurrentTrack }: { mood: string, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType, setCurrentTrack: (currentTrack: TrackInfoType) => void }) => {
  const [play, setPlay] = useState(false)
  const [trackIndex, setTrackIndex] = useState<number>(0)

  const playerGradientColor = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
  const playTrack = () => {
    setPlay(true)
    audioRef?.current?.play()
  }

  useEffect(() => {
    const currentTrackInfo = MusicMoods[mood][trackIndex % MusicMoods[mood].length] // no going out of bounds >:(
    setCurrentTrack(currentTrackInfo)
    const trackChange = () => playTrack()
    const trackChangeTimer = setTimeout(trackChange, 450)
    return () => clearTimeout(trackChangeTimer)
  }, [trackIndex, mood])

  useEffect(() => {
    const initializePlayer = () => mood !== 'none' && playTrack()
    const initialPlayTimer = setTimeout(initializePlayer, 150)
    return () => clearTimeout(initialPlayTimer)
  }, [])

  const [soundOn, setSoundOn] = useState<Boolean>(true)
  const { artist, track, title } = currentTrack || {}

  return (
    <div className={`absolute m-7 top-20 right-0 min-h-[60px] min-w-[272px] p-0.5 rounded-lg ${playerGradientColor}`}>
      <section id='music-player-background' className='min-w-full rounded-md bg-raisin-black'>
        <p className='text-pink-500 font-poppins'>{title}</p>
        <p className='pb-1 font-roboto-matrix'>{artist}</p>
        <div className='flex justify-center justify-between'>
          <PrevButton onClick={() => {
            setTrackIndex((prevIdx) => prevIdx - 1)
          }}/>
          {
            play
            ?
              <PauseButton onClick={() => {
                setPlay(false)
                audioRef.current!.pause()
              }} />
            :
              <PlayButton onClick={() => {
                setPlay(true)
                audioRef.current!.play()
              }} />
            }
          <NextButton onClick={() => {
            setTrackIndex((prevIdx) => prevIdx + 1)
          }}/>
        </div>
        <div className='flex items-center justify-center gap-2 p-1'>
          <div id='progress-bar' className='flex relative h-2 bg-white rounded-sm overflow-hidden min-w-[175px]'>
            <div id='progress-bar-fill' className="h-2 bg-black rounded-sm min-w-[175px]"></div>
          </div>
          {/* { soundOn ? <SpeakerOn onClick={() => setSoundOn(!soundOn)} /> : <SpeakerOff onClick={() => setSoundOn(!soundOn)} /> } */}
        </div>
      </section>
      { audioRef && <audio ref={audioRef} src={track} crossOrigin='anonymous' preload='metadata' /> }
    </div>
  )
}

export default MusicPlayer
