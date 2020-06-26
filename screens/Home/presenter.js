import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator, ScrollView, Text } from "react-native";
import Slide from "../../components/Home/Slide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT/4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const HomeScreen = props => {
    const homeImage = props.home;
    const loading = props.loading;

    return (
        <ScrollView
            style={{
              backgroundColor: "white"
            }}
            contentContainerStyle={{
              flex: 1,
              justifyContent: loading ? "center" : "flex-start"
            }}
        >
            {
                loading ? (
                    <ActivityIndicator color="black" size="small" />
                ) : (
                    <>
                        <SliderContainer>
                            <Swiper controlsEnabled={false} loop timeout={3}>
                                {homeImage.map(home => (
                                    <Slide
                                        key={home.id}
                                        id={home.id}
                                        title={home.caption}
                                        backgroundImage={home.file}
                                    />
                                ))}
                            </Swiper>
                        </SliderContainer>
                        <Container>
                        </Container>
                    </>
                )
            }
        </ScrollView>
    )
};

export default HomeScreen;
