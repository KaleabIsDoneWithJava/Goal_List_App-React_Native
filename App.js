import { Button, StyleSheet, Text, TextInput, View } from "react-native";
//import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
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
    padding: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "darkblue",
    margin: 15,
    padding: 5,
  },
});
