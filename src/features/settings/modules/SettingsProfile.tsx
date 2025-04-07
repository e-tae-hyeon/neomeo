import Input from "@/src/components/Input";
import Typo from "@/src/components/Typo";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import useProfile from "../../auth/hooks/useProfile";
import Layout from "@/src/components/Layout";
import { IconPencil } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import PetView from "../../pet/modules/PetView";

function SettingsProfile() {
  const { t } = useTranslation();
  const theme = useTheme();

  const { pet, updatePet } = usePet();
  const { profile, updateProfile } = useProfile();

  const [name, setName] = useState(pet.name);
  const [nickname, setNickname] = useState(profile.nickname);

  const updateName = () => {
    if (!name) return;

    updatePet({ name });
  };

  const updateNickname = () => {
    if (!nickname) return;
    updateProfile({ nickname });
  };

  return (
    <Root>
      <Section>
        <Header>
          <Title>{t("settings.profile.pet.name")}</Title>
          <IconPencil size={20} color={theme.system.text100} />
        </Header>

        <Input
          placeholder={t("auth.pet.name.caption")}
          value={name}
          onChangeText={setName}
          maxLength={10}
          onClear={() => setName("")}
          onBlur={updateName}
        />
      </Section>

      <Section>
        <Header>
          <Title>{t("settings.profile.name")}</Title>
          <IconPencil size={20} color={theme.system.text100} />
        </Header>

        <Input
          placeholder={t("auth.profile.name.caption")}
          value={nickname}
          onChangeText={setNickname}
          maxLength={10}
          onClear={() => setNickname("")}
          onBlur={updateNickname}
        />
      </Section>

      <Section>
        <Header>
          <Title>{t("settings.profile.pet.custom")}</Title>
          <IconPencil size={20} color={theme.system.text100} />
        </Header>

        <PetContainer>
          <PetView />

          <Link href={"/settings/custom"} asChild>
            <EditBtn>
              <Edit>{t("common.action.edit")}</Edit>
            </EditBtn>
          </Link>
        </PetContainer>
      </Section>
    </Root>
  );
}

export default SettingsProfile;

const Root = styled.View`
  gap: 60px;
  padding: 20px;
`;

const Section = styled.View`
  gap: 12px;
`;

const Header = styled(Layout.Row)`
  gap: 4px;
`;

const Title = styled(Typo.H4)``;

const PetContainer = styled.View`
  gap: 12px;
  padding: 20px;
`;

const EditBtn = styled.TouchableOpacity`
  align-self: center;
  padding: 12px 24px;
  border-radius: 999px;
  background-color: ${(props) => props.theme.system.white};
`;

const Edit = styled(Typo.Label)``;
