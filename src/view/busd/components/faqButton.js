import React from "react";
import { Container } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { MdLiveHelp } from 'react-icons/md';

import { FaqButtonStyle } from '../../../style';
import SocialLinkBG from '../../../assets/images/social-link-bg.png';

const FaqButton = () => {
  return (
    <>
      <FaqButtonStyle>
        <Container>
          <NavLink to="/faq" style={{ backgroundImage: `url(${SocialLinkBG})` }}>
            <MdLiveHelp className="text-brown"/>
          </NavLink>
        </Container>
      </FaqButtonStyle>
    </>
  );
}

export default FaqButton;