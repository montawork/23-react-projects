import React, { useState, useContext } from 'react';
import sublinks from './data';

const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  // location
  const [location, setLocation] = useState({ top: 0, center: 0 });

  // sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // submenu
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const openSubmenu = () => setIsSubmenuOpen(true);
  const closeSubmenu = () => setIsSubmenuOpen(false);

  // pages
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState({
    title: '',
    links: [],
  });
  const targetPage = (index) => {
    setPage({
      title: sublinks[index].page,
      links: sublinks[index].links,
    });
    openSubmenu();
    setIndex(index);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        setIndex,
        targetPage,
        page,
        location,
        setLocation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => useContext(GlobalContext);

export { ContextProvider, useGlobalContext };
