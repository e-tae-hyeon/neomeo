import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styled from "styled-components/native";
import { View } from "react-native";

const Screen = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.system.background};
`;

const Col = styled.View``;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Center = styled.View`
  justify-content: center;
  align-items: center;
`;

type SafeProps = {
  edge: "top" | "bottom";
};

const Safe = ({ edge }: SafeProps) => {
  const insets = useSafeAreaInsets();

  return <View style={{ height: insets[edge] }} />;
};

const Layout = {
  Screen,
  Col,
  Row,
  Center,
  Safe,
};

export default Layout;
