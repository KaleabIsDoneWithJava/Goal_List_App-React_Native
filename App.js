import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
//import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    //console.log(enteredText);
  }
  function addGoalHandler() {
    //console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
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
      <ScrollView alwaysBounceVertical={false}>

        {courseGoals.map((goal) => (
          
          <View key={goal} style={styles.goalsItem}>
            <Text style={styles.goalsText} >{goal}</Text>
          </View>
        ))}
        </ScrollView>
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

  goalsItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalsText: {
    color: "white",
  },

  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    marginRight: 10,
    width: "70%",
  },
});
