import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stacks/Models";
import { Header } from "../../components/Header";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Menu = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <>
      <Header />

      <Animatable.View animation="fadeInUp">
        <View style={styles.view}>
          <Text style={styles.text}>Menu</Text>
        </View>

        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={{ color: "#2a2a2a" }}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Text style={{ color: "#2a2a2a" }}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconLogout}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon name="logout" size={27} color="#FFF" />
          <Text style={{ color: "#FFF", marginTop: 2 }}>Sair</Text>
        </TouchableOpacity>

        
      </Animatable.View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginStart: 20,
    marginEnd: 20,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  btnMenu: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 15,
    width: "90%",
    backgroundColor: "#E6E6F0",
    fontWeight: "bold",
  },
  iconLogout: {
    alignItems : "center",
    alignSelf: "flex-start",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 20,
    paddingVertical: 15,
    width: "20%",
    backgroundColor: "#8d0000",
  },
});

export default Menu;
