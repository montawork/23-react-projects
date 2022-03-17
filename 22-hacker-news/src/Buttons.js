import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { page, nbrPages, nextPage, prevPage, isLoading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button onClick={prevPage} disabled={isLoading}>
        prev
      </button>
      <p>
        {page} of {nbrPages}
      </p>
      <button onClick={nextPage} disabled={isLoading}>
        next
      </button>
    </div>
  );
};

export default Buttons;
