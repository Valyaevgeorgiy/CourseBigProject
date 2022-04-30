import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    Animated,
} from "react-native";
import axios from 'axios';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            data: [],
            loading: false,
            doneInput: "",
            isLoaded: true,
            isAlert: false,
            refreshing: false,
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        const paramCity = this.props.route.params.screen;
        this.setState({data: []});
        console.log(new Date().toLocaleString())

        if (paramCity.length > 0) {
            axios({
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${paramCity}&units=metric&appid=вашключапи&lang=ru`,
            })
                .then(res => {
                    console.log(res)
                    this.setState({data: res.data});
                    this.setState({loading: false});
                    this.setState({doneInput: paramCity})
                })
                .catch(err => {
                    console.dir(err);
                })
                .finally(() => {
                    console.log("123123")
                    Animated.timing(this.state.fadeAnim, {
                        toValue: 1,
                        duration: 4000
                    }).start();
                });
        } else {
            console.log("no city")
        }
    }

    render() {
        const fetchDataHandler = () => {
            this.setState({loading: true});
            this.setState({input: ""})
            axios({
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input.trim()}&units=metric&appid=вашключапи&lang=ru`,
            })
                .then(res => {
                    console.log(res)
                    this.setState({data: res.data});
                    this.setState({loading: false});
                    this.setState({doneInput: input})
                })
                .catch(err => {
                    console.dir(err);
                })
                .finally(() => {
                    console.log(this.state.data)
                    if (this.state.data.length === 0) {
                        this.setState({isLoaded: false});
                        Alert.alert(
                            "Город не найден",
                            "Попробуйте ввести город снова",
                            [
                                {text: "OK", onPress: () => console.log("Был введён не тот город, нажата кнопка ОК!")}
                            ]
                        )
                        this.setState({isAlert: true});
                    } else {
                        this.setState({isLoaded: true});
                        this.setState({isAlert: false});
                    }
                });
        }
        const fetchAndUpdateInput = () => {
            console.log(this.state.input)
            let nowText = this.state.input.trim();
            this.setState({input: nowText, doneInput: nowText, data: []});
            fetchDataHandler();
        };

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: "#1d1c2f",
                alignItems: "center",
                justifyContent: "center",
            },
            TextLogo: {
                color:'#AB9055',
                fontWeight:'bold',
                fontSize : 22,
                marginBottom: 20,
                fontFamily: "Medium",
            },
            image: {
                marginBottom: 10,
                marginTop: 10,
                width: 250,
                height: 150,
                borderRadius: 15,
            },
            gifMain: {
                marginTop: 10,
                width: 300,
                height: 200,
                borderRadius: 15,
            },
            infoView: {
                alignItems: 'center',
                justifyContent: 'center',
            },
            cityCountryText: {
                fontFamily: "Medium",
                color:'#fff',
                fontWeight:'bold',
                fontSize: 28,
                marginTop: 50,
            },
            dateText: {
                fontFamily: "Medium",
                fontWeight:'bold',
                fontSize: 20,
                color: '#AB9055',
                marginVertical: 10,
            },
            textInput: {
                borderWidth: 5,
                paddingVertical: 20,
                paddingLeft: 15,
                width: 250,
                backgroundColor: '#fff',
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 17,
                borderRadius: 22,
                borderColor: '#AB9055',
            },
            tempText: {
                fontFamily: "Medium",
                color:'#fff',
                fontWeight:'bold',
                fontSize: 30,
                marginVertical: 10,
            },
            minMaxText: {
                fontFamily: "Medium",
                color:'#AB9055',
                fontWeight:'bold',
                fontSize: 20,
                marginVertical: 10,
            },
            minMaxTextF: {
                fontFamily: "Medium",
                color:'#AB9055',
                fontWeight:'bold',
                fontSize: 18,
                marginTop: 5,
                marginBottom: 10,
            },
            descWeather: {
                fontFamily: "Medium",
                color:'#fff',
                fontWeight:'bold',
                fontSize: 15,
                marginVertical: 2,
            },
            humidity: {
                fontFamily: "Medium",
                color:'#AB9055',
                fontWeight:'bold',
                textAlign: "center",
                fontSize: 15,
                marginVertical: 5,
            },
            windspeed: {
                fontFamily: "Medium",
                color:'#fff',
                fontWeight:'bold',
                textAlign: "center",
                fontSize: 12,
                marginVertical: 5,
            }
        });

        let uriGif = "";

        let ListForecast = ["пасмурно", "ясно", "переменная облачность", "небольшая облачность",
            "облачно с прояснениями", "небольшой дождь", "дождь", "небольшой проливной дождь", "дымка", "туман",
            "небольшой снег", "небольшой снегопад", "плотный туман", "небольшая морось", "пыльная буря", "сильный дождь"];

        switch (this.state.data?.weather?.[0]?.description) {
            case ListForecast[0]:
                uriGif = 'https://i.gifer.com/2Het.gif';
                break;
            case ListForecast[1]:
                uriGif = "https://media.giphy.com/media/kNUDroLCe1KCY/giphy.gif";
                break;
            case ListForecast[2]:
                uriGif = "https://thumbs.gfycat.com/LeadingBarrenKoodoo-size_restricted.gif";
                break;
            case ListForecast[3]:
                uriGif = "https://media.giphy.com/media/k3CeSrt9IZ6aorWCy1/giphy.gif";
                break;
            case ListForecast[4]:
                uriGif = "https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif";
                break;
            case ListForecast[5]:
            case ListForecast[7]:
            case ListForecast[13]:
                uriGif = "https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif";
                break;
            case ListForecast[6]:
            case ListForecast[15]:
                uriGif = "https://media.giphy.com/media/wUbvwVIQlrYSo47lxG/giphy.gif";
                break;
            case ListForecast[8]:
            case ListForecast[9]:
            case ListForecast[12]:
                uriGif = "https://media.giphy.com/media/iplVhhvRy4r3W/giphy.gif";
                break;
            case ListForecast[10]:
            case ListForecast[11]:
                uriGif = "https://media.giphy.com/media/kNUDroLCe1KCY/giphy.gif";
                break;
            case ListForecast[14]:
                uriGif = "https://media.giphy.com/media/AUc4qeZxG28lq/giphy.gif";
                break;
            default:
                uriGif = "https://cdn.dribbble.com/users/224485/screenshots/1953696/weathernew.gif";
        }

        const wait = (timeout) => {
            return new Promise(resolve => setTimeout(resolve, timeout));
        }

        const onRefresh = () => {
            this.setState({refreshing: true});
            fetchDataHandler();
            wait(3000).then(() => this.setState({refreshing: false}));
        }

        return (
            <View style={styles.container}>
                {this.state.doneInput.length > 0 && this.state.isLoaded && (
                    <ScrollView contentContainerStyle={styles.infoView}
                                refreshControl={
                                    <RefreshControl refreshing={this.state.refreshing} onRefresh={onRefresh}/>
                                }>
                        <Animated.View style={[
                            styles.infoView,
                            {
                                opacity: this.state.fadeAnim
                            }
                        ]}>
                            <Text style={styles.cityCountryText}>{} {`${this.state.data?.name} ${this.state.data?.sys?.country}`}</Text>
                            <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
                            <Image style={styles.image} source={{uri: (uriGif)}}/>
                            <Text style={styles.tempText}>{`${Math.round(
                                this.state.data?.main?.temp,
                            )}° (${(Math.round(this.state.data?.main?.temp * (9/5))) + 32}°F)`}</Text>
                            <Text style={styles.descWeather}>{`(${this.state.data?.weather?.[0]?.description[0].toUpperCase() + this.state.data?.weather?.[0]?.description?.slice(1)})`}</Text>
                            <Text style={styles.minMaxText}>{`Мин ${Math.round(this.state.data?.main?.temp_min)}° / Макс ${Math.round(this.state.data?.main?.temp_max)}°`}</Text>
                            <Text style={styles.minMaxTextF}>{`Мин ${(Math.round(this.state.data?.main?.temp_min * (9/5))) + 32}°F / Макс ${(Math.round(this.state.data?.main?.temp_max * (9/5))) + 32}°F`}</Text>
                            <Text style={styles.descWeather}>{`Ощущается как ${Math.round(this.state.data?.main?.feels_like)}° (${(Math.round(this.state.data?.main?.feels_like * (9/5))) + 32}°F)`}</Text>
                            <Text style={styles.humidity}>{`Влажность: ${this.state.data?.main?.humidity}%`}</Text>
                            <Text style={styles.windspeed}>{`Скорость ветра: ${Math.round(this.state.data?.wind?.speed)} м/с, давление - ${Math.round((this.state.data?.main?.pressure) / (1.333))} мм.рт.ст.`}</Text>
                        </Animated.View>
                    </ScrollView>
                )}
                <TextInput
                    placeholder="Введите любой город..."
                    style={styles.textInput}
                    onChangeText={text => this.setState({input: text})}
                    placeholderTextColor={'#000'}
                    onSubmitEditing={fetchAndUpdateInput}
                    value={this.state.input}
                />
                {(!this.state.doneInput || !this.state.isLoaded) && (
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={styles.TextLogo}>ReadyWeather</Text>
                        <Image style={styles.gifMain} source={{uri: ("https://cdn.dribbble.com/users/224485/screenshots/1953696/weathernew.gif")}}/>
                        <ActivityIndicator size={'large'} color={'#AB9055'} />
                    </View>
                )}
            </View>
        );
    }
}
