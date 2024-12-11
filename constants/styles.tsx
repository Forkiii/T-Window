import { StyleSheet } from "react-native";
import colors from "./colors";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 16, // Add padding to prevent clipping
    paddingTop: 20,        // Add padding for top inset
  },
  headingOne: {
    fontSize: 40,
    color: colors.text,
    fontFamily: "Kanit",
    position: "fixed",
  },
  headingThree: {
    fontSize: 40,
    color: colors.text,
    fontFamily: "Kanit",
  },

  headingTwo: {
    fontSize: 40,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphOne: {
    fontSize: 12,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphTwo: {
    fontSize: 11,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphThree: {
    fontSize: 10,
    color: colors.text,
    fontFamily: "Kanit",
  },
});