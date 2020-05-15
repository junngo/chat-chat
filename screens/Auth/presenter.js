import React from "react";
import { View, 
         Text,
         TextInput,
         TouchableOpacity
} from "react-native";

const AuthScreen = props => (
    <>
        <View>
            <Text>Auth Auth</Text>
        </View>
        <TextInput
            placeholder = "Username"
            value = {props.username}
            onChangeText = {props.changeUsername}
        />
        <TextInput 
            placeholder = "Password"
            secureTextEntry = {true}
            autoCapitalize={"none"}
            value = {props.password}
            onChangeText = {props.changePassword}
        />
        <TouchableOpacity 
            onPressOut = {props.submit}
        >
            <Text>Log In</Text>
        </TouchableOpacity>
    </>
);

export default AuthScreen;
