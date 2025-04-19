import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import Barcode from "@images/core/barcode.svg";
import Belt from "@images/core/train-belt.svg";
import Train from "@images/core/train-front.svg";
import Cloud from "@images/core/train-cloud.svg";
import Stamp from "@images/core/train-stamp.svg";
import { IconX } from "@tabler/icons-react-native";
import { useMagicModal } from "react-native-magic-modal";

function TicketViewer() {
  const { hide } = useMagicModal();
  const theme = useTheme();
  const { t } = useTranslation();

  const { pet } = usePet();
  const star = t("common.view.star", { returnObjects: true })[pet.kind!];

  return (
    <Root>
      <Header>
        <CloseBtn onPress={() => hide()}>
          <IconX color={theme.system.main} />
        </CloseBtn>
      </Header>

      <Window>
        <Head>
          <Ticket>TRAIN TICKET</Ticket>
        </Head>

        <StampContainer>
          <Stamp />
        </StampContainer>

        <Body>
          <CloudView>
            <Cloud />
          </CloudView>

          <TrainView>
            <Train />
          </TrainView>

          <Top>
            <Section>
              <Caption>FROM</Caption>
              <Value>{t("common.view.earth")}</Value>
            </Section>

            <Section>
              <Caption>TO</Caption>
              <Value>{star}</Value>
            </Section>
          </Top>

          <Bottom>
            <CardSection>
              <Card>
                <Caption>TRAIN</Caption>
                <Name>NM1004</Name>
              </Card>

              <Card>
                <Caption>SEAT</Caption>
                <Name>23</Name>
              </Card>
            </CardSection>

            <BarcodeSection>
              <Barcode />
            </BarcodeSection>
          </Bottom>

          <Belt />

          <Footer>
            <NavigateSection>
              <Caption>FROM - TO</Caption>
              <Navigate>
                {t("common.view.earth")} --- {star}
              </Navigate>
            </NavigateSection>

            <SummarySection>
              <Col>
                <Caption>TRAIN</Caption>
                <Caption>NM1004</Caption>
              </Col>

              <Col>
                <Caption>SEAT</Caption>
                <Caption>23</Caption>
              </Col>
            </SummarySection>
          </Footer>
        </Body>

        <Tail>
          <Logo>{t("app")}</Logo>
        </Tail>
      </Window>
    </Root>
  );
}

export default TicketViewer;

const Root = styled.View`
  gap: 8px;
  height: 82%;
`;

const Header = styled(Layout.Row)`
  justify-content: flex-end;
`;

const CloseBtn = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 999px;
  background-color: ${(props) => props.theme.system.white};
`;

const Window = styled.View`
  height: 100%;
  overflow: hidden;
  border-radius: 40px;
`;

const Head = styled(Layout.Row)`
  padding: 20px 32px 16px;
  background-color: #c0cff6;
`;

const Ticket = styled(Typo.H1)``;

const StampContainer = styled.View`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 36px;
`;

const Body = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.system.white};
`;

const Top = styled.View`
  gap: 40px;
  padding: 60px 32px 40px;
`;

const Section = styled.View`
  gap: 8px;
`;

const Caption = styled(Typo.B4)`
  font-size: 11px;
`;

const Value = styled(Typo.Title)``;

const Bottom = styled.View`
  gap: 12px;
  padding: 20px 32px;
`;

const CardSection = styled(Layout.Row)`
  gap: 12px;
`;

const Card = styled.View`
  aspect-ratio: 3/2;
  width: 120px;
  gap: 4px;
  padding: 16px;
  border-radius: 12px;
  background-color: #f3f3dc;
`;

const Name = styled(Typo.B1)`
  font-weight: 500;
`;

const BarcodeSection = styled(Layout.Row)`
  padding: 4px;
`;

const Footer = styled.View`
  z-index: 10;
  gap: 16px;
  padding: 20px 32px;
`;

const NavigateSection = styled.View`
  gap: 4px;
`;

const Navigate = styled(Typo.B1)``;

const SummarySection = styled(Layout.Row)`
  width: 50%;
  justify-content: space-between;
`;

const Col = styled.View`
  gap: 2px;
`;

const Tail = styled(Layout.Row)`
  justify-content: flex-end;
  padding: 12px 24px 20px;
  background-color: #c0cff6;
`;

const Logo = styled(Typo.H4)``;

const CloudView = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const TrainView = styled.View`
  position: absolute;
  top: 32%;
  right: 32px;
  justify-content: center;
`;
