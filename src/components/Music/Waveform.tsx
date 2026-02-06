import { useRef, useEffect } from "react"

function animateBars(analyser: any, canvas: HTMLCanvasElement, canvasCtx: any, dataArray: Array<number>, bufferLength: number, mood: string) {

  analyser.getByteFrequencyData(dataArray)
  const canvasHeight = canvas.height / 1.55

  // Calculate the width of each bar in the waveform based on the canvas width and the buffer length.
  var barWidth = Math.ceil(canvas.width / bufferLength) * 2.5
  let barHeight

  let column = 0

  canvasCtx.fillStyle = mood === 'mathy' ? '#e91e63' : '#00CCFF' // bg-pink-500 or bg-blue-500
  // Loop through each buffer element in the `dataArray`.
  dataArray.forEach((buffer: number) => {
  // Calculate the height of the current bar based on the audio data and the canvas height.
  barHeight = (buffer / 255) * canvasHeight
  // Draw the bar on the canvas at the current column-position and with the calculated height and width.
  canvasCtx.fillRect(column, canvasHeight - barHeight, barWidth, barHeight)
  // Update the column-position for the next bar.
  column += barWidth + 3
  })
}

type WaveformProps = {
  analyzerData: any,
  containerDimensions: { height: number, width: number }
  mood: string
}

const Waveform: React.FC<WaveformProps> = ({ analyzerData, containerDimensions, mood }: WaveformProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const { dataArray, analyzer, bufferLength } = analyzerData
  // Function to draw the waveform
  const drawWaveform = (dataArray: Array<number>, analyzer: any, bufferLength: any, currentMood: string) => {
    const canvas = canvasRef.current
    if (!canvas || !analyzer) return
    const canvasCtx = canvas.getContext("2d")

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)
      canvas.width = canvas.width
      animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength, currentMood)
    }
    animate()
  }

  useEffect(() => {
    // Cancel any existing animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    drawWaveform(dataArray, analyzer, bufferLength, mood)
    
    // Cleanup function to cancel animation frame on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dataArray, analyzer, bufferLength, mood])

  return (
    <canvas
      className='absolute top-0 left-0'
      style={{ zIndex: '-5' }}
      ref={canvasRef}
      width={containerDimensions.width}
      height={containerDimensions.height}
    />
  )
}

export default Waveform
