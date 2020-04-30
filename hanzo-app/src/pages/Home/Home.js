import React, { Component, Fragment } from 'react';
import '../../style/variables.scss';
import './Home.scss';
import Header from '../../commons/Header'
import ApiService from '../../service/ApiService'
import Post from '../../commons/Post';
import SearchBar from '../../commons/SearchBar'
import Loading from '../../commons/Loading'
import MessageBox from '../../commons/MessageBox'
class Home extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      posts: [],
      users: [],
      loadingVisible: false,
      searching: false,
      message: ""
    }
  }

  
  componentDidMount(){
    this.setState({loadingVisible:true});
    ApiService.findAllPosts()
      .then(res => {
        this.setState({posts : [...this.state.posts, ...res]});
        this.setState({loadingVisible:false});
        ApiService.findAllUsers()
          .then(res =>{
            this.setState({users : [...this.state.users, ...res]});
          });
      });
  }

  searchListener = userId => {
    this.setState({searching : true});
    if(userId !== ""){
      ApiService.findPostByUser(userId)
      .then(res =>{
        if(!res.length){
          this.setState({message:"Não foi possível encontrar um usuário com este ID. Tente outro, por favor."});
        }else{
          this.setState({message:''});
        }
        this.setState({
          posts:res          
        })
        this.setState({searching : false});
      })
    }else{
      ApiService.findAllPosts()
      .then(res => {
        this.setState({posts : res});
        this.setState({searching : false});
      });
    }
    
  }

  deleteListener = postId => {
    this.setState({loadingVisible:true});
    ApiService.deletePost(postId)
    .then(res =>{
      this.setState({loadingVisible:false, message: "Post excluído com sucesso."});
    })
  }

  render(){
    return (
      <Fragment>
        <Loading visible={this.state.loadingVisible}/>
        <Header/>
        <SearchBar searchListener={this.searchListener} searching={this.state.searching}></SearchBar>
        <MessageBox message={this.state.message}/>
        {this.state.posts.map(post => 
            <Post key={post.id} content={post} details={null} users={this.state.users} deleteListener={this.deleteListener} />
        )}
      </Fragment>
    );
  }
  
}

export default Home;
