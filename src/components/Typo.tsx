import styled from "styled-components/native";
import { fontSizeAdditionMap } from "../features/settings/utils/Font";

const Bold = styled.Text.attrs({
  lineBreakStrategyIOS: "hangul-word",
  textBreakStrategy: "balanced",
})`
  color: ${(props) => props.theme.system.text100};
  font-family: ${(props) => props.theme.font};
  font-weight: 700;
`;

const Regular = styled.Text.attrs({
  lineBreakStrategyIOS: "hangul-word",
  textBreakStrategy: "balanced",
})`
  color: ${(props) => props.theme.system.text100};
  font-family: ${(props) => props.theme.font};
  font-weight: 400;
`;

const Title = styled(Bold)`
  font-size: ${(props) => 30 + fontSizeAdditionMap[props.theme.font]}px;
`;

const H1 = styled(Bold)`
  font-size: ${(props) => 24 + fontSizeAdditionMap[props.theme.font]}px;
`;

const H2 = styled(Bold)`
  font-size: ${(props) => 22 + fontSizeAdditionMap[props.theme.font]}px;
`;

const H3 = styled(Bold)`
  font-size: ${(props) => 20 + fontSizeAdditionMap[props.theme.font]}px;
`;

const H4 = styled(Bold)`
  font-size: ${(props) => 18 + fontSizeAdditionMap[props.theme.font]}px;
`;

const Label = styled(Bold)`
  font-size: ${(props) => 16 + fontSizeAdditionMap[props.theme.font]}px;
`;

const B1 = styled(Regular)`
  font-size: ${(props) => 16 + fontSizeAdditionMap[props.theme.font]}px;
`;

const B2 = styled(Regular)`
  font-size: ${(props) => 15 + fontSizeAdditionMap[props.theme.font]}px;
`;

const B3 = styled(Regular)`
  font-size: ${(props) => 14 + fontSizeAdditionMap[props.theme.font]}px;
`;

const B4 = styled(Regular)`
  font-size: ${(props) => 13 + fontSizeAdditionMap[props.theme.font]}px;
`;

const Caption = styled(Regular)`
  font-size: ${(props) => 12 + fontSizeAdditionMap[props.theme.font]}px;
`;

const Typo = {
  Title,
  H1,
  H2,
  H3,
  H4,
  Label,
  B1,
  B2,
  B3,
  B4,
  Caption,
};

export default Typo;
