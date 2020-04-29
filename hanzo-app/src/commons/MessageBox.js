import React, {Component} from 'react';
import {Message} from '../style/styles';
class MessageBox extends Component{
    render(){
        const {message} = this.props;
        if(message!==""){
            return(
                <Message>{message}</Message>
            )
        }else{
            return null;
        }

    }
}
export default MessageBox;