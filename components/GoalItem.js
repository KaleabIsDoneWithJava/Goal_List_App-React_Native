import React from "react";
import { StyleSheet } from "react-native";

function GoalItem() {
  return (
    <View style={styles.goalsItem}>
      <Text style={styles.goalsText}>{ItemData.item.text}</Text>
    </View>
  );
}

export default GoalItem;

//Could've imported the styles from App.js, but keeping your components and their respective
//styles together in one file is considered good practice for react-native
const styles = StyleSheet.create({
  goalsItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalsText: {
    color: "white",
  },
});
