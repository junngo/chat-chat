import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = props => {
  const navigation = useNavigation();

  return (
    <>
      <View>
          <Text>Hello Chat Room screen</Text>
      </View>
      <Button
          title="Chat Chat"
          onPress={() => navigation.navigate("Detail")}
      />
      <Button
        title="Create Room"
        onPress={props.onPressChat}
      />
    </>
  )
};

export default ChatScreen;
