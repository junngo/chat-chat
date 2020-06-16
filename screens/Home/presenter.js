import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator } from "react-native";
import Slide from "../../components/Home/Slide";

const { width, height } = Dimensions.get("screen");

const Header = styled.View`
  width: 100%;
  height: ${height / 4}px;
`;

const HomeScreen = (state, props) => {
    const homeImage = props.home;
    const isFetching = state.isFetching;

    return (
        <Header>
            {isFetching ? (
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
                ) : (
                    <ActivityIndicator color="black" size="small" />
                )
            }
        </Header>
    )
};

export default HomeScreen;
