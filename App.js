import { useState } from "react";
import { Button, FlatList, StyleSheet, View, StatusBar } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    //console.log(enteredGoalText);

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    //Closes the modal after adding to show the added goals list
    endAddGoalHandler();
  }

  function deleteItemHandler(id) {
    //console.log("delete");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    //backgroundColor works only on android
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          {/*
          Flatlist is like ScrollView but with Lazy Loading. It has most props that Scrollview 
          has and is better for performance when used with dynamic lists, especially when they're long
          */}

          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              //console.log(itemData.item.id)
              //need to pass a prop into GoalItem to render data from the dynamic list.
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
            //To get the key prop from another prop in the object passed to the data prop
            keyExtractor={(items, index) => {
              return items.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
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
