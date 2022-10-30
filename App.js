import { Button, StyleSheet, Text, View } from "react-native";
//import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>fIRST lINE oF tEXT!</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap Me Daddy" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: { 
    margin: 1, 
    padding: 16, 
    borderColor:"blue", 
    borderWidth: 2 
  },
});
