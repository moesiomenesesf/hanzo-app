import React, {Component} from 'react'
import { Card } from '../style/styles';

class Comment extends Component{
    constructor(props){
        super(props);

        this.state = {
            comment: this.props.content,
        }
    }

    render(){
        const {content} = this.props;
        return(
            <Card>
                <h3>{content.name}</h3>
                <h4>{content.email}</h4>
                <p>{content.body}</p>
            </Card>
        )
    }
}

export default Comment;