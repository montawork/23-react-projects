import React, { useState, useContext } from 'react';

const MainContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const openModal = () => setIsModalOpen(true);

  return (
    <MainContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isSidebarOpen,
        setIsSidebarOpen,
        openModal,
        openSidebar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

// custom hook
const useCustomContext = () => useContext(MainContext);

export { MainContext, GlobalContextProvider, useCustomContext };
