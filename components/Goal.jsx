import { View, Button, StyleSheet, Text } from "react-native";

export default Goal = ({ text, onDelete }) => {
  return (
    <View style={styles.horizontalWrapper}>
      <Text>{text}</Text>
      <Button title="x" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
