import React from 'react';
import './styles.css';

const Source = ({ source, setSelectedSource }) => {
  return (
    <button className='source-box' onClick={() => setSelectedSource(source.id)}>
      {source.name}
    </button>
  );
};

export default Source;
