const Badge = ({ content }: { content: string }) => {
  return (
    <div className='rounded-lg bg-pink-100 max-w-fit-content px-2 py-0.5 opacity-[0.5] text-pink-500 font-poppins text-bold lg:text-md text-sm'>
      {content}
    </div>
  )
}

export default Badge