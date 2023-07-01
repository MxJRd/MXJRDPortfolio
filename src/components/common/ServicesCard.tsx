const ServicesCard = ({ title, content, image }: { title: string, content: string, image: string }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md w-full overflow-hidden">
      <img src={image} alt="" className='md:h-60 sm:36' />
      <a href="#" className="bg-gray-500 text-white md:p-3 p-2 text-center md:text-lg text-sm font-poppins hover:bg-blue-800 transition-all duration-500">{title}</a>
    </div>
  )
}

export default ServicesCard
