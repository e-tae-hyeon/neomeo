import { Image } from "expo-image";
import React from "react";
import styled from "styled-components/native";
import Typo from "./Typo";

type Props = {
  imageUri: string;
  content?: string;
};

function PhotoFrame({ imageUri, content }: Props) {
  return (
    <Root>
      <ImageContainer>
        <Image source={imageUri} style={{ flex: 1 }} />
      </ImageContainer>

      {content && <Content>{content}</Content>}
    </Root>
  );
}

export default PhotoFrame;

const Root = styled.View`
  aspect-ratio: 5/6;
  gap: 16px;
  padding: 16px;
  border-width: 1px;
  border-color: ${(props) => props.theme.gray.gray200};
  background-color: ${(props) => props.theme.system.white};
`;

const ImageContainer = styled.View`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.gray.gray200};
`;

const Content = styled(Typo.B1)``;
