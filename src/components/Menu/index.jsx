/* eslint-disable */
import * as S from './styles';
import P from 'prop-types';
import SectionContainer from '../SectionContainer';
import LogoLink from '../LogoLink';
import NavLinks from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { useState } from 'react';

const Menu = ({ links = [], logoData }) => {
  const [visible, setMenuVisible] = useState(false);

  return (
    <>
      <S.Button visible={visible} onClick={() => setMenuVisible(!visible)} aria-label="Open/Close menu">
        {visible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </S.Button>
      <S.Wrapper visible={visible} onClick={() => setMenuVisible(false)}>
        <SectionContainer>
          <S.MenuWrapper >
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </S.MenuWrapper>
        </SectionContainer>
      </S.Wrapper>
    </>
  );
};

export default Menu;

Menu.propTypes = {
  ...NavLinks.propTypes,
  LogoData: P.shape(LogoLink.propTypes).isRequired,
};
