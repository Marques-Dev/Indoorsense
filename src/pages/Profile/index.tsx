import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stacks/Models";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <>
      <View style={styles.containerName}>
        <Animatable.Text animation="flipInY" delay={400}>
          <Text style={styles.text}>Perfil</Text>
        </Animatable.Text>
      </View>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Menu")}
      >
        <Icon name="menu" size={35} color="#FFF" />
      </TouchableOpacity>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Perfil</Text>
      </View>

      <View style={styles.containerBackgroud}>
        <View style={styles.inputImage}>
          <Image
            source={require("../../assets/user.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={styles.inputProfile}>
          <TouchableOpacity style={styles.input}>
            <TextInput style={styles.textInput}>Senha atual</TextInput>
          </TouchableOpacity>

          <TouchableOpacity style={styles.input}>
            <TextInput style={styles.textInput}>Nova senha</TextInput>
          </TouchableOpacity>

          <TouchableOpacity style={styles.input}>
            <TextInput style={styles.textInput}>Confirmar senha</TextInput>
          </TouchableOpacity>
        </View>

        <View style={styles.confirmButton}>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.confirmInput}>Confirar Mudanças</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerName: {
    height: 60,
    backgroundColor: "#8d0000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    height: "10%",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6E6F0",
  },
  containerBackgroud: {
    flex: 1,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E6E6F0",
  },
  messageText: {
    color: "#9C98A6",
    marginStart: 25,
    marginTop: 25,
  },
  input: {
    marginTop: 10,
    paddingStart: 20,
    backgroundColor: "#6B6B6B",
    borderRadius: 8,
    paddingVertical: 15,
    width: "90%",
    alignSelf: "center",
    fontWeight: "bold",
  },
  textInput: {
    color: "#fff",
  },
  inputProfile: {},
  confirmButton: {
    marginTop: 40,
  },
  confirmInput: {
    color: "#77EC59",
  },
  inputImage: {
    width: 140,
    height: 130,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 20,
  },
});

export default Profile;
