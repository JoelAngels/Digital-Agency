import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
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
  img,
  alt,
  start,
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
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
