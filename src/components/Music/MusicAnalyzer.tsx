import { useEffect, useState } from 'preact/hooks'
import WaveForm from './Waveform'

interface MusicAnalyzerProps {
  containerDimensions: { height: number, width: number }
  audioRef: any
}

export const MusicAnalyzer = ({ containerDimensions, audioRef }: MusicAnalyzerProps) => {
  const [, setAudioSrc] = useState<MediaElementAudioSourceNode>() // initialize the audio source.
  const [analyzerData, setAnalyzerData] = useState<any>(null)

  useEffect(() => {
    if(window) {
      const audioCtx = new (window.AudioContext!)()
      const analyzer = audioCtx.createAnalyser()

      analyzer.fftSize = 2048
  
      const bufferLength = analyzer.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      const source = audioCtx.createMediaElementSource(audioRef?.current)

      setAudioSrc(source)
      source.connect(analyzer)
      source.connect(audioCtx.destination)
      setAnalyzerData({ analyzer, bufferLength, dataArray })
    }
  }, [])

  return (
    <div className='absolute mt-11'>
      {analyzerData && <WaveForm analyzerData={analyzerData} containerDimensions={containerDimensions}/>}
    </div>
  )
}

export default MusicAnalyzer
