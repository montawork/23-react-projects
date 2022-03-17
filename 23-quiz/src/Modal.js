import React, { useState } from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { questions, startNewQuiz, resetQuiz } = useGlobalContext();
  const [correct, setCorrect] = useState(0);
  const [quizIndex, setquizIndex] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const { question, correct_answer, incorrect_answers } = questions[quizIndex];

  let answers = [...incorrect_answers];
  let tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  console.log(answers);

  const nextQuiz = (e) => {
    setquizIndex(quizIndex + 1);
    if (e.target.textContent === correct_answer) {
      setCorrect(correct + 1);
    }
    if (quizIndex >= questions.length - 1) {
      setquizIndex(questions.length - 1);
      setQuizOver(true);
    }
  };

  React.useEffect(() => {
    setScore(~~((correct * 100) / questions.length));
  }, [correct, questions.length]);

  return (
    <>
      <div className={`modal-container ${quizOver ? 'isOpen' : null}`}>
        <div className="modal-content">
          <h2>congrats</h2>
          <p>You answered {score}% of questions correctly</p>
          <div
            className="close-btn"
            onClick={() => {
              startNewQuiz(false);
              setScore(0);
              setCorrect(0);
              resetQuiz();
            }}
          >
            play again
          </div>
        </div>
      </div>
      <section className="quiz">
        <p className="correct-answers">
          correct answers {correct}/{quizIndex}
        </p>
        <article className="container">
          <h2>{question}</h2>
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button className="answer-btn" key={index} onClick={nextQuiz}>
                  {answer}
                </button>
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuiz}>
          next question
        </button>
      </section>
    </>
  );
};

export default Modal;
