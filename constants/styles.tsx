import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 16, 
    paddingTop: 20,
  },
  label: {
    marginBottom: 5,
  },
  labelCenter: {
    textAlign: "center",
    paddingTop: 20,
  },
  inputField:{
    marginBottom: 20
  },
  header:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    top: 0,
  },
  footer:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    bottom:0
  },
  headingOne: {
    fontSize: 38,
    color: colors.text,
    fontFamily: "Kanit",
    position: "fixed",
  },
  headingThree: {
    fontSize: 37,
    color: colors.text,
    fontFamily: "Kanit",
  },

  headingTwo: {
    fontSize: 36,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphOne: {
    fontSize: 18,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphTwo: {
    fontSize: 17,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphThree: {
    fontSize: 16,
    color: colors.text,
    fontFamily: "Kanit",
  },
});