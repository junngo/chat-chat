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

const HomeScreen = (state, props) => {
    const homeImage = state.homeImage;
    const isFetching = state.isFetching;

    return (
        <ScrollView
            style={{
              backgroundColor: "white"
            }}
            contentContainerStyle={{
              flex: 1,
              justifyContent: isFetching ? "flex-start" : "center"
            }}
        >
            {
                isFetching ? (
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
                            <Text style={{fontSize:90}}>ScrollView Test1</Text>
                            <Text style={{fontSize:100}}>ScrollView Test2</Text>
                            <Text style={{fontSize:100}}>ScrollView Test3</Text>
                        </Container>
                    </>
                ) : (
                    <ActivityIndicator color="black" size="small" />
                )
            }
        </ScrollView>
    )
};

export default HomeScreen;
