import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    const rQuiz = quiz.data;
    const questions = rQuiz.questions;
    
    const showCorrectAns = question => {
      console.log(question);
    }

    return (
        <div>
          <div>
          <h2 className=' text-3xl font-bold mt-4'>Quiz Topic: <span className=' text-orange-400'> {rQuiz.name}</span></h2>
          </div>

          {
            questions.map(question => <Questions
            key={question.id}
            question={question}
            showCorrectAns={showCorrectAns}
            ></Questions>)
          }
        </div>
    );
};

export default Quiz;