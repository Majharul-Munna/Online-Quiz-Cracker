import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=' bg-slate-300'>
            <h1 className='text-white  float-left ml-10 my-2 text-2xl font-extrabold'><span className=' bg-orange-500 px-3 rounded-md'>Quiz</span><span className=' bg-yellow-500 px-3 rounded-md'>ziuQ</span></h1>
            <Link className=' text-2xl font-semibold text-white mx-4' to='/home'>Home</Link>
            <Link className=' text-2xl font-semibold text-white mx-4' to='/quiztopics'>QuizTopics</Link>
            <Link className=' text-2xl font-semibold text-white mx-4' to='/statics'>Statics</Link>
            <Link className=' text-2xl font-semibold text-white mx-4' to='/blog'>Blog</Link>
        </div>
    );
};

export default NavBar;