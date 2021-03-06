import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

import { connect } from 'react-redux';

import DummyPosts from '../data/posts.json'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { setPosts } from '../redux/Actions';


import db from '../firebase.config';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  fetchPosts = async () => {
    const response = db.collection('posts');
    const data = await response.get();
    console.log({ response })
    console.log({ data })
    data.docs.forEach(item => {
      console.log({ xxx: item.data() })
    })

    this.props.setPosts(data.docs)  

  }
  componentDidMount() {

    this.fetchPosts();

  }

  render() {
    return (
      <StyledPosts>
        {this.props.posts && this.props.posts.map((item, key) => {
          return (
            <Card key={key} className="card-container" >
              {key % 2 == 0 && <img className="img-container" src={item.data().image} />}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.data().title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.data().description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Like It
                </Button>
              </CardActions>
              {key % 2 == 1 && <img className="img-container" src={item.data().image} />}

            </Card>
          )
        })}
      </StyledPosts>
    );
  }
}


const StyledPosts = styled(Flex)`
display:flex;
flex-direction:column;
min-height:100vh; 

.card-container{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  margin: 20px auto;
  width:80%;
  height:200px;  
}
.img-container{
  display:flex;
  justify-content:center;
  align-items:center;
  height:200px;
  width:55%;
  object-fit:cover; 
}
`;



const mapStateToProps = (state) => {
  return {

    posts: state.posts.posts,
  }
}


export default connect(mapStateToProps, { setPosts })(Posts)
