import React from 'react';

const Questions = ({question}) => {
    return (
        <div>
          <div className=' bg-slate-200 mb-9 mt-7 w-2/3 inline-block rounded-md p-10'>
            <h2 className='text-3xl font-semibold mb-5'>{question.question}</h2>
            <div className='text-left'>
            <p className='text-2xl m-2'>1. {question.options[0]}</p>
            <p className='text-2xl m-2'>2. {question.options[1]}</p>
            <p className='text-2xl m-2'>3. {question.options[2]}</p>
            <p className='text-2xl m-2'>4. {question.options[3]}</p>
            </div>
            </div> 
        </div>
    );
};

export default Questions;