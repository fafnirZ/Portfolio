import React, { ReactElement, useState, useEffect } from 'react';
import { Grid, Box, Typography, Card } from '@material-ui/core';
import styled from 'styled-components';

// own imports
import ModalObject from 'src/components/ModalObject';

interface Props {

}

const ButtonContainer = styled.button`
  width: 150px;
  height: 50px;
  background: var(--background-light);
  border: none;
  margin: 10px;

  /* transitions */
  transition: all .2s ease in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  
  &:hover {
    background: var(--primary);
  }

`;


const CardContainer = styled(Card)`
  width: 300px;
  height: 250px;
`;


const tempdata = [
  {},{},{},{},{},{}
]


const Projects: React.FC<Props> = ({}): ReactElement => {
  const cardColor = getComputedStyle(document.documentElement).getPropertyValue('--card-default')
  
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box margin="50px 0">
        <ButtonContainer>
          <Typography color="secondary">Frontend</Typography>
        </ButtonContainer>
        <ButtonContainer>
          <Typography color="secondary">Backend</Typography>
        </ButtonContainer>
        <ButtonContainer>
          <Typography color="secondary">Other</Typography>
        </ButtonContainer>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {tempdata.map((obj) => {
            return (
              <Grid item xs={12} md={4}>
                <CardContainer
                  style={{
                    background: cardColor
                  }}
                  elevation={5}
                  onClick={()=> {setOpen(true)}}
                >
                </CardContainer>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <ModalObject open={open} handleClose={handleClose}>
        hi
      </ModalObject>
    </Box>
  );
};

export default Projects;