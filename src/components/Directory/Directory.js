import React from 'react';

import DirectoryItem from '../DirectoryItem/DirectoryItem';

import { DirectoryContainer } from './Directory.styles';

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(({ id, ...category }) => (
        <DirectoryItem key={id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
