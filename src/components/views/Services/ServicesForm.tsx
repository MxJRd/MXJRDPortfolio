import React, { useState, useEffect, ChangeEvent, useRef } from 'preact/compat'
import { JSX } from 'preact'
import DragMove from '../../common/DragMove'

interface ServicesFormProps {
  selectedService: string
  setSelectedService: (s: string) => void
}

const ServicesForm: React.FC<ServicesFormProps> = ({ selectedService, setSelectedService }: ServicesFormProps): JSX.Element => {
  const [subject, setSubject] = useState<string>('')
  const [body, setBody] = useState<string>('Please include some details: ')
  const [name, setName] = useState<string>('')

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSubject((event.target as HTMLInputElement).value)
  }

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setBody((event.target as HTMLInputElement).value)
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName((event.target as HTMLInputElement).value)
  }

  useEffect(() => setSubject(selectedService), [selectedService])

  const [elementCoords, setElementCoords] = useState({ x: 0, y: 0 })
  const handleElementDrag = (e: DragEvent) => {
    setElementCoords({
      x: elementCoords.x + e.movementX,
      y: elementCoords.y + e.movementY
    })
  }

  const submitMessage = body.replace(/\r\n|\r|\n/g, "%0D%0A")

  return (
    <DragMove onDragMove={handleElementDrag}>
      <form
        ref={formRef}
        style={{
          transform: `translateX(${elementCoords.x}px) translateY(${elementCoords.y}px)`,
          zIndex: 10
        }}
        className='p-2 absolute md:p-4 w-[300px] mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden'
      >
        <p className='text-black cursor-pointer w-6 ml-auto' onClick={() => setSelectedService('')} >X</p>
        <div className='mb-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-white'
            id='name'
            type='text'
            placeholder="What's your name? :)"
            value={name}
            onChange={handleNameChange}
            maxLength={100}
          />
        </div>
        <div className='mb-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='subject'>
            Subject
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-white'
            type='text'
            placeholder='Enter subject'
            value={subject}
            onChange={handleSubjectChange}
            maxLength={100}
          />
        </div>
        <div className='mb-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='body'>
            Content
          </label>
          <textarea
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-white'
            placeholder='Enter email content'
            rows={4}
            value={body}
            onChange={handleContentChange}
            maxLength={999}
          />
        </div>
        <div className='flex justify-center'>
          <a
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            href={`mailto:mxjreed@gmail.com?subject=${subject}&body=${submitMessage}`}
            type='submit'
          >
            Submit
          </a>
        </div>
      </form>
    </DragMove>
  )
}

export default ServicesForm
