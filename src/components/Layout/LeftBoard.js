
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';
import DashboardLogo from './DashboardLogo'
import Menu from './Menu'
export default class LeftBoard extends React.Component {
  constructor(props) {
    super(props); 
  } 
  
  render() {
    return (
      <StyledLeftBoard>
        <Grid item xs={12}  >
          <DashboardLogo /> 
          <Menu  />
        </Grid>
      </StyledLeftBoard>
    )
  }

}
const StyledLeftBoard = styled(Flex)`
min-height:100vh; 
background-color: #363740;
height: 100%;
`;

