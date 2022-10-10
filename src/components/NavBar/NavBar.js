import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=' bg-slate-300 '>
            <Link className=' text-2xl font-semibold text-white m-4' to='/home'>Home</Link>
            <Link className=' text-2xl font-semibold text-white m-4 py-7' to='/quiztopics'>Quiz Topics</Link>
            <Link className=' text-2xl font-semibold text-white m-4 py-7' to='/statics'>Statics</Link>
            <Link className=' text-2xl font-semibold text-white m-4 py-7' to='/blog'>Blog</Link>
        </div>
    );
};

export default NavBar;