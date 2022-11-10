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
  function closeModalHandler() {
    props.onCancel();
    setEnteredGoalText("");
  }

  return (
    <>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Course Goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={closeModalHandler}
                color="#f31282"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color="#b180f0"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

/*Can't style the built in button. 
You have to create your own button component and style it appropriately.
 You should use the Pressable component */

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
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 16,
    width: "100%",
    borderRadius: 20,
  },

  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
  },

  button: {
    marginHorizontal: 8,
    width: "30%",
    borderRadius: 20,
  },
});
