import { Ref, useEffect, useRef, useState } from 'preact/hooks'
import { ReactComponent as PlayButton } from '../../assets/play-circle.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-circle.svg'
import { ReactComponent as PrevButton } from '../../assets/chevrons-left.svg'
import { ReactComponent as NextButton } from '../../assets/chevrons-right.svg'
import MusicMoods, { TrackInfoType } from '../../assets/music/MusicMoods'
import { bundleClickHandlerAndAnimation, fetchSVGSize } from '../../helpers'
import classNames from 'classnames'
import { RefObject } from 'preact'
import { ReactComponent as SpeakerOn } from '../../assets/volume-2.svg'
import LoadingSpinner from '../common/LoadingSpinner'

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
    <div style={{ justifyContent: 'space-between' }} className='flex'>
      <MusicControlButton styles='pl-0 sm:pl-1' iconName='prev' size='large' clickHandler={() => setTrackIndex(Math.abs(trackIndex + 1))}/>
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
      <MusicControlButton styles='pl-0 sm:pl-1' iconName='next' size='large' clickHandler={() => setTrackIndex(Math.abs(trackIndex - 1))}/>
    </div>
  )
}

const VolumeSlider = ({ volume, audioRef, setVolume }: { volume: number, audioRef: RefObject<HTMLAudioElement>, setVolume: (volume: number) => void }) => {
  const handleVolumeChange = (e: any) => {
    const { target: { value } } = e
    audioRef.current!.volume = volume / 100 // volume takes a number up to a maximum of 1.
    setVolume(value)
  }
  {/* { soundOn ? <SpeakerOn onClick={() => setSoundOn(!soundOn)} /> : <SpeakerOff onClick={() => setSoundOn(!soundOn)} /> } */}
  return (
    <div className='flex justify-center min-w-[220px] max-w-[220px] md:min-w-[272px] md:max-w-[272px] pr-7'>
      <div className='flex content-center'>
        <SpeakerOn className='ml-1 mr-2 pr-2'/>
      </div>
      <input 
        type="range"
        className='max-w-[85px] md:min-w-[160px] mr-2'
        value={volume}
        step='1'
        min="1" 
        max="99"
        onChange={handleVolumeChange}
      />
    </div>
  )
}

interface TrackProgressSliderProps {
  duration: number
  audioRef: RefObject<HTMLAudioElement>
  play: boolean
  setPlay: (b: boolean) => void
  trackProgress: number
  setTrackProgress: (trackTime: number) => void
}

const TrackProgressSlider = ({ duration, audioRef, play, setPlay, trackProgress, setTrackProgress }: TrackProgressSliderProps) => {
  const intervalRef = useRef(null)

  const songLengthMinutes = Math.floor(duration / 60)
  const songLengthSeconds = Math.floor(duration % 60)
  const currentMinutes = Math.floor(trackProgress / 60)
  const currentSeconds = Math.floor(trackProgress % 60)

  const displayCurrentSeconds = currentSeconds > 9 ? currentSeconds : `0${currentSeconds}`
  const displayLengthSeconds = songLengthSeconds > 9 ? songLengthSeconds : `0${songLengthSeconds}`
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
  return (
    <div className='flex justify-center'>
      <p className='pr-2'>{currentMinutes}:{displayCurrentSeconds}</p>
      <input
        type='range'
        value={trackProgress}
        step='1'
        min='0'
        max={duration ? duration : `${duration}`}
        className='max-w-[85px] md:min-w-[160px]'
        onChange={(e: any) => onScrub(e?.target?.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
      />
      <p className='pl-2'>{songLengthMinutes}:{displayLengthSeconds}</p>
    </div>
  )
}

const MusicPlayer = ({ mood, audioRef, currentTrack, setCurrentTrack }: MusicPlayerProps) => {
  const [play, setPlay] = useState(false)
  const [trackProgress, setTrackProgress] = useState(0)
  const [trackIndex, setTrackIndex] = useState<number>(0)
  const [volume, setVolume] = useState(0.01)
  const [duration, setDuration] = useState<number>(0)
  const playerGradientColor = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
  const isLoading = Number.isNaN(trackProgress) || audioRef.current === null
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
    setVolume(audioRef.current!.volume)
    audioRef.current!.volume = volume
    const initialPlayTimer = setTimeout(initializePlayer, 150)
    return () => clearTimeout(initialPlayTimer)
  }, [])
  const handleTrackProgress = () => {
    setTrackProgress(audioRef.current!.currentTime)
  }
  // const [soundOn, setSoundOn] = useState<Boolean>(true)
  const { artist, track, title } = currentTrack || {}

  const handleMetadata = (e: any) => {
    setDuration(e.currentTarget.duration)
  }
  return (
    <div className={`absolute m-4 top-16 right-2 sm:right-4 max-w-[200px] md:min-w-[272px] p-0.5 rounded-lg ${playerGradientColor}`}>
      { isLoading
        ? <LoadingSpinner />
        : (
          <section id='music-player-background' className='space-y-0 text-sm rounded-md bg-raisin-black content-center'>
            <p className='text-pink-500 font-poppins'>{title}</p>
            <p className='font-roboto-matrix pb-0.5'>{artist}</p>
            <MusicPlayerControls play={play} setPlay={setPlay} audioPlayerRef={audioRef} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
            <div className='flex flex-col items-center px-1 max-w-[160px] md:max-w-full'>
              <TrackProgressSlider audioRef={audioRef} duration={duration} play={play} setPlay={setPlay} trackProgress={trackProgress} setTrackProgress={setTrackProgress} />
              <VolumeSlider audioRef={audioRef} volume={volume} setVolume={setVolume} />
            </div>
          </section>
        )
      }
      { audioRef && <audio ref={audioRef} src={track} crossOrigin='anonymous' preload='metadata' onLoadedMetadata={handleMetadata} onTimeUpdate={handleTrackProgress} /> }
    </div>
  )
}

export default MusicPlayer
