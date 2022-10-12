import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({question,}) => {
    const [open, setOpen] = useState(false)
    const openFunction=(id) =>{
        return id
    }

    return (
        <div>
          <div className=' bg-slate-200 mb-9 mt-7 w-2/3 inline-block rounded-md p-10'>
            <div className=' flex'>
            <h2 className='text-3xl font-semibold mb-5'>{question.question.slice(3,-4)}</h2>
            <button onClick={() => setOpen(!open)} className=' ml-5 float-right'> <EyeIcon className="h-6 w-6 text-orange-500"/> </button>
            
            </div>
            <div className='text-left'>
            <p className='text-2xl m-2 bg-yellow-100 p-3 rounded-md hover:bg-yellow-300'> <button> {question.options[0]}</button></p>
            <p className='text-2xl m-2 bg-yellow-100 p-3 rounded-md hover:bg-yellow-300'> <button> {question.options[1]}</button></p>
            <p className='text-2xl m-2 bg-yellow-100 p-3 rounded-md hover:bg-yellow-300'> <button> {question.options[2]}</button></p>
            <p className='text-2xl m-2 bg-yellow-100 p-3 rounded-md hover:bg-yellow-300'> <button> {question.options[3]}</button></p>
            </div>
            

            <h4 className='text-2xl mt-3 font-semibold'> {open ? <h1>{question.correctAnswer}</h1> : undefined}</h4>
            </div> 
        </div>
    );
};

export default Questions;