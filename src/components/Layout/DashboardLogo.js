
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';
import Logo from '../../images/dashboard-img.png'
const useStyles = makeStyles((theme) => ({

    leftFrame: {
        height: '100%'
    },
    media: {
        height: 140,
    },
}));

export default function LeftBoard() {
    const classes = useStyles();
    return (
        <StyledLogo>
            <img className="img-cont" src={Logo} />
        </StyledLogo>
    );
}


const StyledLogo = styled(Flex)`
display:flex;
justify-content:center;
height:122px;
align-items:center; 

.img-cont{ 
     width:100%;
    height:122px;
    object-fit:stretch; 
}

`;

