
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import {   setMenuType , setUser} from '../../redux/Actions'; 
import { connect } from 'react-redux';

class RightBoard extends React.Component {


    handleLogOut=()=>{
        this.props.setUser(null)
        this.props.setMenuType('Login')
    }


    render() {
        return (
            <StyledRightBoard>
                <Grid container >
                    <Grid className="ri-left" item xs={6}>
                        <span>
                            {this.props.menuType}
                        </span>
                    </Grid>
                    <Grid item xs={6}>
                        {this.props.menuType !== 'Login' && this.props.user ?
                            <div className="ri-right">
                                <div className="icons-container" >
                                    <SearchIcon className="icon" />
                                    <NotificationsIcon className="icon" />
                                </div>

                                <span className="block-line" >
                                    |
                    </span>
                                <div className="username-container" >
                                    <span className="username" >
                                        {this.props.user.username}
                                        <small onClick={()=>{this.handleLogOut()}} style={{color:"gray", cursor:"pointer"}} >Log Out</small>    
                                    </span>
                                    <Avatar alt="Remy Sharp" src={this.props.user.image} />
                                </div> </div> : <span style={{ color: "gray", display: "flex", justifyContent: "flex-end", paddingRight: 20 }} className="username" >
                                First, you must log in.
                        </span>
                        }
                    </Grid>

                </Grid>

            </StyledRightBoard>
        );
    }
}


const StyledRightBoard = styled(Flex)`
 display:flex; 
 height: 17vh;
align-items:center;
 .ri-left{ 
     display:flex;
     align-items:center;
     justify-content:flex-start; 
     padding-left:30px;
 } 

 .ri-right{ 
    display:flex;
    align-items:center;
    justify-content:flex-end; 
    padding-right:30px;


    .username-container 
{
    display:flex;
    flexDirection:row;
    align-items:center;
     
} 

.username{
    margin-right:20px;
    display:flex;
    flex-direction:column;
}
    .icons-container{ 
        margin-right:50px; 
      
        .icon{
            width:40px;
        }
    }

    .block-line{
        margin-right:25px;
        color:#A4A6B3;
    }

 }
`;


const mapStateToProps = (state) => {
    return {
        users: state.login.users,
        menuType: state.menu.menuType,
        user: state.login.user,
    }
}


export default connect(mapStateToProps, {   setMenuType,setUser })(RightBoard)
 