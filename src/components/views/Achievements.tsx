import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as MailIcon } from '../../assets/mail.svg'
import { useState } from 'preact/hooks'

export const ReceiptsModal = ({ setShowReceipts }: { setShowReceipts: (b: boolean) => void}) => {
  return (
    <div className='w-4/5 p-4 overflow-y-auto bg-black h-4/5'>
      <div className='flex items-center content-center justify-between text-center'>
        <h1>Click through!</h1>
        <button className='' onClick={() => setShowReceipts(false)}>X</button>
      </div>
      <ul className='flex flex-col items-start flex-1 list-disc'>
        <li>Mentoring over 15 people to get into one of the most competitive career change programs in the world.</li>
        <li>Top 0.5% of players season 4 in League of Legends.</li>
        <li>Built my first car. 1983 Porsche 928, LS1 conversion.</li>
        <li>Number 13 player (number 2 Archer) worldwide Tera 2015.</li>
        <li>Top 3.6% of players in Chess.com puzzles.</li>
        <li>Played alongside huge bands like Red Jumpsuit Apparatus, Drowning Pool and more.</li>
        <li>Self taught audio engineer (you can see if you picked a mood).</li>
        <li>Most popular teacher at Fun Music school.</li>
        <li><a href='https://tcymbals.com/artists/maxwell-j-reed/'>Endorsed drummer</a></li>
      </ul>
    </div>
  )
}

const Achievements = ({ sectionStyles }: { sectionStyles: string }) => {
  const [showReceipts, setShowReceipts] = useState(false )
  return (
        <section className={`h-full bg-gray-300 flex flex-col items-center justify-center ${sectionStyles}`}>
          {
            !showReceipts && (
              <button className='relative right-[465px] top-[200px] -rotate-90' onClick={() => setShowReceipts(true)}>
                (: Receipts
              </button>
            )
          }
          {
            showReceipts
                ?
                  <ReceiptsModal setShowReceipts={setShowReceipts}/> 
                :
                  <div className='w-5/6 p-4 overflow-y-auto h-4/5'>
                    <h1 className="pb-4 text-4xl font-bold">Achievements</h1>
                    <div className='flex flex-row'>
                      <p className='flex-1 text-start'>
                        I am a highly motivated individual with a proven track record of success. As a drummer, I had the opportunity to play professionally alongside my childhood heroes, Red Jumpsuit Apparatus, Drowning Pool, and more.
                        In League of Legends Season 4, widely regarded as one of the most competitive and popular seasons in its history, I achieved recognition as one of the best Wukongs in North America, and some would argue, in the world. I utilized my gaming skills to help cover some of my college expenses.
                        Furthermore, I have hands-on experience working on automotives, having personally built my first car and worked as a mechanic for the post office. Currently, I am employed as a Software Engineer where I began my professional journey at Apple.
                        Lastly, I enjoy giving back to the community. I've helped over 15 people into being competitive enough to get into a software engineering program with a 5% acceptance rate and countless more with mock interviews and critiques!
                      </p>
                    </div>
                  </div>
          }
          <div className='h-[100px] flex flex-col items-center gap-4'>
            <p className="text-2xl font-bold">Contact</p>
            <div className='flex gap-4'>
              <button>
                <a href='mailto:mxjreed@gmail.com'>
                  <MailIcon />
                </a>
              </button>
              <button>
                <PhoneIcon />
              </button>
            </div>
          </div>
        </section>
  )
}

export default Achievements
