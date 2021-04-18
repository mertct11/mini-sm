import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

import { addDummyUsers, setMenuType, setUser } from '../redux/Actions';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MCTextInput from '../components/MCTextInput'

import UserData from '../data/users.json'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            pass: null,
            errorText:null,
        }
        this.onChangeTextEmail = this.onChangeTextEmail.bind(this)
        this.onChangeTextPass = this.onChangeTextPass.bind(this)
    }

    componentDidMount() {
    }

    onChangeTextEmail(val) {
        this.setState({ email: val ,errorText:null})
    }

    onChangeTextPass(val) {
        this.setState({ pass: val,errorText:null })
    }

    handleSubmit() {
        let count = 0;
        UserData.forEach(element => {
            count = count + 1; 
            if (element.email == this.state.email && element.password == this.state.pass) { 
                this.props.setUser(element)
                this.props.setMenuType('Posts')
            }
        });

        if (count == UserData.length) {
            this.setState({ errorText: "Email or Pass invalid" })
        } 
    }


    render() {
        return (
            <StyledLogin>
                <Card className="login-card">
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Login
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                If you know  email and password from dummy data, you can login.
          </Typography>
                            <MCTextInput type={"email"} onChangeText={this.onChangeTextEmail} locked={false} label={"E-mail"} active={false} />
                            <MCTextInput type={"password"} onChangeText={this.onChangeTextPass} locked={false} label={"Password"} active={false} />
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ display: "flex", flexDirection: "row" }} >
                        <Button onClick={() => { this.handleSubmit() }} size="small" color="primary">
                            Login
        </Button>

                        {this.state.errorText && <span style={{color:"red" }} >
                            {this.state.errorText}
                        </span>}
                    </CardActions>
                </Card>
            </StyledLogin>
        );
    }
}


const StyledLogin = styled(Flex)`
display:flex;
min-height:70vh;   
justify-content:center;
align-items:center;

.login-card{ 
margin 0 auto ; 
}
`;

const StyledLogo = styled(Flex)`
display:flex;
justify-content:center;
align-items:center; 
`;



const mapStateToProps = (state) => {
    return {
        users: state.login.users,
        menuType: state.menu.menuType,
    }
}


export default connect(mapStateToProps, { addDummyUsers, setMenuType, setUser })(Login)
