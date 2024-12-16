import { StyleSheet, Text, View } from "react-native";
import Home from "../../assets/Home";
import Group from "../../assets/Group";
import Profile from "../../assets/Profile";
import { styles } from "../../constants/styles";

const home = () => {
  return (
    <View style={{flex: 1}}>
        {/* burger menu: */}
        <View>

        </View>

        <View style={styles.container}>

        </View>



        {/* Footer section */}
      <View style={styles.footer}>
        <Home />
        <Group />
        <Profile />
      </View>
    </View>
  );
};

export default home;

