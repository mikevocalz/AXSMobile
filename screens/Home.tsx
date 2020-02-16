import React, { useContext, FunctionComponent } from "react";
import { View, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
interface Props {}

const HomeScreen: FunctionComponent<Props> = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Button mode='contained' onPress={() => console.log("Pressed")}>
        Sign Out
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
