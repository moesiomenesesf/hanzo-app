import React, { Component, Fragment } from 'react';
import '../../style/variables.scss';
import './Home.scss';
import Header from '../../commons/Header'
import ApiService from '../../service/ApiService'
import Post from '../../commons/Post';
import SearchBar from '../../commons/SearchBar'
import Loading from '../../commons/Loading'
import MessageBox from '../../commons/MessageBox'
import {Link} from 'react-router-dom'

class Home extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      posts: [],
      users: [],
      loadingVisible: false,
      message: ""
    }
  }

  
  componentDidMount(){
    this.setState({loadingVisible:true});
    ApiService.findAllPosts()
      .then(res => {
        this.setState({posts : [...this.state.posts, ...res]});
        this.setState({loadingVisible:false});
      });
  }

  searchListener = userId => {
    this.setState({loadingVisible:true});
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
        this.setState({loadingVisible:false});
      })
    }else{
      ApiService.findAllPosts()
      .then(res => {
        this.setState({posts : res});
      });
      this.setState({loadingVisible:false});
    }

    
  }

  render(){
    return (
      <Fragment>
        <Loading visible={this.state.loadingVisible}/>
        <Header/>
        <SearchBar searchListener={this.searchListener}></SearchBar>
        <MessageBox message={this.state.message}/>
        {this.state.posts.map(post => 
          <Link to={`/details/${post.id}`} key={post.id}>
            <Post content={post}/>
          </Link>
        )}
      </Fragment>
    );
  }
  
}

export default Home;
