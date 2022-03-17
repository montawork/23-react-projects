import React from 'react';

const Categories = ({ category, filterMenu }) => {
  return (
    <>
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterMenu(category)}
      >
        {category}
      </button>
    </>
  );
};

export default Categories;
