import React from "react";
import { View, 
         Text,
         TextInput,
         TouchableOpacity 
} from "react-native";

const ChatScreen = (props) => (
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
);

export default ChatScreen;
