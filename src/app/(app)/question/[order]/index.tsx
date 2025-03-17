import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import React from "react";
import styled from "styled-components/native";

function QuestionDetailsScreen() {
  return (
    <Screen>
      <Header.Arrow />
    </Screen>
  );
}

export default QuestionDetailsScreen;

const Screen = styled(Layout.Screen)``;
