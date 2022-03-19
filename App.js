import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import {NavigationContainer} from
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import QuizScreen from "./src/screens/QuizScreen";
import CongrateScreen from "./src/screens/CongrateScreen";

// import { SafeAreaView } from 'react-native';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen 
        name="QuizScreen" 
        component={QuizScreen} 
        initialParams={{index:0}}
        />
        <Stack.Screen name="CongrateScreen" component={CongrateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
