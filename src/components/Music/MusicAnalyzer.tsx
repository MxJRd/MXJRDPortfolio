import { Ref, useEffect, useState } from "react"
import WaveForm from "./Waveform"
import useSize from "./useSize"
import { TrackInfoType } from "../../assets/music/MusicMoods"

export const MusicAnalyzer = ({ containerDimensions, audioRef, currentTrack }: { containerDimensions: { height: number, width: number }, audioRef: Ref<HTMLAudioElement>, currentTrack: TrackInfoType }) => {
  const [, setAudioSrc] = useState<MediaElementAudioSourceNode>() // initialize the audio source.
  const [analyzerData, setAnalyzerData] = useState<any>(null)
  const [songDuration, setSongDuration] = useState<number>(0)
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

  useSize(containerDimensions)

  return (
    <div className='absolute mt-11'>
      {analyzerData && <WaveForm analyzerData={analyzerData} containerDimensions={containerDimensions}/>}
    </div>
  )
}

export default MusicAnalyzer
