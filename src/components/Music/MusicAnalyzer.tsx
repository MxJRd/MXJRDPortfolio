import { forwardRef, useEffect, useState } from "react"
import WaveForm from "./Waveform"
import useSize from "./useSize"

export const MusicAnalyzer = ({ containerDimensions, audioRef }: { containerDimensions: { height: number, width: number }, audioRef: any }) => {
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

  useSize(containerDimensions)

  return (
    <div className='absolute mt-11'>
      {analyzerData && <WaveForm analyzerData={analyzerData} containerDimensions={containerDimensions}/>}
    </div>
  )
}


const MusicAnalyzerForwardedRef = (props: any, ref: any) => {
  return <MusicAnalyzer {...props} ref={ref} />;
};

export default forwardRef<HTMLAudioElement>(MusicAnalyzerForwardedRef)
