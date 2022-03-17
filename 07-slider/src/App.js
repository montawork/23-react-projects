import React, { useState, useEffect } from 'react';
import Button from './Button';
import Slide from './Slide';
import data from './data';
function App() {
  const [index, setIndex] = useState(0);

  const indexControl = (val) => {
    return val > data.length - 1
      ? (val = 0)
      : val < 0
      ? (val = data.length - 1)
      : val;
  };

  const prevPerson = () => {
    setIndex(indexControl(index - 1));
  };

  const nextPerson = () => {
    setIndex(indexControl(index + 1));
  };

  useEffect(() => {
    const nextInt = setInterval(() => setIndex(indexControl(index + 1)), 3000);
    return () => clearInterval(nextInt);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        <Slide data={data} index={index} />
        <Button nextPerson={nextPerson} prevPerson={prevPerson} />
      </div>
    </section>
  );
}

export default App;
