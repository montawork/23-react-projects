import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
import Buttons from './Buttons';

function App() {
  const { loading, data } = useFetch();
  const [pageIndex, setPageIndex] = useState(0);
  const [followers, setFollowers] = useState([]);
  const [activePosition, setActivePosition] = useState(1);

  // buttons
  const allButtons = data.slice(0, data.length / 10);

  useEffect(() => {
    setFollowers(data.slice(pageIndex, pageIndex + 10));
  }, [pageIndex, data]);

  // increment
  const nextPage = () => {
    if (pageIndex <= 80) {
      setPageIndex(pageIndex + 10);
    } else {
      setPageIndex(0);
    }
    if (activePosition < 10) {
      setActivePosition(activePosition + 1);
    } else {
      setActivePosition(1);
    }
  };
  // decrement
  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 10);
    } else {
      setPageIndex(90);
    }
    if (activePosition > 1) {
      setActivePosition(activePosition - 1);
    } else {
      setActivePosition(10);
    }
  };

  // increment / decrement by number
  const selectPage = (index) => {
    const position = (index + 1) * 10 - 10;
    setPageIndex(position);
    setActivePosition(index + 1);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {allButtons.map((btn, index) => {
            return (
              <Buttons
                key={index}
                position={index}
                selectPage={selectPage}
                activePosition={activePosition}
              />
            );
          })}

          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
