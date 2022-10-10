import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    const rTopics = topics.data;
    console.log(rTopics);
    return (
        <div>
            <h2>this is home {rTopics.length}</h2>

            {
                rTopics.map(topic => <Topics 
                    key={topic.id}
                    topic={topic}
                    ></Topics>)
            }
        </div>
    );
};

export default Home;