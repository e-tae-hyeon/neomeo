import styled from "styled-components/native";

const Bold = styled.Text.attrs({
  lineBreakStrategyIOS: "hangul-word",
  textBreakStrategy: "balanced",
})`
  color: ${(props) => props.theme.system.text100};
  font-family: "NanumGothic";
  font-weight: 700;
`;

const Regular = styled.Text.attrs({
  lineBreakStrategyIOS: "hangul-word",
  textBreakStrategy: "balanced",
})`
  color: ${(props) => props.theme.system.text100};
  font-family: "NanumGothic";
  font-weight: 400;
`;

const Title = styled(Bold)`
  font-size: 30px;
`;

const H1 = styled(Bold)`
  font-size: 24px;
`;

const H2 = styled(Bold)`
  font-size: 22px;
`;

const H3 = styled(Bold)`
  font-size: 20px;
`;

const H4 = styled(Bold)`
  font-size: 18px;
`;

const Label = styled(Bold)`
  font-size: 16px;
`;

const B1 = styled(Regular)`
  font-size: 16px;
`;

const B2 = styled(Regular)`
  font-size: 15px;
`;

const B3 = styled(Regular)`
  font-size: 14px;
`;

const B4 = styled(Regular)`
  font-size: 13px;
`;

const Caption = styled(Regular)`
  font-size: 13px;
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
