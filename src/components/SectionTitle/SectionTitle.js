import React from 'react';

const SectionTitle = ({title}) => {
  return (
    <div className='my-8'>
      <h2 className='text-3xl font-semibold capitalize'>{title}</h2>
    </div>
  );
};

export default SectionTitle;