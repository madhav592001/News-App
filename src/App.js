import React from 'react';
import Articles from './components/Articles.jsx';
import NavBar from './components/NavBar.jsx';
import Sources from './components/Sources.jsx';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='home-screen'>
        <div className='sources-component'>
          <Sources />
        </div>

        <div className='news-component'>
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default App;
