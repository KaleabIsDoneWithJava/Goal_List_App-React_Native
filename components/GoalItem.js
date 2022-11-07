import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  // function passId(){
  //   props.onDeleteItem(props.id);

  // }
  return (
    <Pressable android_ripple={{color:"#dddddd"}} onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalsItem}>
        <Text style={styles.goalsText}>{props.text}</Text>
      </View>
    </Pressable>
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
