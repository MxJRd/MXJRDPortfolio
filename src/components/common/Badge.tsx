const Badge = ({ content, current }: { content: string, current?: boolean }) => {
  return (
    <div className={`rounded-lg ${current ? 'bg-blue-200 text-blue-600' : 'bg-pink-100 text-pink-500'} max-w-fit-content px-2 py-0.5 opacity-[0.5]  font-poppins text-bold lg:text-md text-sm`}>
      {content}
    </div>
  )
}

export default Badge