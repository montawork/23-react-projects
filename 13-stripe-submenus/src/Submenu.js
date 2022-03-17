import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const refContainer = useRef(null);

  const { isSubmenuOpen, page, location } = useGlobalContext();
  const { title, links } = page;

  useEffect(() => {
    const { top, center } = location;
    const submenu = refContainer.current;
    submenu.style.left = center + 'px';
    submenu.style.top = top + 'px';
  }, [location]);

  return (
    <aside ref={refContainer} className={`submenu ${isSubmenuOpen && 'show'}`}>
      <section>
        <h4>{title}</h4>
        <div className={`submenu-center col-${links.length}`}>
          {links.map(({ label, icon, url }, index) => {
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
