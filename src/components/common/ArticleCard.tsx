import { useCallback, useEffect, useRef, useState } from "preact/hooks"

const ArticleCard = ({ content, title }: { content: string, title: string }) => {
  const articleRef = useRef<HTMLElement>(null)
  const [height, setHeight] = useState(0)
  const onResize = useCallback(() => {
    if (articleRef.current) setHeight(articleRef.current.clientHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <article ref={articleRef} className='w-2/5'>
      <ul className='flex flex-col gap-12 text-start min-w-180 pr-8 pl-8 text-white'>
        <div className='flex flex-col relative -translate-x-12 translate-y-32'>
          <div className='border border-white rounded-md w-3 h-3 bg-raisin-black'></div>
          <div style={{ height: `${(height-140).toString()}px` }}className={`absolute border border-1 mt-2.5 ml-1.25 opacity-[0.3]`}></div>
        </div>
        <li className='flex flex-col gap-5.5'>
          <h1 className="text-4xl text-red-200 font-bold -translate-x-24 min-w-[172px] whitespace-nowrap font-poppins font-bold">{title}</h1>
          <p className='min-w-[480px] max-w-[675px] font-roboto font-semibold'>
            {content}
          </p>
        </li>
      </ul>
    </article>
  )
}

export default ArticleCard
