import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
//import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    //console.log(enteredText);
  }
  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List Of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderColor: "#cccccc",
  },

  goalsContainer: {
    flex: 6,
    paddingTop: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    marginRight: 10,
    width: "70%",
  },
});
