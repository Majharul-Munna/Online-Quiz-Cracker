import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    const rQuiz = quiz.data;
    const questions = rQuiz.questions;
    console.log(rQuiz);
    return (
        <div>
          <div>
          <h2>quiz id : {rQuiz.id}</h2>
          </div>

          {
            questions.map(question => <Questions
            key={question.id}
            question={question}
            ></Questions>)
          }
        </div>
    );
};

export default Quiz;