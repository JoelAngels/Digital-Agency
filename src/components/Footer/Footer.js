import React from "react";
import { Button } from "../../globalStyles";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
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
          <Form>
            <FormInput name="email" type="email" placeholder="Your Email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>
      </FooterContainer>
    </div>
  );
};

export default Footer;
