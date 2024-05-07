import React from 'react'
import { useState } from 'react'

const Create = () => {
    const [image, setimage] = useState('')
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [ingredients, setingredients] = useState('')
    const [instructions, setinstructions] = useState('')
const submitHandler = (event)=>{
event.preventDefault()
// setimage(event.target.value)
}
const imageHandler = (event)=>{
    setimage(event.target.value)
    event.target.value = ''
}

  return (
    <div className='w-full h-screen'>
        <form onSubmit={submitHandler} className='w-[50%] translate-x-[30%] h-full flex flex-col px-[5vw] pt-[10vw] gap-[3vw] items-stretch' action="">
            <input onChange={imageHandler} value={image} className='border border-zinc-300 py-2 rounded-lg px-4' type="url" name="" id="image" placeholder='Paste Image URL Here'/>
            <input className='border border-zinc-300 py-2 rounded-lg px-4' type="text" id='title' placeholder='Recipe Title'/>
            <input className='border border-zinc-300 py-2 rounded-lg px-4' type="text" id='descriptiom' placeholder='Recipe Description'/>
            <textarea className='border border-zinc-300 pb-20 pt-2 rounded-lg px-4' name="" id="ingredients" placeholder='Recipe Ingredients'></textarea>
            <textarea className='border border-zinc-300 pb-20 pt-2 rounded-lg px-4' name="" id="instructions" placeholder='Recipe Instructions'></textarea>
            <button className='bg-green-400 place-self-start px-8 py-3 rounded-lg capitalize'>publish recipe</button>
        </form>
    </div>
  )
}

export default Create