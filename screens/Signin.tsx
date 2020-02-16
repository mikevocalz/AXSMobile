import React, { useContext, FunctionComponent } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
//import AuthContext from "../routes/AppNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

interface Props {}

const SigninScreen: FunctionComponent<Props> = props => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        mode='outlined'
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        mode='outlined'
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={() => signIn({ username, password })}>Sign in</Button>
    </SafeAreaView>
  );
};

export default SigninScreen;
