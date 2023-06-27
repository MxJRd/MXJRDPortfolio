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
  const audioElmRef = useRef(null)

  useEffect(() => {
    if(window) {
      const audioCtx = new (window.AudioContext!)()
      // audioCtx.createMediaElementSource(audioRef!.current!)
      const analyzer = audioCtx.createAnalyser()
      analyzer.fftSize = 2048
  
      const bufferLength = analyzer.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      const source = audioCtx.createMediaElementSource(audioRef!.current!) // changed from audioElmRef.current
      setAudioSrc(source)
      source.connect(analyzer)
      source.connect(audioCtx.destination)
      setAnalyzerData({ analyzer, bufferLength, dataArray })
    }
  }, [])
  useEffect(() => {

  }, [currentTrack?.track])
  // audioAnalyzer function analyzes the audio and sets the analyzerData state
  const audioAnalyzer = () => {
    // create a new AudioContext


    // source.disconnect()
    // set the analyzerData state with the analyzer, bufferLength, and dataArray

  }
  useSize(containerDimensions)
  // onFileChange function handles the file input and triggers the audio analysis
  const onFileChange = (e: any) => {
    setAudioUrl(currentTrack?.track)
  }
  useEffect(() => {
    setAudioUrl(currentTrack?.track)
    audioAnalyzer()
  }, [currentTrack?.track])

  return (
    <div className='absolute'>
      {analyzerData && <WaveForm analyzerData={analyzerData} containerDimensions={containerDimensions}/>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <input type="hidden" accept="audio/*" onChange={onFileChange} />
        <audio src={currentTrack?.track} ref={audioRef} />
      </div>
    </div>
  )
}

const MusicPlayer = ({ mood, audioRef, currentTrack, setCurrentTrack }: { mood: string, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType, setCurrentTrack: (currentTrack: TrackInfoType) => void }) => {
  const [play, setPlay] = useState(false)
  const [trackIndex, setTrackIndex] = useState<number>(0)

  const gradientColor = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'

  useEffect(() => {
    const currentTrackInfo = MusicMoods[mood][trackIndex % MusicMoods[mood].length] // no going out of bounds >:(
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
    <div className={`absolute m-7 top-28 right-0 min-h-[60px] min-w-[272px] p-0.5 rounded-lg ${gradientColor}`}>
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
      { audioRef && <audio ref={audioRef} src={track} crossOrigin='anonymous' preload='metadata' /> }
    </div>
  )
}

export default MusicPlayer
