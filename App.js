import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image } from "react-native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";


const { persistor, store } = configureStore();

const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = fonts =>
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = () => {
    const images = cacheImages([
      require("./assets/splash.png")
    ]);

    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
