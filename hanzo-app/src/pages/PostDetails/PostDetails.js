import React, { Component, Fragment } from 'react';
import './PostDetails.scss';
import Header from '../../commons/Header'
import ApiService from '../../service/ApiService'
import Loading from '../../commons/Loading'
import MessageBox from '../../commons/MessageBox'
import Comment from '../../commons/Comment';
import Post from '../../commons/Post';
import {CommentContainer} from '../../style/styles'

class PostDetails extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      post:{},
      comments: [],
      users: [],
      loadingVisible: false,
      message: ""
    }
  }
  
  componentDidMount(){
    const {postId} = this.props.match.params;
    this.setState({loadingVisible:true});
    ApiService.findPostBy(postId)
      .then(res => {
        
        this.setState({post : res});

        ApiService.findCommentByPost(postId)
        .then(res => {
          this.setState({comments : res});
          this.setState({loadingVisible:false});
        });
    });
      
  }

  render(){
    return (
      <Fragment>
        <Loading visible={this.state.loadingVisible}/>
        <Header/>
        <MessageBox message={this.state.message}/>
        <Post content={this.state.post} details={"details selected"}/>
        <h4>Comentários</h4>
        <CommentContainer >
          {this.state.comments.map(comment => 
            <Comment key={comment.id} content={comment} details={"details comment"}/>
          )}
        </CommentContainer>
      </Fragment>
    );
  }
  
}

export default PostDetails;
