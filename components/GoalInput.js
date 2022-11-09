import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    //console.log(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  function closeModalHandler(){
    props.onCancel();
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Course Goal!"
          placeholderTextColor="#ffffff"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModalHandler} />
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
    padding: 24,
    backgroundColor: "#5e0acc",
  },

  image: {
    width: 100,
    height: 100,
    margin: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    width: "100%",
    color: "#ffffff",
  },

  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
  },

  button: {
    marginHorizontal: 8,
    width: "30%",
  },
});
