import React, { useState } from 'react';
import data from './data';

function App() {
  const [paraAmount, setParaAmount] = useState(0);
  const [paragraphs, setparagraphs] = useState([]);

  const generateParagraphs = (e) => {
    e.preventDefault();
    console.log(typeof paraAmount);
    if (paraAmount < 1) {
      setparagraphs(data.slice(0, 1));
    } else if (paraAmount > 9) {
      setparagraphs(data.slice(0, 9));
    } else {
      setparagraphs(data.slice(0, paraAmount));
    }
  };

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs : </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={paraAmount}
          onChange={(e) => setParaAmount(Number(e.target.value))}
          min="1"
          max="9"
        />
        <button className="btn" onClick={generateParagraphs}>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
