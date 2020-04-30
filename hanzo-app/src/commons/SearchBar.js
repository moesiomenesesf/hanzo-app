import React, {Component} from 'react'
import {Bar, SearchContainer} from '../style/styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import LoadingGif from '../assets/loading.svg'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component{

    listenerClick = event => {
        const {value} = event.target;
        this.props.searchListener(value);
    }

    icon = (searching) =>{
        if(searching!==true){
            return( <FontAwesomeIcon className="iconBar" icon={faSearch}/>);
        }else{
            return( <img src={LoadingGif} className="iconBar" alt="loading"/>)
        }
    }

    render(){
        const {searching} = this.props;
        return(
            <SearchContainer>
            <Bar type='number' placeholder="Pesquisar por ID de Usuário" onChange={this.listenerClick}>
             </Bar>
             {this.icon(searching)}
            </SearchContainer>
           
        );
    }
}

export default SearchBar;