import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [desc, setDesc] = useState(info.slice(0, 130));
  console.log(desc.length);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {desc} ...{' '}
          {desc.length > 130 ? (
            <button onClick={() => setDesc(info.slice(0, 130))}>
              Show Less
            </button>
          ) : (
            <button onClick={() => setDesc(info)}>Show More</button>
          )}
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
