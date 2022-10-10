import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topic}) => {
    return (
        <div className=' bg-slate-200 m-9 inline-block w-1/4 h-1/3 align-middle mt-7 rounded-md'>
            <img className=' w-full h-full' src= {topic.logo} alt="" />
            <h1 className='text-3xl mt-3'>Name: {topic.name}</h1>
            <h3 className='text-2xl mt-3'>Total Question: {topic.total}</h3>
            <button className=' bg-orange-500 mt-5 mb-7 px-9 py-1 rounded-md'> <Link to={`/topic/${topic.id}`}>Start Quiz</Link></button>
        </div>
    );
};

export default Topics;