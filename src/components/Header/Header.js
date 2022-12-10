import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { FlexBox, LogoLink } from '../styled/styled';

const Header = () => {
  return (
    <div>
      <Container>
        <FlexBox justifyContent='space-between' sx={{
          padding: '2rem 0'
        }}>
          <LogoLink underline="none" to='/'>sufian</LogoLink>
          <Box>
            <Button variant="outlined" startIcon={<DownloadRoundedIcon />}>Download CV</Button>
          </Box>
        </FlexBox>
      </Container>
    </div>
  );
};

export default Header;