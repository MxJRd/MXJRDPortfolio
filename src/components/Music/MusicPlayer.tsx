import { Ref, useEffect, useRef, useState } from "preact/hooks"
import { ReactComponent as PlayButton } from '../../assets/play-circle.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-circle.svg'
import { ReactComponent as PrevButton } from '../../assets/chevrons-left.svg'
import { ReactComponent as NextButton } from '../../assets/chevrons-right.svg'
import MusicMoods, { TrackInfoType } from "../../assets/music/MusicMoods"
import WaveForm from "./Waveform"
import useSize from "./useSize"

export const MusicAnalyzer = ({ containerDimensions, audioRef, currentTrack }: { containerDimensions: { height: number, width: number }, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType }) => {
  const [audioUrl, setAudioUrl] = useState<any>()
  const [audioSrc, setAudioSrc] = useState<MediaElementAudioSourceNode>()
  const [analyzerData, setAnalyzerData] = useState<any>(null)

  const onFileChange = () => setAudioUrl(currentTrack?.track)

  useEffect(() => {
    if(window) {
      const audioCtx = new (window.AudioContext!)()
      const analyzer = audioCtx.createAnalyser()

      analyzer.fftSize = 2048
  
      const bufferLength = analyzer.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      const source = audioCtx.createMediaElementSource(audioRef!.current!)

      setAudioSrc(source)
      source.connect(analyzer)
      source.connect(audioCtx.destination)
      setAnalyzerData({ analyzer, bufferLength, dataArray })
    }
  }, [])

  useEffect(() => {
    setAudioUrl(currentTrack?.track)
  }, [currentTrack?.track])

  useEffect(() => {
    setAudioUrl(currentTrack?.track)
  }, [currentTrack?.track])

  useSize(containerDimensions)

  return (
    <div className='absolute mt-10'>
      {analyzerData && <WaveForm analyzerData={analyzerData} containerDimensions={containerDimensions}/>}
      <div className='flex space-around items-center'>
        <input type="hidden" accept="audio/*" onChange={onFileChange} />
      </div>
    </div>
  )
}

const MusicPlayer = ({ mood, audioRef, currentTrack, setCurrentTrack }: { mood: string, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType, setCurrentTrack: (currentTrack: TrackInfoType) => void }) => {
  const [play, setPlay] = useState(false)
  const [trackIndex, setTrackIndex] = useState<number>(0)

  const playerGradientColor = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'

  useEffect(() => {
    const currentTrackInfo = MusicMoods[mood][trackIndex % MusicMoods[mood].length] // no going out of bounds >:(
    setCurrentTrack(currentTrackInfo)
  }, [trackIndex, mood])
  const [soundOn, setSoundOn] = useState<Boolean>(true)
  const { artist, track, title } = currentTrack || {}
  const playTrack = () => {
    setPlay(true)
    audioRef?.current?.play()
  }
  useEffect(() => {
    const initializePlayer = () => mood !== 'none' && playTrack()
    const initialPlay = setTimeout(initializePlayer, 150)
    return () => clearTimeout(initialPlay)
  }, [])

  return (
    <div className={`absolute m-7 top-28 right-0 min-h-[60px] min-w-[272px] p-0.5 rounded-lg ${playerGradientColor}`}>
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
        <div className='flex p-1 items-center justify-center gap-2'>
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
