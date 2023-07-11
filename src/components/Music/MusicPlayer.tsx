import { Ref, useEffect, useRef, useState } from 'preact/hooks'
import { ReactComponent as PlayButton } from '../../assets/play-circle.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-circle.svg'
import { ReactComponent as PrevButton } from '../../assets/chevrons-left.svg'
import { ReactComponent as NextButton } from '../../assets/chevrons-right.svg'
import MusicMoods, { TrackInfoType } from '../../assets/music/MusicMoods'
import { bundleClickHandlerAndAnimation, fetchSVGSize } from '../../helpers'
import classNames from 'classnames'
import { RefObject } from 'preact'

type Icons = 'play' | 'pause' | 'next' | 'prev'

const fetchIcon = (iconName: Icons, svgSize: string) => {
  switch(iconName) {
    case 'play':
      return <PlayButton className={svgSize} />
    case 'pause':
      return <PauseButton className={svgSize} />
    case 'next':
      return <NextButton className={svgSize} />
    case 'prev':
      return <PrevButton className={svgSize} />
  }
}

interface MusicPlayerProps {
  isDesktopView: boolean
  isMobileView: boolean
  mood: string
  audioRef: RefObject<HTMLAudioElement>
  currentTrack: TrackInfoType
  setCurrentTrack: (currentTrack: TrackInfoType) => void
}

const MusicControlButton = ({ size, iconName, clickHandler, styles = '' }: { size: string, iconName: Icons, clickHandler: (...args: any) => void, styles?: string }) => {
  const [clicked, setClicked] = useState<boolean>(false)
  const svgSize = fetchSVGSize(size)
  const icon = fetchIcon(iconName, svgSize!)
  return (
    <div
      className={classNames(styles, 'cursor-pointer hover:text-pink-500', `${clicked && 'animate-clickPulse'}`)}
      onClick={() => bundleClickHandlerAndAnimation(setClicked, clickHandler)}
      onAnimationEnd={() => setClicked(false)}
    >
    {icon}
  </div>
  )
}

const MusicPlayerControls = ({ audioPlayerRef, trackIndex, setTrackIndex, setPlay, play }: { audioPlayerRef: Ref<HTMLAudioElement>, trackIndex: number, play: boolean, setPlay: (playPause: boolean) => void, setTrackIndex: (prevIdx: number) => void }) => {
  return (
    <div style={{ justifyContent: 'space-between' }} className='flex w-full'>
      <MusicControlButton styles='pl-1' iconName='prev' size='large' clickHandler={() => setTrackIndex(Math.abs(trackIndex + 1))}/>
      {
        play
        ?
          <MusicControlButton iconName='pause' size='large' clickHandler={() => {
            setPlay(false)
            audioPlayerRef.current!.pause()
          }}/>
        :
          <MusicControlButton iconName='play' size='large' clickHandler={() => {
            setPlay(true)
            audioPlayerRef.current!.play()
          }}/>
      }
      <MusicControlButton styles='pr-1' iconName='next' size='large' clickHandler={() => setTrackIndex(Math.abs(trackIndex - 1))}/>
    </div>
  )
}

// interface MusicPlayerProgressBarProps {
//   trackProgress: number
//   duration: number
//   onScrub: (e: any) => void
//   onScrubEnd: () => void
// }


// const MusicPlayerProgressBar = ({ trackProgress, duration, onScrub, onScrubEnd }: MusicPlayerProgressBarProps) => {
//   return (
//     <input
//       type='range'
//       value={trackProgress}
//       step='1'
//       min='0'
//       max={duration ? duration : `${duration}`}
//       className='progress'
//       onChange={(e) => onScrub(e?.target?.value)}
//       onMouseUp={onScrubEnd}
//       onKeyUp={onScrubEnd}
//     />
//   )
// }

const MusicPlayer = ({ mood, audioRef, currentTrack, setCurrentTrack }: MusicPlayerProps) => {
  const [play, setPlay] = useState(false)
  const intervalRef = useRef(null)
  const [trackIndex, setTrackIndex] = useState<number>(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [duration, setDuration] = useState<number>(0)

  const songLengthMinutes = Math.floor(duration / 60)
  const songLengthSeconds = Math.floor(duration % 60)

  const currentMinutes = Math.floor(trackProgress / 60)
  const currentSeconds = Math.floor(trackProgress % 60)

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current!)
    audioRef.current!.currentTime = value
    setTrackProgress(audioRef.current!.currentTime)
  }

  const onScrubEnd = () => {
    if (!play) {
      setPlay(true)
    }
  }
  
  const playerGradientColor = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
  const playTrack = () => {
    setPlay(true)
    audioRef?.current?.play()
  }

  useEffect(() => {
    if (play) {
      audioRef.current!.play()
    } else {
      audioRef.current!.pause()
    }
  }, [play])

  useEffect(() => {
    const currentTrackInfo = MusicMoods[mood][trackIndex % MusicMoods[mood].length] // no going out of bounds >:(
    setCurrentTrack(currentTrackInfo)
    setDuration(audioRef.current!.duration)

    const trackChange = () => playTrack()
    const trackChangeTimer = setTimeout(trackChange, 450)
  
    return () => clearTimeout(trackChangeTimer)
  
  }, [trackIndex, mood])

  useEffect(() => {
    const initializePlayer = () => mood !== 'none' && playTrack()
    const initialPlayTimer = setTimeout(initializePlayer, 150)
    return () => clearTimeout(initialPlayTimer)
  }, [])
  const handleTrackProgress = () => {
    setTrackProgress(audioRef.current!.currentTime)
  }
  // const [soundOn, setSoundOn] = useState<Boolean>(true)
  const { artist, track, title } = currentTrack || {}

  const displaySeconds = currentSeconds > 9 ? currentSeconds : `0${currentSeconds}`
  const handleMetadata = (e: any) => {
    setDuration(e.currentTarget.duration)
  }
  return (
    <div className={`absolute m-4 top-20 right-4 md:min-w-[272px] p-0.5 rounded-lg ${playerGradientColor}`}>
      <section id='music-player-background' className='min-w-full space-y-0 text-sm rounded-md bg-raisin-black'>
        <p className='text-pink-500 font-poppins'>{title}</p>
        <p className='font-roboto-matrix pb-0.5'>{artist}</p>
        <MusicPlayerControls play={play} setPlay={setPlay} audioPlayerRef={audioRef} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
        <div className='flex items-center justify-between'>
          <p className='px-3'>{currentMinutes}:{displaySeconds}</p>
          <input
            type='range'
            value={trackProgress}
            step='1'
            min='0'
            max={duration ? duration : `${duration}`}
            className='w-20 mx-1 md:w-32 progress'
            onChange={(e: any) => onScrub(e?.target?.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
          <p className='px-3'>{songLengthMinutes}:{songLengthSeconds}</p>
          {/* { soundOn ? <SpeakerOn onClick={() => setSoundOn(!soundOn)} /> : <SpeakerOff onClick={() => setSoundOn(!soundOn)} /> } */}
        </div>
      </section>
      { audioRef && <audio ref={audioRef} src={track} crossOrigin='anonymous' preload='metadata' onLoadedMetadata={handleMetadata} onTimeUpdate={handleTrackProgress} /> }
    </div>
  )
}

export default MusicPlayer
