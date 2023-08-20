import { useState } from "react"
import LoadingSpinner from "../../common/LoadingSpinner"
import classNames from "classnames"
import { makeLift } from "../../../animations"

interface ServicesCardProps {
  title: string
  content: string
  image: string
  className?: string
  setSelectedService: (s: string) => void
}

const buildEmailSubject = (title: string): string => {
  switch(title) {
    case 'Mentor.':
      return `I'd like you to be my ${title}!`
    default:
      return `I'd like to hire you for ${title}!`
  }
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, image, className = '', setSelectedService }: ServicesCardProps): JSX.Element => {
  const [loading, setLoading] = useState(true)
  return (
        <div 
          className={classNames(
              className,
              `${makeLift}`,
              'flex flex-col w-full overflow-hidden bg-white shadow-lg shadow-black h-fit rounded-xl cursor-pointer'
          )}
          onClick={() => setSelectedService(buildEmailSubject(title))}
        >
          { loading && <LoadingSpinner /> }
          <img
            src={image}
            alt=''
            onLoad={() => setLoading(false)} className='md:h-60 sm:36'
          />
          { /* Switch p tag back to a tag when it's clickable */ }
          <p href='#' className='p-2 text-xl text-center text-white transition-all duration-500 bg-gray-500 min-h-6 md:p-3 font-poppins'>{title}</p>
        </div>
    )
}

export default ServicesCard
