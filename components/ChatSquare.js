import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = styled.View`
    width: 200px;
    height: 200px;
    margin-top: 10px;
    background-color: #b7efcd;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.Text`
    color: white;
`

const ChatSquare = ({ caption }) => {
    const navigation = useNavigation();
    const goToChat = () => {
        navigation.navigate("Detail")
    }

    return (
        <TouchableOpacity onPress={goToChat}>
            <Button>
                <ButtonText>{caption}</ButtonText>
            </Button>
        </TouchableOpacity>
    )
};

ChatSquare.propTypes = {
    caption: PropTypes.string.isRequired
};

export default ChatSquare;
