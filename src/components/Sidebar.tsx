import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Box } from '@material-ui/core';

interface Props {

}

const SideContainer = styled.div`
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const links = [
  {'display': 'Home', 'link': '/home'}, 
  {'display': 'About me', 'link': '/about'},
  {'display': 'Projects', 'link': '/projects'},
  {'display': 'Blogs', 'link': '/blogs'},
]


const Sidebar: React.FC<Props> = ({}): ReactElement => {
  return (
    <SideContainer>
      {links.map((item)=> {
        return (
          <Box margin="20px">
            <Link href={item.link} color="secondary">{item.display}</Link>
          </Box>
        )
      })}
    </SideContainer>
  );
};

export default Sidebar;