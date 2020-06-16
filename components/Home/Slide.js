import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, Image } from "react-native";


const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
`;

const BG = styled.Image`
    height: 100%;
    width: 100%;
    opacity: 0.8;
`;

const Slide = ({ id, title, backgroundImage }) => (
    <Container>
        <BG source={{ uri: `http://127.0.0.1:8000${backgroundImage}` }} />
    </Container>
);

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
};

export default Slide;
