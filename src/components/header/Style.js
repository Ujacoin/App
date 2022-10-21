import { StyleSheet } from "react-native";
export const Menustyles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  itemContainer: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: "black",
    fontSize: 32,
    lineHeight:38,
    marginLeft: 10,
    fontFamily: "Inter",
    // fontWeight: Platform.OS === 'android' ? 'bold' : 'bold',
  },
});
