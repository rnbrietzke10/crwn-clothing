import React from 'react';

import CategoryItem from '../CategoryItem/CategoryItem';

import './Directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ id, ...category }) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
