import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stacks/Models";
import "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Header = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <>
      <View style={styles.containerLogo}>
        <TouchableOpacity style={styles.icon}
          onPress={() => navigation.navigate("Menu")}
        >
          <Icon name="menu" size={35} color="#FFF" />
        </TouchableOpacity>

        <Animatable.Image
          animation="flipInY"
          delay={400}
          source={require("../../assets/logo-red.png")}
          style={{ width: "30%", height: "90%" }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerLogo: {
    height: 90,
    backgroundColor: "#8d0000",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
});
