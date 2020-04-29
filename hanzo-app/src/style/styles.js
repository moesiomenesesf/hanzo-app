import styled from 'styled-components';
import variables from './variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    margin-top: 54px;
`;

export const Card = styled.div`
    padding: 20px;
    margin: 4px;
    border: 1px solid #f0f0f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: background-color .2s linear;
    background-color: ${variables.backgroundColor};
    
    &:hover{
        transition: background-color .2s linear;
        background-color:${variables.secondaryColor};
        cursor:pointer;
    }

    label{
        width: 90%;
        text-align: justify;
        display: flex;
        align-items: center;
    }

    h3{
        text-align: center;
        font-size: 1em;
    }

    p{
        text-align: justify;
        font-size: 0.9em;
    }
`;

export const UserImage = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff0090;
    color: white;
`;

export const HeaderBar = styled.div`
    width: 100%;
    background-color: ${variables.primaryColor};
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:2;

    img{
        width: 115px;
    }
`;

export const Bar = styled.input`
    width: 100%;
    height: 25px;
    padding-inline-start: 5px;
    border-radius: 2px;
    border: 1px solid ${variables.borderColor};
    z-index:1;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

`;

export const SearchContainer = styled.div`
    width: 60%;
    position: relative;
    margin: 0 auto;
    .fa-search{
        position: absolute;
        top: 7px;
        right: 1px;
        color: ${variables.secondaryColor};
    }
`;


export const Message = styled.label`
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    background-color: ${variables.secondaryColor};
    padding: 20px;
    color: ${variables.textColor}A5;
`;

export const LoadingContainer = styled.div`
    position: absolute;
    top:0;
    left:0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: ${variables.backgroundColor}A5;
    display: flex;
    justify-content: center;
    img{
        width: 80px;
    }
`;

export const CommentContainer = styled.div`
    width: 100%;
    background-color: ${variables.borderColor};
    border: 1px solid ${variables.borderColor};
`;
