import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  const nextAuthor = () => {
    if (index < people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevAuthor = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(people.length - 1);
    }
  };

  const randomAuthor = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setIndex(randomIndex);
  };

  return (
    <section className="container">
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevAuthor}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextAuthor}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomAuthor}>
          suprise me
        </button>
      </article>
    </section>
  );
};

export default Review;
