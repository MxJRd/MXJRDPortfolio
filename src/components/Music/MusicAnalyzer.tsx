import { useEffect, useState } from "react"
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
    <div className='absolute mt-12'>
      {analyzerData && <WaveForm analyzerData={analyzerData} containerDimensions={containerDimensions}/>}
      <div className='flex items-center space-around'>
        <input type="hidden" accept="audio/*" onChange={onFileChange} />
      </div>
    </div>
  )
}

export default MusicAnalyzer
