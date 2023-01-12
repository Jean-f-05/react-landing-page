import styled, { css } from 'styled-components';
import { Wrapper as SectionContainer } from '../SectionContainer/styles';
import { Header as Heading } from '../Heading/styles';

const menuVisible = () => css`
    visibility: visible;
    opacity: 1;
`;

export const Wrapper = styled.div`
    ${({ theme, visible }) => css`
        
        position: fixed;
        z-index: 5;
        top:0;
        right: 0;
        left: 0;
        border-bottom: ${theme.colors.mediumGray};
        background-color: ${theme.colors.white};
        transition: all 300ms ease-in-out;

        & ${SectionContainer} {
            padding-top: 0;
            padding-bottom: 0;
        }

        & ${Heading}{
            margin-top: 0;
            margin-bottom: 0;
        }

        @media ${theme.media.upToMedium} {
            height: 100vh;
            visibility: hidden;
            opacity: 0;
            ${visible && menuVisible()}


         
        & ${SectionContainer} {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            height: 100vh;
            align-items: center;
            margin: 0;
            overflow-y: auto;
        }

        & ${Heading}{
            padding-bottom: ${theme.spacing.large};
            display: flex;
            justify-content: center;
        }
       }

    `}`;

export const MenuWrapper = styled.div`
    ${({ theme }) => css`
       display: flex;
       justify-content: space-between;
       align-items: center;
       background-color: ${theme.colors.mainColor};

       @media ${theme.media.upToMedium} {
        display: block;
        text-align: center;
        padding: ${theme.spacing.xxlarge} 0;
       }
`}`;

export const Button = styled.button`
    ${({ theme, visible }) => css`
        background-color: ${theme.colors.white};
        z-index:10;
        position:fixed;
        top:2rem;
        right:2rem;
        width:4rem;
        height:4rem;
        background-color:${theme.colors.primaryColor};
        color: ${theme.colors.white};
        border: none;
        display: none;
        pointer-events: ${visible ? 'none' : 'all'};

        @media ${theme.media.upToMedium} {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    

       & svg {
        width:2.5rem;
        height:2.5rem;
       }
`}
`;
