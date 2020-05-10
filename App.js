import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default class App extends React.Component {
  state = {
    auth_status: "",
  };
  componentDidMount = async () => {
    this.setState((state) => ({ auth_status: "pending" }));
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Use your bio ID for sign in.",
    });
    console.log(result); //<-- {"error": "unknown", "message": "", "success": false}
    if (result.success) {
      this.setState((state) => ({ auth_status: "success" }));
    } else {
      this.setState((state) => ({ auth_status: "failed" }));
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.auth_status}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
