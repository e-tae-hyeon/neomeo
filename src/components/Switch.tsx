import React from "react";
import { useTheme } from "styled-components/native";
import { Switch as RNSwitch } from "react-native";

type Props = {
  value: boolean;
  onChange: (changed: boolean) => void;
};

function Switch({ value, onChange }: Props) {
  const theme = useTheme();

  const handleChange = () => {
    onChange(!value);
  };

  return (
    <RNSwitch
      value={value}
      onValueChange={handleChange}
      trackColor={{ false: theme.gray.gray200, true: theme.system.white }}
      thumbColor={value ? theme.system.main : theme.system.text20}
      ios_backgroundColor={theme.system.white}
    />
  );
}

export default Switch;
