import React from "react";
import { View, 
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from "react-native";

const ChatRoomScreen = props => {
    return (
        <>
            <View>
                <Text>hello chat</Text>
            </View>
            <TextInput
                placeholder="Write Message"
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={props.changeMessage}
                returnKeyType={"send"}
                onSubmitEditing={props.submit}
            />
            <TouchableOpacity onPressOut={props.submit}>
                <View >
                <Text>Send</Text>
                </View>
            </TouchableOpacity>
        </>
    )
};


export default ChatRoomScreen;
