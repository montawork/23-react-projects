import React from 'react';
import { FaBars } from 'react-icons/fa';
// import { MainContext } from './context';
import { useCustomContext } from './context';

const Home = () => {
  const { openModal, openSidebar } = useCustomContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
