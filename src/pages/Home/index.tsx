import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stacks/Models";
import { Header } from "../../components/Header";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Home = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <>
      <Header />

      <Animatable.View animation="fadeInUp">
        <View style={styles.p}>
          <Text style={styles.text}>Selecionar Instalação</Text>
        </View>

        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#2a2a2a" }}>Integração</Text>
        </TouchableOpacity>

        {/* <View style={styles.view}> */}
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Icon name="arrow-right-thick" size={27} color="#FFF" />
            <Text style={{ color: "#FFF" }}>Próximo</Text>
          </TouchableOpacity>
        {/* </View> */}
      </Animatable.View>
    </>
  );
};

const styles = StyleSheet.create({
  // view: {
  //   top: 200,
  //   backgroundColor: "red",
  // },
  p: {
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
  btnNext: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    alignSelf: "flex-end",
    position: "relative",
    right: 20,
    paddingVertical: 15,
    width: "20%",
    backgroundColor: "#8d0000",
    fontWeight: "bold",
  },
});

export default Home;
