import React, {Component} from 'react';
import {HeaderBar} from '../style/styles';
import Logo from '../assets/logo.jpg';

class Header extends Component{
    render(){
        return(
            <HeaderBar>
                <img src={Logo} alt="logoHanzo"></img>
            </HeaderBar>
        )
    }
};

export default Header;