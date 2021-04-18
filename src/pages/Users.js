import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
class Users extends React.Component {


  componentDidMount() { 

  }

  render() {
    return (
      <StyledUsers>
        <Grid container    >
          {this.props.users && this.props.users.map((item, key) => {
            return (
              <Grid item xs={4}   >
                <Card className="card-container"  >
                  <img className="img-container" src={item.image} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> 
                      {item.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Set Meet
        </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
          }
        </Grid>

      </StyledUsers>
    );
  }
}


const StyledUsers = styled(Flex)`
display:flex;
justify-content:center;
align-items:center;

.card-container{
  margin-left:40px;
  margin-right:40px;
  margin-top:40px;
  margin-bottom:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column; 
  height:320px;  
}
.img-container{
  display:flex;
  justify-content:center;
  align-items:center;
  height:200px;
  width:100%;
  object-fit:cover; 
}
`;



const mapStateToProps = (state) => {
  return {

    users: state.login.users,
  }
}


export default connect(mapStateToProps, {})(Users)
