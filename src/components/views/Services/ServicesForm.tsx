import React, { useState, useEffect, ChangeEvent } from 'preact/compat'
import { JSX } from 'preact'

interface ServicesFormProps {
  selectedService: string
  id: string
}

const ServicesForm: React.FC<ServicesFormProps> = ({ selectedService }: ServicesFormProps): JSX.Element => {
  const [subject, setSubject] = useState<string>('')
  const [body, setBody] = useState<string>('Please include some details: ')
  const [name, setName] = useState<string>('')

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

  const handleDrag = (e: DragEvent) => {
    return console.log(e.offsetX, e.movementY)  
  }
  
  return (
    <form style={{ zIndex: 10000 }} draggable={true} onDrag={handleDrag} className='p-2 absolute md:p-4 w-[300px] mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden'>
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
        />
      </div>
      <div className='flex justify-center'>
        <a
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          href={`mailto:mxjreed@gmail.com?subject=${subject}&body=${body}`}
          type='submit'
        >
          Submit
        </a>
      </div>
    </form>
  )
}

export default ServicesForm
