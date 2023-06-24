const BackgroundBadge = ({ viewTitle }: { viewTitle: string }) => {
  return (
    <div style={{ zIndex: -10 }} className='absolute bottom-0 left-0 p-8'>
      <h1 className='text-9xl opacity-[0.1]'>{viewTitle}</h1>
    </div>
  )
}

export default BackgroundBadge
