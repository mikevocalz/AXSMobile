import React, { useContext, FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIndicator } from "react-native-indicators";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

interface Props {}

const SplashScreen: FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <MaterialIndicator color='white' />
    </View>
  );
};

export default SplashScreen;
