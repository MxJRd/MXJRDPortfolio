const Welcome = ({ sectionStyles, setMood, setWelcome }: { sectionStyles: string, setMood: (mood: string) => void, setWelcome: (welcome: boolean) => void}) => {
  const setWelcomeAndMood = (mood: string) => () => {
    setMood(mood)
    setWelcome(false)
  }
  return (
    <section className={`bg-black/0.5 flex flex-col ${sectionStyles} rounded-lg h-full`}>
      <div className='flex flex-col gap-4'>
        <div>
          <button onClick={setWelcomeAndMood('yazzy')} className='btn bg-white text-black'>Yazzy</button>
        </div>
        <div>
          <button onClick={setWelcomeAndMood('mathy')} className='btn bg-white text-black'>Mathy</button>
        </div>
        <div>
          <button onClick={setWelcomeAndMood('none')} className='btn bg-white text-black'>You hate music.</button> 
        </div>
      </div>
      {/* <p>With enough discipline or aptitude, you can be good at anything. Being incredible requires a large amount of both.</p> */}
    </section>
  )
}

export default Welcome
