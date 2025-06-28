import { View, Text, StyleSheet } from "react-native";
import Login from "./Screen/Login";

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center', 
    backgroundColor:'#ffffff' // tengah horizontal
  },
  welcomeText: {
    fontStyle: 'italic',
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
