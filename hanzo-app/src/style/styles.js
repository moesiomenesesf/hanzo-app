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
    margin: 4px 0;
    border: 1px solid #f0f0f0;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${variables.backgroundPost};
    
    &.selected{
        background-color: ${variables.terciaryColor};
    }

    &.comment{
        background-color: ${variables.backgroundComment};
    }

    &.post{
        background-color: ${variables.backgroundPost};
    }

    label{
        width: 90%;
        line-height: 100%;
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
    width: 70%;
    position: relative;
    margin: 0 auto 18px;
    .fa-search{
        position: absolute;
        top: 7px;
        right: 1px;
        color: ${variables.secondaryColor};
    }
`;

export const Buttons = styled.div`
    @media only screen and (max-width: 450px) {
        flex-direction: column;
        button{
            align-self: center;
            margin: 0 0 !important;
            &.confirm{
                margin-bottom: 5px !important;
            }
        }
    }

    display: flex;
    flex-direction: row;
    margin-top: 10px;
    
    a{
        cursor:default;
    }
    button{
        display: flex;
        padding: 10px 20px;
        margin: 0 5px;
        align-items: flex-end;
        border: none;
        border-radius: 3px;
        color: rgba(0,0,0,0.55);

        &:hover, label{
            cursor:pointer;
        }

        svg{
            margin-right: 5px;
        }

        label{
            font-weight: 700;
        }
    
        &.confirm{
            background-color:${variables.confirmColor};
            transition: background-color .2s linear;
            margin: 0 5px 0 0;
            &:hover{
                transition: background-color .2s linear;
                background-color:${variables.confirmColorHover};
            }

            &.back{
                align-items: center;
            }
        }
    
        &.remover{
            background-color:${variables.dangerColor};
            transition: background-color .2s linear;

            &:hover{
                transition: background-color .2s linear;
                background-color:${variables.dangerColorHover};
            }
        }
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
    background-color: ${variables.backgroundColor}DD;
    display: flex;
    justify-content: center;
    img{
        width: 80px;
    }
`;

export const CommentContainer = styled.div`
    width: 100%;
`;

