import React, { ReactElement, useState, useEffect } from 'react';
import { Link, Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Avatar from 'src/assets/me-pixel.png';
import HackerWords from './animations/HackerWords';
interface Props {

}

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  height: calc(10vh - 10px*2);


  .image_container img {
    object-fit: cover;
    height: 100%;
    border-radius: 50%;
  }

  .text_container {
    margin: 30px;
  }

`;


const Navbar: React.FC<Props> = ({}): ReactElement => {
  return (
    <NavContainer>
      <Box className="image_container">
        <Link href="/">
          <img src={Avatar} alt="" />
        </Link>
      </Box>
      <Box className="text_container">
        <Typography variant="h5" color="secondary" >
          <HackerWords Word="Hi, I'm Jacky"/>
        </Typography>
      </Box>
    </NavContainer>   
  );
};

export default Navbar;