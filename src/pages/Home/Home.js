import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.style";

const Home = ({ navigation }) => {
    function startButtonOnPress() {
        return (
            navigation.push("GamePage")
        );
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.startButton} onPress={startButtonOnPress}>
                <Text style={styles.startButtonText}>Oyuna Başla</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;