import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const QuizTopics = () => {
    const topics = useLoaderData();
    const rTopics = topics.data;
    return (
        <div>
            {
                rTopics.map(topic => <Topics
                    key={topic.id}
                    topic={topic}
                ></Topics>)
            }
        </div>
    );
};

export default QuizTopics;