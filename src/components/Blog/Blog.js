import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 mb-7 inline-block align-middle w-1/2'>
            <div className=' bg-slate-200 my-5 py-4 rounded-md text-left px-5'>
                <h2 className='text-3xl font-semibold'>What is the purpose of React Router ?</h2>
                <p className='text-2xl mt-3 px-5'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className=' bg-slate-200 my-5 py-4 rounded-md text-left px-5'>
                <h2 className='text-3xl font-semibold'>How does context Api work ?</h2>
                <p className='text-2xl mt-3 px-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className=' bg-slate-200 my-5 py-4 rounded-md text-left px-5'>
                <h2 className='text-3xl font-semibold'>All About useRef !</h2>
                <p className='text-2xl mt-3 px-5'>useRef is a hook that can be tricky to get to grips with since it’s one that you might only meet once in a blue moon. That’s by design.But understanding what it is and what it does means gaining a much better understanding of how React works overall.</p>
            </div>
        </div>
    );
};

export default Blog;