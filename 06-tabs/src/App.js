import React, { useState, useEffect } from 'react';
import Loading from './loading';
import { FaAngleDoubleRight } from 'react-icons/fa';
// import Tabs from './Tabs';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [tabs, setTabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const fetchTabs = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setTabs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  if (isLoading) {
    return (
      <section style={{ marginTop: '4rem' }}>
        <Loading />
      </section>
    );
  }

  const { title, dates, duties, company } = tabs[index];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {tabs.map((tab, i) => {
            return (
              <button
                key={tab.id}
                className={i === index ? 'job-btn active-btn' : 'job-btn'}
                onClick={() => setIndex(i)}
              >
                {tab.company}
              </button>
            );
          })}
        </div>
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {duties.map((p, i) => {
            return (
              <div className="job-desc" key={i}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{p}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn">more info</button>
    </section>
  );
}

export default App;
