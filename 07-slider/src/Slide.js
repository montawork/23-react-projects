import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Slide = ({ data, index }) => {
  return (
    <>
      {data.map((slide, i) => {
        const { image, name, title, quote, id } = slide;
        let position = 'nextSlide';
        if (index === i) position = 'activeSlide';
        if (index - 1 === i || (index === 0 && i === data.length - 1))
          position = 'lastSlide';
        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
    </>
  );
};

export default Slide;
