import React from 'react';
import {
  FiInstagram,
  FiYoutube,
  FiGithub
} from 'react-icons/fi';

import {
  FooterWrapper,
  FooterText,
  FooterIcons,
  FooterLink
} from './styles';

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        GuessWhat by DKSecurity
      </FooterText>
      <FooterIcons>
        <FooterLink href="https://www.instagram.com/dksecurityofc?r=nametag">
          <FiInstagram size="100%" color="#0288D1"/>
        </FooterLink>

        <FooterLink href="https://www.youtube.com/channel/UCUKyY5rDaAGKdNKAd8XXbwQ">
          <FiYoutube size="100%" color="#0288D1"/>
        </FooterLink>

        <FooterLink href="https://github.com/DKSecurity99">
          <FiGithub size="100%" color="#0288D1"/>
        </FooterLink>

      </FooterIcons>
    </FooterWrapper>
  );
}

export default Footer;
