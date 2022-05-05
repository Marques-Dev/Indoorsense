import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stacks/Models";
import Swipeable from "react-native-gesture-handler/Swipeable";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Notifications = () => {
  const navigation = useNavigation<propsStack>();

  const mockDataList = [
    {
      id: "1",
      text: "Alerta de PROXIMIDADE do quadrante 01, verificar com atenção o quadrante 01, evitar outra PROXIMIDADE",
      dateTime: "DD/MM/YY"
    },
    { 
      id: "2", 
      text: "Alerta de PROXIMIDADE do quadrante 01, verificar com atenção o quadrante 01, evitar outra PROXIMIDADE",
      dateTime: "DD/MM/YY"
    },
    { 
      id: "3", 
      text: "Alerta de PROXIMIDADE do quadrante 01, verificar com atenção o quadrante 01, evitar outra PROXIMIDADE",
      dateTime: "DD/MM/YY"
    },
    { 
      id: "4", 
      text: "Alerta de PROXIMIDADE do quadrante 01, verificar com atenção o quadrante 01, evitar outra PROXIMIDADE",
      dateTime: "DD/MM/YY"
    },
    { 
      id: "5", 
      text: "Alerta de PROXIMIDADE do quadrante 01, verificar com atenção o quadrante 01, evitar outra PROXIMIDADE",
      dateTime: "DD/MM/YY"
    },
    { 
      id: "6", 
      text: "Alerta de PROXIMIDADE do quadrante 01, verificar com atenção o quadrante 01, evitar outra PROXIMIDADE",
      dateTime: "DD/MM/YY"
    },

  ];

  const ListItem = ({ text, dateTime }) => (
    <Swipeable renderLeftActions={LeftActions}>
      <View style={styles.containerCard}>
        <Text style={styles.cardText}>{text}</Text>
        <Text style={styles.dataText}>{dateTime}</Text>
      </View>
    </Swipeable>
  );

  const LeftActions = () => {
    return (
      <View
        style={{ backgroundColor: 'blue', justifyContent: 'center' }}>
        <Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            fontWeight: '600'
          }}>
          Left Action
        </Text>
      </View>
    )
   }

  return (
    <>
      <View style={styles.containerName}>
        <Animatable.Text animation="flipInY" delay={400}>
          <Text style={styles.text}>Notificações</Text>
        </Animatable.Text>
      </View>

      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Menu")}
      >
        <Icon name="menu" size={35} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Menssagem</Text>
      </View>

      <View style={styles.containerBackgroud}>

        <FlatList 
          data={mockDataList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem {...item} />}
        />

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
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E6F0",
  },
  messageText: {
    color: "#9C98A6",
    marginStart: 25,
    marginTop: 25,
  },
  containerCard: {
    margin: 10,
    minHeight: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6F0",
    backgroundColor: "#FAFAFC",
  },
  cardText: {
    color: "#353535",
    padding: 10,
  },
  dataText: {
    color: "#696969",
    alignSelf: "flex-end",
    margin: 10,
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 20,
  },
});

export default Notifications;
