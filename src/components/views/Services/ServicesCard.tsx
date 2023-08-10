interface ServicesCardProps {
  title: string
  content: string
  image: string
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

const ServicesCard: React.FC<ServicesCardProps> = ({ title, image, setSelectedService }: ServicesCardProps) => {
  return (
    <div className='flex flex-col w-full overflow-hidden bg-white shadow-md h-fit rounded-xl cursor-pointer' onClick={() => setSelectedService(buildEmailSubject(title))} >
      <img src={image} alt='' className='md:h-60 sm:36' />
      { /* Switch p tag back to a tag when it's clickable */ }
      <p href='#' className='p-2 text-xl text-center text-white transition-all duration-500 bg-gray-500 min-h-6 md:p-3 font-poppins'>{title}</p>
    </div>
  )
}

export default ServicesCard
