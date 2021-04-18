import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Button from '@material-ui/core/Button';
import MenuData from '../../data/menuData.json'

import {   setMenuType } from '../../redux/Actions';
import { connect } from 'react-redux';

class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isChoosen: null,
        }
    }


    handleClick=(menuType)=>{ 
        this.props.setMenuType(menuType)

    }

    render() {
        return (
            <StyledMenu> 
                {/* <h1 className="menu-text" >{this.props.user?.email}</h1>  */}
                {this.props.user ? MenuData.map((item, key) => {
                    return (
                        <Button onClick={()=>{this.handleClick(item.title)}} key={key} style={this.props.menuType == item.title ? { borderRadius: 0, borderLeftColor: "white", borderLeftWidth: 6, borderLeftStyle: "solid" } : null} className="button-text"  >
                            <ArrowForwardIosRoundedIcon />
                            <span className="menu-text" >{item.title}</span>
                        </Button>
                    )
                })
                    :
                    <Button onClick={()=>{this.handleClick('Login')}} style={this.props.menuType == 'Login' ? { borderRadius: 0, borderLeftColor: "white", borderLeftWidth: 6, borderLeftStyle: "solid" } : null} className="button-text"  >
                        <ArrowForwardIosRoundedIcon />
                        <span className="menu-text" >Login</span>
                    </Button>
                }
            </StyledMenu>
        );
    }
}


const StyledMenu = styled(Flex)`
display:flex;
justify-content:center; 
flex-direction:column;


.menu-text{
    display:flex;
    justify-content:center;
    align-items:center;
}



.button-text{
justify-content:center; 
    color:#A4A6B3;
    padding:15px;
    background-color:transparent
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
}

`

    ;




const mapStateToProps = (state) => {
    return {
        user: state.login.user,
        users: state.login.users,
        users: state.menu.menu,
        menuType: state.menu.menuType,
    }
}


export default connect(mapStateToProps, {setMenuType})(Menu)
