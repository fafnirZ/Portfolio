import React, { ReactElement } from 'react';
import { Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  
}

const Container = styled.div`
  margin: 100px 450px;
  display: grid;
  grid-template-rows: 400px 40px;
  grid-template-columns: 400px 150px;
  grid-template-areas: 
  "Info ."
  ". button";

  #text {
    grid-area: Info;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #btn {
    grid-area: button
  }
  

`;

const Homepage: React.FC<Props> = ({}): ReactElement => {
  return (
    <Container>
      <Typography variant="h5" color="secondary" id="text">
        Third year, Software Engineer
      </Typography>
      <Button variant="outlined" color="primary" id="btn">
        contact me
      </Button>
    </Container>
  )
};

export default Homepage;