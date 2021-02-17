import React from "react";
import { Link } from "react-router-dom";
import { InfoSec } from "./InfoSection.Elements";
import { Container, Button } from "../../globalStyles";
import {
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./InfoSection.Elements";
const InfoSection = ({
  lightBg,
  imgStart,
  lineTopLine,
  topLine,
  lightText,
  headline,
  description,
  lightTextDesc,
  primary,
  buttonLabel,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lineTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightText}>{description}</Subtitle>
                <Link to="./sign-up">
                  <Button big frontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
