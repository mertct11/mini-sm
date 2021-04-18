import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

import LeftBoard from '../components/Layout/LeftBoard';
import RightBoard from '../components/Layout/RightBoard';

import { addDummyUsers, setMenuType } from '../redux/Actions';
import { connect } from 'react-redux';
import DummyUsers from '../data/users.json'


import LoginPage from './Login';
import PostsPage from './Posts';
import UsersPage from './Users';


class Main extends React.Component {


  componentDidMount() {
    this.props.addDummyUsers(DummyUsers) // from fake APİ
    this.props.setMenuType("Login")
  }

  render() {
    return (
      <div>

        <StyledMain>
          <Grid container >
            <Grid item xs={3} className="left-frame">
              <LeftBoard />
            </Grid>
            <Grid item xs={3} className="spacer">
              <div>asd</div>
            </Grid>
            <Grid item xs={9} className="right-frame"  >
              <RightBoard />
              {this.props.menuType == 'Login' && <LoginPage />}
              {this.props.menuType == 'Users' && <UsersPage />}
              {this.props.menuType == 'Posts' && <PostsPage />}
            </Grid>
          </Grid>
        </StyledMain>
      </div>
    );
  }
}


const StyledMain = styled(Flex)`
display:flex;
min-height:100vh; 

.right-frame{
  display:flex;
  flex-direction:column;

}

.left-frame{
  position:fixed;
}

.spacer{ 
  width:100%; 
}
`;



const mapStateToProps = (state) => {
  return {
    users: state.login.users,
    menuType: state.menu.menuType,
  }
}


export default connect(mapStateToProps, { addDummyUsers, setMenuType })(Main)
