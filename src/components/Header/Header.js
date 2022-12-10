import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox } from '../styled/styled';

const Header = () => {
  return (
    <div>
      <Container>
        <FlexBox justifyContent='space-between'>
          <Link to='/'>sufian</Link>
          <Box>
            <Button variant="outlined"><DownloadRoundedIcon /> Download CV</Button>
          </Box>
        </FlexBox>
      </Container>
    </div>
  );
};

export default Header;