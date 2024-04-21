import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

const ListScreen: React.FC = () => {


  return (
    <View style={styles.container}>



      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 30,
  },
  sectionHeader: {
    fontSize: 26,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: "#3c87eb",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3c87eb",
    alignItems: "center",
    justifyContent: "center",
  },
  plusSign: {
    fontSize: 24,
    color: "#ffffff",
  },
  taskText: {
    color: "#3c87eb",
  },
  teskRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
});

export default ListScreen;
