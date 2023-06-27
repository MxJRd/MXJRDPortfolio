import { useCallback, useEffect, useState } from 'react'

const useSize = (containerDimensions: { height: number, width: number }) => {
  const [width, setWidth] = useState(containerDimensions.width)
  const [height, setHeight] = useState(containerDimensions.width)

  const setSizes = useCallback(() => {
    setWidth(containerDimensions?.width)
    setHeight(containerDimensions?.height)
  }, [setWidth, setHeight])

  useEffect(() => {
    window.addEventListener('resize', setSizes)
    setSizes()
    return () => window.removeEventListener('resize', setSizes)
  }, [setSizes])

  return [width, height]
}

export default useSize
