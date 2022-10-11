import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statics = () => {
    const topics = useLoaderData();
    const rTopics = topics.data;
    console.log(rTopics);
    return (
        <div className=' inline-block justify-center mt-14'>
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