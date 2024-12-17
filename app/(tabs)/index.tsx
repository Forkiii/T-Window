import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { styles } from "../../constants/styles";

export default function Index() {
  return (

      <Link href={"../home"}>
        <Text style={[styles.headingTwo]}>home</Text>
      </Link>

  );
}
