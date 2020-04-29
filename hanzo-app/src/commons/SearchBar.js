import React, {Component} from 'react'
import {Bar, SearchContainer} from '../style/styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component{

    listenerInput = event => {
        const {value} = event.target;
        this.props.searchListener(value);
    }

    render(){
        return(
            <SearchContainer>
            <Bar type='number' onChange={this.listenerInput} placeholder="Pesquisar por ID de Usuário">
             </Bar>
             <FontAwesomeIcon icon={faSearch}/>
            </SearchContainer>
           
        );
    }
}

export default SearchBar;