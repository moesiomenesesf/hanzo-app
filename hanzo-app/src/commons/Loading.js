import React, {Component} from 'react';
import LoadingGif from '../assets/loading.svg';
import {LoadingContainer} from '../style/styles'
class Loading extends Component{

    isVisible(visible){
        if(visible){
            return(
                <LoadingContainer>
                    <img src={LoadingGif} alt="loading"/>
                </LoadingContainer>
            )
        }else{
            return null;
        }
    }

    render(){
        const {visible} = this.props;
        return this.isVisible(visible);
    }
}

export default Loading;