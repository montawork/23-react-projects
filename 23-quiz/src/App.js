import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
  const { isStart, isLoading } = useGlobalContext();

  // if (isLoading) {
  //   return <Loading />;
  // }

  if (isStart) {
    return <Modal />;
  }

  return (
    <main>
      <SetupForm />
    </main>
  );
}

export default App;
