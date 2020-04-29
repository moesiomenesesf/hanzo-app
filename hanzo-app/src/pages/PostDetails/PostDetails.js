import React, { Component, Fragment } from 'react';
import './PostDetails.scss';
import Header from '../../commons/Header'
import ApiService from '../../service/ApiService'
import Loading from '../../commons/Loading'
import MessageBox from '../../commons/MessageBox'
import Comment from '../../commons/Comment';

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
    ApiService.findCommentByPost(postId)
      .then(res => {
        this.setState({comments : res});
        this.setState({loadingVisible:false});
      });
  }

  render(){
    return (
      <Fragment>
        <Loading visible={this.state.loadingVisible}/>
        <Header/>
        <MessageBox message={this.state.message}/>
        {this.state.comments.map(comment => 
          <Comment key={comment.id} content={comment}/>
        )}
      </Fragment>
    );
  }
  
}

export default PostDetails;
