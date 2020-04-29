import React, {Component} from 'react';
import {Card, UserImage} from '../style/styles';

class Post extends Component{

    constructor(props){
        super(props);

        this.state = {
            post: this.props.content,
        }
    }


    render(){
        const {content} = this.props;
        return(
            <Card>
                <UserImage>
                    {content.userId}
                </UserImage>
                <h3>{content.title}</h3>
                <p>{content.body}</p>
            </Card>
        )
    }
}



export default Post;