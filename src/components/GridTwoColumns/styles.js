import styled, { css } from 'styled-components';
import { Header } from '../Heading/styles';

export const Wrapper = styled.div`
    ${({ theme, background }) => css`
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: ${theme.spacing.large};

        @media ${theme.media.upToMedium} {
            grid-template-columns: 1fr ;
            text-align: center;
        };

        ${Header}{
            margin-bottom:${theme.spacing.large};
        };
`}`;

export const TextWrapper = styled.div`
    ${({ theme }) => css`
    @media ${theme.media.upToMedium} {
        margin-bottom:${theme.spacing.large};
        `}
    }
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img``;
