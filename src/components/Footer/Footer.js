import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
} from "./Footer.elements";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive membership to receive the latest news and trends
          </FooterSubHeading>
          <FooterSubText>You can unsubscribe at any time</FooterSubText>
        </FooterSubscription>
      </FooterContainer>
    </div>
  );
};

export default Footer;
