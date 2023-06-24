import { useEffect, useRef, useState } from "preact/hooks"
import { ReactComponent as PlayButton } from '../../assets/play-circle.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-circle.svg'
import { ReactComponent as PrevButton } from '../../assets/chevrons-left.svg'
import { ReactComponent as NextButton } from '../../assets/chevrons-right.svg'
import MusicMoods, { TrackInfoType } from "../../assets/music/MusicMoods"
// import { ReactComponent as SpeakerOn } from '../mail.svg/assets/volume-2.svg'
// import { ReactComponent as SpeakerOff } from '../mail.svg'

const MusicPlayer = ({ mood }: { mood: string }) => {
  const [play, setPlay] = useState(false)
  const [trackIndex, setTrackIndex] = useState<number>(0)
  const [currentTrack, setCurrentTrack] = useState<TrackInfoType>()
  const gradientColor = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
  const [musicAnalyzerData, setMusicAnalyzerData] = useState(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    const currentTrackInfo = MusicMoods[mood][trackIndex % MusicMoods[mood].length]
    setCurrentTrack(currentTrackInfo)
  }, [trackIndex, mood])
  const [soundOn, setSoundOn] = useState<Boolean>(true)
  const { artist, track, title } = currentTrack || {}
  // const playTrack = () => {
  //   setPlay(true)
  //   audioRef?.current?.play()
  // }
  // useEffect(() => {
  //   if(mood !== 'none') {
  //     playTrack()
  //   }
  // }, [mood])
  return (
    <div className={`absolute m-7 top-28 right-0 min-h-[60px] min-w-[272px] p-1 rounded-lg ${gradientColor}`}>
      <section id='music-player-background' className='bg-raisin-black rounded-md min-w-full'>
        <p className='text-pink-500 font-poppins'>{title}</p>
        <p className='font-roboto-matrix pb-1'>{artist}</p>
        <div className='flex justify-between justify-center'>
          <PrevButton onClick={() => {
            setTrackIndex((prevIdx) => prevIdx - 1)
          }}/>
          {
            play
            ?
              <PauseButton onClick={() => {
                setPlay(false)
                audioRef?.current?.pause()
              }} />
            :
              <PlayButton onClick={() => {
                setPlay(true)
                audioRef?.current?.play()
              }} />
            }
          <NextButton onClick={() => {
            setTrackIndex((prevIdx) => prevIdx + 1)
          }}/>
        </div>
        <div className='flex p-1 items-center justify-center gap-2'>
          <div id='progress-bar' className='flex relative h-2 bg-white rounded-sm overflow-hidden min-w-[175px]'>
            <div id='progress-bar-fill' className="h-2 bg-black rounded-sm min-w-[175px]"></div>
          </div>
          {/* { soundOn ? <SpeakerOn onClick={() => setSoundOn(!soundOn)} /> : <SpeakerOff onClick={() => setSoundOn(!soundOn)} /> } */}
        </div>
      </section>
      <audio ref={audioRef} src={track} crossOrigin='anonymous' preload='metadata' />
    </div>
  )
}

export default MusicPlayer
