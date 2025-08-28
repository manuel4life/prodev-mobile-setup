import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Entry Screen - Awesome</Text>
      <Text style={styles.largeText}>
        Typescript is great if you practice more
      </Text>
      <Text style={styles.mediumText}>
        React Native provides you a single codebase for cross platforms
      </Text>
      <Text style={styles.smallText}>ALX is awesome</Text>

      {/* Additional Text Components */}
      <Text style={styles.boldText}>Learning never stops</Text>
      <Text style={styles.italicText}>Practice makes perfect</Text>
      <Text style={styles.underlineText}>Consistency is key</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
    padding: 16,
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 15,
  },
  // Styles for additional text components
  boldText: {
    fontSize: 18,
    color: "#4caf50",
    fontWeight: "bold",
    marginBottom: 8,
  },
  italicText: {
    fontSize: 16,
    color: "#ff9800",
    fontStyle: "italic",
    marginBottom: 8,
  },
  underlineText: {
    fontSize: 14,
    color: "#3f51b5",
    textDecorationLine: "underline",
  },
});
