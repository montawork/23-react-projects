import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaUserLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  // current value
  const [currentVal, setCurrentVal] = useState('name');

  const fetchUser = async () => {
    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();

    const [userData] = data.results;

    const {
      name: { first, last },
      email,
      dob: { age },
      location: {
        street: { number, name },
      },
      phone,
      login: { username },
      picture: { large },
    } = userData;

    setUser({
      name: `${first} ${last}`,
      email,
      age,
      location: `${number} ${name}`,
      phone,
      username,
      img: large,
    });
    setCurrentVal('name');
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const getCurrentVal = (e) => {
    if (e.target.classList.contains('icon')) {
      setCurrentVal(e.target.dataset.val);
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={user?.img || defaultImage}
            alt={user.name}
            className="user-img"
          />
          <p className="user-title">My {currentVal} is</p>
          <p className="user-value">{user[currentVal]}</p>
          <div className="values-list">
            <button
              className="icon"
              onMouseEnter={getCurrentVal}
              data-val="name"
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-val="email"
              onMouseEnter={getCurrentVal}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-val="age"
              onMouseEnter={getCurrentVal}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-val="location"
              onMouseEnter={getCurrentVal}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-val="phone"
              onMouseEnter={getCurrentVal}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-val="username"
              onMouseEnter={getCurrentVal}
            >
              <FaUserLock />
            </button>
          </div>
          <button className="btn" onClick={fetchUser}>
            {isLoading ? 'Loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
