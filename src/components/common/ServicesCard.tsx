const ServicesCard = ({ title, content, image }: { title: string, content: string, image: string }) => {
  return (
    <div className='w-1/4 rounded-lg shadow-xl bg-[#CCCCCC] text-start text-raisin-black'>
      <img className='rounded' src={image} />
      <header class="text-xl font-extrabold p-4">{title}</header>
      <p class="text-black-200 px-4 font-poppins text-md">
        {content}
      </p>
      <footer class="text-right py-3 px-8 text-gray-500">
        {/* <button
          class="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
        >
          Contact me
        </button> */}
      </footer>
    </div>
  )
}

export default ServicesCard
