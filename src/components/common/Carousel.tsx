import { useState, useEffect, useRef } from 'preact/hooks'
import classNames from 'classnames'

interface CarouselProps {
  images: string[]
  interval?: number
  className?: string
}

const Carousel = ({ images, interval = 5000, className = '' }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(images[0])
  const [nextImage, setNextImage] = useState(images[1] || images[0])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      // Calculate next index
      const nextIdx = (currentIndexRef.current + 1) % images.length
      
      // Set up the next image for transition
      setNextImage(images[nextIdx])
      setIsTransitioning(true)
      
      // After transition completes, make next image the current one
      setTimeout(() => {
        setCurrentImage(images[nextIdx])
        currentIndexRef.current = nextIdx
        
        // Prepare the following image for next transition
        const followingIdx = (nextIdx + 1) % images.length
        setNextImage(images[followingIdx])
        setIsTransitioning(false)
      }, 1000) // Match transition duration
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  if (images.length === 0) return null

  return (
    <div className={classNames('relative overflow-hidden', className)}>
      {/* Next image - always in background, fades in during transition */}
      <img
        key={`next-${nextImage}`}
        src={nextImage}
        alt="Next slide"
        className={classNames(
          'absolute inset-0 w-full h-full rounded-lg object-cover object-right transition-opacity duration-1000',
          isTransitioning ? 'opacity-100' : 'opacity-0'
        )}
      />
      
      {/* Current image - on top, slides out to the right */}
      <img
        key={`current-${currentImage}`}
        src={currentImage}
        alt="Current slide"
        className={classNames(
          'relative w-full h-full rounded-lg object-cover object-right transition-all duration-1000 ease-in-out',
          isTransitioning ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        )}
      />
    </div>
  )
}

export default Carousel

