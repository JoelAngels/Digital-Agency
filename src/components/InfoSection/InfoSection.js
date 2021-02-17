import React from "react";
import { InfoSec } from "./InfoSection.Elements";
import { Container } from "../../globalStyles";
import { InfoRow, InfoColumn, TextWrapper } from "./InfoSection.Elements";
const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper></TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
