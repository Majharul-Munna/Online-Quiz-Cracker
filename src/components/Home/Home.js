import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    const rTopics = topics.data;
    return (
        <div>
            <div>
                <Header></Header>
            </div>

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