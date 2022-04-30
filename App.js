import * as React from 'react';
import * as Font from 'expo-font';
import Weather from './screens/Weather';
import Main from './screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import "react-native-gesture-handler";

// Создание 2 объектов навигации (стекового и статичного через боковую панель приложения)
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Описание структуры и функциональности 2 объекта навигации по приложению
function DrawerNavigation() {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#33495f",
                fontFamily: "Medium"
            },
            headerTintColor: '#AB9055',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Drawer.Screen name="Главный экран" component={Main} initialParams={{screen: "Главный"}}/>
            <Drawer.Screen name="Погода" component={Weather} initialParams={{screen: "Погода"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Москва" component={Weather} initialParams={{screen: "Москва"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Дубай" component={Weather} initialParams={{screen: "Дубай"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Париж" component={Weather} initialParams={{screen: "Париж"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Сингапур" component={Weather} initialParams={{screen: "Сингапур"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Альметьевск" component={Weather} initialParams={{screen: "Альметьевск"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Казань" component={Weather} initialParams={{screen: "Казань"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Санкт-Петербург" component={Weather} initialParams={{screen: "Санкт-Петербург"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Лондон" component={Weather} initialParams={{screen: "Лондон"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Нью-Йорк" component={Weather} initialParams={{screen: "Нью-Йорк"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Дзержинск" component={Weather} initialParams={{screen: "Дзержинск"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Гонконг" component={Weather} initialParams={{screen: "Гонконг"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Вашингтон" component={Weather} initialParams={{screen: "Вашингтон"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Шанхай" component={Weather} initialParams={{screen: "Шанхай"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Лас-Вегас" component={Weather} initialParams={{screen: "Лас-Вегас"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Сеул" component={Weather} initialParams={{screen: "Сеул"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Пекин" component={Weather} initialParams={{screen: "Пекин"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Токио" component={Weather} initialParams={{screen: "Токио"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Бангкок" component={Weather} initialParams={{screen: "Бангкок"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
            <Drawer.Screen name="Макао" component={Weather} initialParams={{screen: "Макао"}}
                           options={{
                               headerStyle: {
                                   backgroundColor: '#1d1c2f', //Set Header color
                                   fontFamily: "Medium",
                               },
                               headerTintColor: '#AB9055', //Set Header text color
                               borderColor: "#fff",
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
                           }}/>
        </Drawer.Navigator>
    )
}

export default class App extends React.Component {
    state = {
        isFontLoad: false
    }

    async componentDidMount() {
        await Font.loadAsync({
            "SemiBold": require("./fonts/Montserrat-SemiBold.otf"),
            "Medium": require("./fonts/Montserrat-Medium.otf"),
            "Regular": require("./fonts/Montserrat-Regular.otf"),
        })
        this.state.setState({isFontLoaded:true})
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigation} options={{ headerShown: false }}/>
                    <Stack.Screen name="Главный экран" component={Main}
                                  options={{
                                      title: 'Главная страница', //Set Header Title
                                      headerStyle: {
                                          backgroundColor: '#33495f', //Set Header color
                                          fontFamily: "Medium",
                                      },
                                      headerTintColor: '#AB9055', //Set Header text color
                                      headerTitleStyle: {
                                          fontWeight: 'bold', //Set Header text style
                                      },
                                  }} />
                    <Stack.Screen name="Погода" component={Weather}
                                  options={{
                                      title: 'Погода', //Set Header Title
                                      headerStyle: {
                                          backgroundColor: '#1d1c2f', //Set Header color
                                          fontFamily: "Medium",
                                      },
                                      headerTintColor: '#AB9055', //Set Header text color
                                      borderColor: "#fff",
                                      headerTitleStyle: {
                                          fontWeight: 'bold', //Set Header text style
                                      },
                                  }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

