import Layout from "@/src/components/Layout";
import useEnd from "@/src/features/home/hooks/useEnd";
import CheckEndConfig from "@/src/features/home/modules/CheckEndConfig";
import EndingController from "@/src/features/home/modules/EndingController";
import HomeNavigator from "@/src/features/home/modules/HomeNavigator";
import Pet from "@/src/features/pet/modules/Pet";
import { IconSettings } from "@tabler/icons-react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import styled, { useTheme } from "styled-components/native";

function HomeScreen() {
  const theme = useTheme();
  const { isEnd } = useEnd();

  if (isEnd)
    return (
      <Screen>
        <Background>
          <Image
            source={require("@images/core/end-background.png")}
            contentPosition={"center"}
            style={{ flex: 1 }}
          />
        </Background>

        <Head>
          <NavSection>
            <Link href={"/settings"} asChild>
              <MenuBtn>
                <IconSettings color={theme.system.main} size={30} />
              </MenuBtn>
            </Link>
          </NavSection>

          <EndingController />
        </Head>
      </Screen>
    );

  return (
    <Screen>
      <Background>
        <Image
          source={require("@images/core/home-background.png")}
          contentPosition={"top center"}
          style={{ flex: 1 }}
        />
      </Background>

      <Main>
        <Head>
          <NavSection>
            <Link href={"/settings"} asChild>
              <MenuBtn>
                <IconSettings color={theme.system.main} size={30} />
              </MenuBtn>
            </Link>

            <HomeNavigator />
          </NavSection>
        </Head>
      </Main>

      <Footer>
        <Pet size={140} />
      </Footer>

      <CheckEndConfig />
    </Screen>
  );
}

export default HomeScreen;

const Screen = styled(Layout.Screen)`
  background-color: #afc0eb;
`;

const Background = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Main = styled.View`
  flex: 1;
`;

const Head = styled.View`
  gap: 8px;
  padding: 20px;
`;

const NavSection = styled.View`
  align-items: flex-end;
  gap: 12px;
`;

const MenuBtn = styled.TouchableOpacity`
  padding: 6px;
  border-radius: 999px;
  border-width: 4px;
  border-color: ${(props) => props.theme.system.main};
  background-color: ${(props) => props.theme.system.white};
`;

const Footer = styled(Layout.Row)`
  justify-content: flex-end;
`;
