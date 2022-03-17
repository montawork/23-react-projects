import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Button = ({ prevPerson, nextPerson }) => {
  return (
    <>
      <button className="prev" onClick={prevPerson}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextPerson}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default Button;
