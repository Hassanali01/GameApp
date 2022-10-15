import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

function Heading({ children,style }) {
  return <Text style={[styles.title,style]}>{children}</Text>;
}
export default Heading;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    // fontWeight: "bold",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 16,
  },
});
