import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  // function passId(){
  //   props.onDeleteItem(props.id);

  // }
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{
          color: "#dddddd",
        }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalsText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

//Could've imported the styles from App.js, but keeping your components and their respective
//styles together in one file is considered good practice for react-native
const styles = StyleSheet.create({
  goalsItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalsText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
