import React, {Component, Fragment} from 'react';
import {Card, UserImage, Buttons} from '../style/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Post extends Component{

    constructor(props){
        super(props);

        this.state = {
            post: this.props.content,
            users: this.props.users
        }
    }

    listenerClick = () => {
        this.props.deleteListener(this.props.content.id);
    }

    render(){
        const {content, details, users} = this.props;
        if(details==null){
            return(
                <Card className={details}>
                    <UserImage>
                        {content.userId}
                    </UserImage>
                    <h3>{users.find(user=>user.id===content.userId)!==undefined?users.find(user=>user.id===content.userId).name:null}</h3>
                    <h3>{content.title}</h3>
                    <p>{content.body}</p>
                    <Buttons>
                        <Link to={`/details/${content.id}`}>
                            <button className="confirm">
                                <FontAwesomeIcon icon={faEye}/>
                                <label> Visualizar </label>
                            </button>
                        </Link>
                        <button className="remover" onClick={this.listenerClick.bind(this)}>
                            <FontAwesomeIcon icon={faTimes}/>
                            <label> Remover </label>
                        </button>
                    </Buttons>
                </Card>
            )
        }
        return(
            <Fragment>
                <Buttons>
                    <Link to={`/`}>
                        <button className="confirm back">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                            <label>Voltar</label>
                        </button>
                    </Link>
                </Buttons>
                
                <Card className={details}>
                    <UserImage>
                        {content.userId}
                    </UserImage>
                    <h3>{content.title}</h3>
                    <p>{content.body}</p>
                </Card>
            </Fragment>
            
        )
    }
}



export default Post;