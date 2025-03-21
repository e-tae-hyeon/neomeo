import styled from "styled-components/native";

const Bold = styled.Text.attrs({
  lineBreakStrategyIOS: "hangul-word",
  textBreakStrategy: "balanced",
})`
  color: ${(props) => props.theme.system.text100};
  font-family: "Ownglyph_PDH-Rg";
  font-weight: 700;
`;

const Regular = styled.Text.attrs({
  lineBreakStrategyIOS: "hangul-word",
  textBreakStrategy: "balanced",
})`
  color: ${(props) => props.theme.system.text100};
  font-family: "Ownglyph_PDH-Rg";
  font-weight: 400;
`;

const Title = styled(Bold)`
  font-size: 33px;
`;

const H1 = styled(Bold)`
  font-size: 27px;
`;

const H2 = styled(Bold)`
  font-size: 25px;
`;

const H3 = styled(Bold)`
  font-size: 23px;
`;

const H4 = styled(Bold)`
  font-size: 21px;
`;

const Label = styled(Bold)`
  font-size: 19px;
`;

const B1 = styled(Regular)`
  font-size: 19px;
`;

const B2 = styled(Regular)`
  font-size: 18px;
`;

const B3 = styled(Regular)`
  font-size: 17px;
`;

const B4 = styled(Regular)`
  font-size: 16px;
`;

const Caption = styled(Regular)`
  font-size: 15px;
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
