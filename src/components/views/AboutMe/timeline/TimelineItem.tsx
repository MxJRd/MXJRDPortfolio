interface TimelineItemProps { title: string, content: string, date: string, employer: string, current?: boolean }

const TimelineItem = ({ title, content, date, employer, current }: TimelineItemProps) => {
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center pt-1.5">
        <div className={`z-10 flex items-center justify-center w-6 h-6 rounded-full ring-white ring-8 ${current ? 'dark:ring-white bg-pink-500' : 'dark:ring-gray-900 dark:bg-blue-900'} shrink-0`}>
          <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <div className={`md:flex w-full h-0.5 ${current ? 'bg-pink-200 dark:bg-pink-700' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
      </div>
      <div className="mt-3 md:pe-8">
        <h3 className="text-lg text-gray-900 text-white">{title}</h3>
        <h2 className='block mb-2 text-md font-semibold leading-none text-gray-900 text-white'>{employer}</h2>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{content}</p>
      </div>
    </li>
  )
}

export default TimelineItem