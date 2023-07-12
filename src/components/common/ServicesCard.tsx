const ServicesCard = ({ title, image }: { title: string, content: string, image: string }) => {
  return (
    <div className='flex flex-col w-full overflow-hidden bg-white shadow-md h-fit rounded-xl'>
      <img src={image} alt='' className='md:h-60 sm:36' />
      { /* Switch p tag back to a tag when it's clickable */ }
      <p href='#' className='p-2 text-xl text-center text-white transition-all duration-500 bg-gray-500 min-h-6 md:p-3 font-poppins'>{title}</p>
    </div>
  )
}

export default ServicesCard
