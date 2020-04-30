import React, {Component} from 'react'
import {Bar, SearchContainer} from '../style/styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component{

    listenerClick = event => {
        const {value} = event.target;
        this.props.searchListener(value);
    }

    render(){
        return(
            <SearchContainer>
            <Bar type='number' placeholder="Pesquisar por ID de Usuário" onChange={this.listenerClick}>
             </Bar>
             <FontAwesomeIcon icon={faSearch}/>
            </SearchContainer>
           
        );
    }
}

export default SearchBar;