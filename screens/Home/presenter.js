import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const Header = styled.View`
  width: 100%;
  height: ${height / 4}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const HomeScreen = props => {
    return (
        <Header>
            <Swiper controlsEnabled={false} loop timeout={3}>
                <Section>
                    <Text>Hello1</Text>
                </Section>
                <Section>
                    <Text>Hello2</Text>
                </Section>
                <Section>
                    <Text>Hello3</Text>
                </Section>
            </Swiper>
        </Header>
    )
};

export default HomeScreen;
