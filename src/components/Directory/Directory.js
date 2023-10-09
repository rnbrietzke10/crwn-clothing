import React from 'react';

import DirectoryItem from '../DirectoryItem/DirectoryItem';

import './Directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ id, ...category }) => (
        <DirectoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
