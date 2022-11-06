import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import GoalItem from "./components/GoalItem";

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
      { text: enteredGoalText, id: Math.random().toString() },
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
        {/*Flatlist is like ScrollView but with Lazy Loading. It has most props that Scrollview 
        has and is better for performance when used with dynamic lists, especially when they're long*/}
        <FlatList
          data={courseGoals}
          renderItem={(ItemData) => {
            //need to pass a prop into GoalItem to render data from the dynamic list.
            return <GoalItem />;
          }}
          //To get the key prop from another prop in the object passed to the data prop
          keyExtractor={(items, index) => {
            return items.id;
          }}
          alwaysBounceVertical={false}
        />
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
