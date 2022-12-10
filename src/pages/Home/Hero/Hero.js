import { Box } from '@mui/material';
import React from 'react';
import { FlexBox } from '../../../components/styled/styled';

const Hero = () => {
  return (
    <FlexBox justifyContent='space-between' className='bg-purple-200'>
      <Box>
        <h1 className='text-5xl'>Abu Sufian</h1>
        <h3 className='text-2xl'>Frontend Web Developer</h3>
      </Box>
      <div className='bg-gradient-to-b from-amber-200 to-blue-900'>
        <img className='' src="https://i.ibb.co/Fw3XzSR/sufian.png" alt="" />
      </div>
    </FlexBox>
  );
};

export default Hero;