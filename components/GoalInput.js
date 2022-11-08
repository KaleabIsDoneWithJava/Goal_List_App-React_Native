import { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    //console.log(enteredText);
  }
  function addGoalHandlerTemp() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandlerTemp} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderColor: "#cccccc",
  },

  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    width: "100%",
  },

  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
  },

  button: {
    marginHorizontal: 8,
    width:"30%",
  },
});
