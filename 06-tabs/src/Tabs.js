import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Tabs = ({ id, title, dates, duties, company }) => {
  return (
    <div className="jobs-center">
      <div className="btn-container">
        <button className="job-btn active-btn">tommy</button>
      </div>
      <div className="job-info">
        <h3>job title</h3>
        <h4>company</h4>
        <p className="job-date">22/02/2020</p>
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            voluptatem quasi minima sit aperiam quod necessitatibus modi, aut
            ea! Suscipit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
