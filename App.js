import { Button, StyleSheet, Text, TextInput, View } from "react-native";
//import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Your Course Goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List Of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "darkblue",
    padding: 5,
    marginRight: 10,
    width: "70%"
    

  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
