import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    backgroundColor: colors.background,
    fontFamily: "Kanit",
  },


// TEXT INPUT
  


inputLine:{

  borderBottomWidth:1,
  borderColor:colors.accent,
  width: "100%",
  },
  inputWrapper: {
    alignItems: "center", 
    marginBottom: 16, 
  },
  inputSpacing: {
    marginTop: 20,
  },


  // Button
  buttonSpacing: {
    marginTop: 16,
  },
  labelCenter: {
    textAlign: "center", 
  },
  input: {
    width: "auto",
    height: "auto", 
    textAlign:"left", 
    color: colors.text,
  },







  //Headers Footers
  header: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  footer: {
    width:"100%",
    position:"absolute",
    bottom:0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    
  },







  //TEXT
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
    marginBottom: 8,
  },
  paragraphTwo: {
    fontSize: 17,
    color: colors.text,
    fontFamily: "Kanit",
    marginBottom: 8,
  },
  paragraphThree: {
    fontSize: 16,
    color: colors.text,
    fontFamily: "Kanit",
    marginTop: 16,
  },


});