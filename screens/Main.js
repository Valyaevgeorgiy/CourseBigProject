import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ToastAndroid,
    StatusBar,
} from "react-native";
import Clock from './Clock';

export default function Main({navigation}) {

    const styleStatusBar = 'light-content';

    const finalStep = () => {
        navigation.navigate('Погода');
        ToastAndroid.showWithGravity("Введите город и получите прогноз в один клик!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER);
    }
    return (
        <View style={styles.container}>
            <StatusBar animated={true} barStyle={styleStatusBar}/>
            <Text style={styles.TextLogo}>ReadyWeather</Text>
            <Image style={styles.image} source={{uri:('https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif')}} />
            <Clock/>
            <View style={styles.containerRow}>
                <Image style={styles.imagegif} source={{uri:('https://media3.giphy.com/media/h7Y3rfqV9qADYcOJaD/giphy.gif?cid=790b761192fd22d7c25be12e6e913cef17adae00fac930d2&rid=giphy.gif&ct=s')}} />
                <Image style={styles.imagegif} source={{uri:('https://media2.giphy.com/media/Xejz3ZWoOpnRktb6Ok/giphy.gif?cid=790b7611d55c45849c3c9ba37a2b068c5a7c3c31989beb60&rid=giphy.gif&ct=s')}} />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => finalStep()}>
                <Text style={styles.loginText}>Get a weather</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33495f",
        alignItems: "center",
        justifyContent: "center",
    },

    containerRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    image: {
        marginBottom: 10,
        marginTop: 10,
        width: 250,
        height: 150,
    },

    imagegif: {
        width: 150,
        height: 150
    },

    TextLogo: {
        color:'#AB9055',
        fontWeight:'bold',
        fontSize : 22,
        fontFamily: "Medium",
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#87CEFA",
    },

    loginText: {
        fontStyle: "italic",
        fontWeight: "bold",
        fontFamily: "Medium",
    }
});