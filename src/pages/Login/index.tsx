import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stacks/Models";
import * as Animatable from "react-native-animatable";

const Login = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/logo-red.png")}
          style={{ width: "80%", height: "50%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.container}
      >
        <Text style={styles.P}>Fazer login</Text>

        <TouchableOpacity style={styles.inputEmail}>
          <TextInput style={styles.textInput}>E-mail</TextInput>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputSenha}>
          <TextInput style={styles.textInput}>Senha</TextInput>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "#FFF" }}>Entrar</Text>
        </TouchableOpacity>

      </Animatable.View>

      <Text style={styles.text}>Indoorsense - 2022</Text>
    </>
  );
};

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    backgroundColor: "#8d0000",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
  },
  P: {
    color: "#000",
    fontSize: 22,
    marginTop: 60,
    marginBottom: 20,
    marginStart: 30,
  },
  textInput: {
    color: "#9C98A6",
  },

  inputEmail: {
    paddingStart: 20,
    backgroundColor: "#FAFAFC",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 15,
    width: "90%",
    alignSelf: "center",
    fontWeight: "bold",
  },
  inputSenha: {
    marginTop: 1,
    paddingStart: 20,
    backgroundColor: "#FAFAFC",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 15,
    width: "90%",
    alignSelf: "center",
    fontWeight: "bold",
  },
  checkbox: {
    alignSelf: "center",
  },
  text: {
    color: "#9C98A6",
    marginTop: 40,
    alignSelf: "center",
  },
  btnEntrar: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 40,
    paddingVertical: 15,
    width: "90%",
    backgroundColor: "#8d0000",
    fontWeight: "bold",
  },
});

export default Login;
