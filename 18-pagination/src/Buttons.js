import React from 'react';

const Buttons = ({ position, selectPage, activePosition }) => {
  return (
    <button
      className={`page-btn ${
        activePosition === position + 1 ? 'active-btn' : null
      }`}
      onClick={() => selectPage(position)}
    >
      {position + 1}
    </button>
  );
};

export default Buttons;
