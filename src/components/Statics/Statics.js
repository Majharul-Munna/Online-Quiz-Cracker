import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statics = () => {
    const topics = useLoaderData();
    const rTopics = topics.data;
    return (
        <div className=' inline-block justify-center mt-14'>
            <h1 className='text-3xl font-bold text-orange-400 mb-10'>Top Question Chart</h1>
            <BarChart width={600} height={300} data={rTopics}>
                <XAxis dataKey="name" stroke="orange" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="orange" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Statics;