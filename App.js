import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    //console.log(enteredGoalText);

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteItemHandler(){
    console.log("delete"); //temporary
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        {/*Flatlist is like ScrollView but with Lazy Loading. It has most props that Scrollview 
        has and is better for performance when used with dynamic lists, especially when they're long*/}

        <FlatList
          data={courseGoals}
          renderItem={(ItemData) => {
            //need to pass a prop into GoalItem to render data from the dynamic list.
            return <GoalItem text={ItemData.item.text} onDeleteItem={deleteItemHandler}/>;
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

  goalsContainer: {
    flex: 6,
    paddingTop: 24,
  },
});
