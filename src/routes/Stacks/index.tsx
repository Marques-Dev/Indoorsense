import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//contexto de navegaçãp global
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import Profile from "../../pages/Profile";
import Notifications from "../../pages/Notifications";
import Menu from "../../pages/Menu";
import { propsNavigationStack } from "./Models";

//contexto de navegação stack
const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function(){
    return(
        <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Login" component={Login} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Notifications" component={Notifications} />
            <Screen name="Menu" component={Menu} />



        </Navigator>
    )
}