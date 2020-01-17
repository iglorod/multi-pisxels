import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/context';

import Layout from './components/Layout/Layout';

function App() {
  let context = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem('refreshToken') !== null) {
      const expiresIn = localStorage.getItem('expiresIn');
      if (+Math.floor((new Date().getTime() / 1000)) >= expiresIn) {
        context.refreshToken();
      }
      context.signInByLocalData();
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
