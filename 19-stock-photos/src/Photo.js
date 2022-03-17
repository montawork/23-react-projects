import React from 'react';

const Photo = ({
  likes,
  urls: { small },
  user: {
    first_name,
    last_name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="photo">
      <img src={small} alt="" />
      <div className="photo-info">
        <div>
          <h4>{`${first_name} ${last_name}`}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt="" className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
