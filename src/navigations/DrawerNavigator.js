import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from "./StackNavigators";
import { colors } from "../global/styles";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Client",
          drawerIcon: ({ focussed, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
