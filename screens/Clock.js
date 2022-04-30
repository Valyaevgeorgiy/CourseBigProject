import React, { Component } from "react";
import { Text } from "react-native";

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // Вызов после рендеринга компонента
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Вызов перед удалением компонента
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <Text style={{marginTop: 20, marginBottom: 20, fontFamily: "Medium", color: '#AB9055', fontWeight: 'bold',fontSize:18}}>
                Moscow Time: {this.state.date.toLocaleTimeString()}
            </Text>
        );
    }
}

export default Clock;