import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: colors.background,
  },
  inputWrapper: {
    width: "80%",
    alignItems: "center", 
    marginBottom: 16, 
  },
  inputSpacing: {
    marginTop: 16,
  },
  buttonSpacing: {
    marginTop: 16,
  },
  labelCenter: {
    textAlign: "center", 
  },
  input: {
    position: "sticky",
    width: "22%",
    height: "auto", 
    textAlign:"justify", 
    color: colors.text, 
    fontSize: 16,
    fontFamily: "Kanit",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 16,
  },
  headingOne: {
    fontSize: 38,
    color: colors.text,
    fontFamily: "Kanit",
    textAlign: "center",
  },
  headingTwo: {
    fontSize: 36,
    color: colors.text,
    fontFamily: "Kanit",
    textAlign: "center",
  },
  headingThree: {
    fontSize: 37,
    color: colors.text,
    fontFamily: "Kanit",
    textAlign: "center",
  },
  paragraphOne: {
    fontSize: 18,
    color: colors.text,
    fontFamily: "Kanit",
    textAlign: "center", 
    marginBottom: 8,
  },
  paragraphTwo: {
    fontSize: 17,
    color: colors.text,
    fontFamily: "Kanit",
    textAlign: "center",
    marginBottom: 8,
  },
  paragraphThree: {
    fontSize: 16,
    color: colors.text,
    fontFamily: "Kanit",
    marginTop: 16,
    textAlign: "center",
  },
});