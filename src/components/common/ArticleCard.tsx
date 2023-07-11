import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

const ArticleCard = ({ content, title }: { content: string, title: string }) => {
  const articleRef = useRef<HTMLElement>(null)
  const [height, setHeight] = useState(0)
  const onResize = useCallback(() => {
    if (articleRef.current) setHeight(articleRef.current.clientHeight)
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
    };
  }, []);

  return (
    <article ref={articleRef} className='relative'>
      <ul className='flex flex-col gap-12 pl-8 pr-8 text-white text-start min-w-180 md:pl-48'>
        <div className='relative flex flex-col -translate-x-10 translate-y-32'>
          <div className='w-3 h-3 border border-white rounded-md bg-raisin-black'></div>
          <div style={{ height: `${(height-140).toString()}px` }}className={`absolute border border-1 mt-2.5 ml-1.25 opacity-[0.3]`}></div>
        </div>
        <li className='flex flex-col gap-5.5 left-96'>
          <h1 className='relative text-4xl text-red-200 font-bold xl:-translate-x-24 lg:-translate-x-24 md:translate-x-0 sm:translate-x-0 xs:translate-x-0 min-w-[172px] whitespace-nowrap font-poppins font-bold animate-slide-from-left'>{title}</h1>
          <p className='xl:min-w-[675px] xl:max-w-[675px] lg:min-w-[675px] lg:max-w-[675px] md:min-w-[550px] md:max-w-[550px] sm:min-w-[425px] sm:max-w-[425px] font-roboto font-semibold animate-slide-from-right'>
            {content}
          </p>
        </li>
      </ul>
    </article>
  )
}

export default ArticleCard
