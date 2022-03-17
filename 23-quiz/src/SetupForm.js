import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const {
    getQuestionsNumber,
    nbrQuestions,
    getCategory,
    category,
    slectDificult,
    difficulty,
    startNewQuiz,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    startNewQuiz(true);
  };

  return (
    <section className="quiz quiz-small">
      <form className="setup-form" onSubmit={handleSubmit}>
        <h2>setup quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">Number Of Questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-input"
            min="1"
            max="50"
            value={nbrQuestions}
            onChange={(e) => getQuestionsNumber(+e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            value={category}
            onChange={(e) => getCategory(e.target.value)}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="form-input"
            value={difficulty}
            onChange={(e) => slectDificult(e.target.value)}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button className="submit-btn" type="submit">
          start
        </button>
      </form>
    </section>
  );
};

export default SetupForm;
