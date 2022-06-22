import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image, Alert, TouchableOpacity } from "react-native";
import styles from "./Game.style";
import CustomAlertButton from "../../components/CustomAlertButton";

const Game = ({ navigation }) => {
    const [activePlayer, setActivePlayer] = useState('x');
    const [markers, setMarkers] = useState([
        null, null, null,
        null, null, null,
        null, null, null
    ]);
    const [gameOver, setGameOver] = useState(false);
    function backButton() {
        return (
            navigation.goBack()
        );
    }
    const markPosition = (position) => {
        if (!markers[position]) {
            let temp = [...markers];
            temp[position] = activePlayer;
            setMarkers(temp);
            if (activePlayer == 'x') {
                setActivePlayer('o')
            } else {
                setActivePlayer('x')
            }
        }
    }
    const resetMarkers = () => {
        setMarkers([
            null, null, null,
            null, null, null,
            null, null, null
        ]);
        setGameOver(false);
        setActivePlayer('x');
    }
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    useEffect(() => {
        const winner = calculateWinner(markers);
        if (winner === 'x') {
            Alert.alert('Oyun Bitti', "X Kazandı", [
                { text: 'Cancel', onPress: () => { }, },
                { text: 'Ok', onPress: () => { resetMarkers(); } }
            ]);
            setGameOver(true)

        } else if (winner === 'o') {
            return (
                Alert.alert('Oyun Bitti', "O Kazandı", [
                    { text: 'Cancel', onPress: () => { } },
                    { text: 'Ok', onPress: () => { resetMarkers(); } },
                ]),
                setGameOver(true)
            );
        }
    }, [markers])

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.homeButton} onPress={backButton}>
                    <Image style={styles.homeIcon} source={require('../../assets/home.png')} />
                </TouchableOpacity>
            </View>

            <View style={[styles.playerInfo, { backgroundColor: activePlayer === 'x' ? '#007ff4' : '#f40075' }]}>
                <Text style={styles.playerTxt}>Sıra {activePlayer === 'x' ? "X'de" : "O'da"}</Text>
            </View>
            <View style={styles.mainContainer}>

                {/* Top Left Cell */}
                <Pressable style={styles.cellTopLeft} onPress={() => gameOver == false ? markPosition(0) : null}>
                    {markers[0] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[0] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Top Mid Cell */}
                <Pressable style={styles.cellTopMid} onPress={() => gameOver == false ? markPosition(1) : null}>
                    {markers[1] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[1] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Top Right Cell */}
                <Pressable style={styles.cellTopRight} onPress={() => gameOver == false ? markPosition(2) : null}>
                    {markers[2] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[2] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Mid Left Cell */}
                <Pressable style={styles.cellMidLeft} onPress={() => gameOver == false ? markPosition(3) : null}>
                    {markers[3] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[3] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Mid Mid Cell */}
                <Pressable style={styles.cellMidMid} onPress={() => gameOver == false ? markPosition(4) : null}>
                    {markers[4] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[4] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Mid Right Cell */}
                <Pressable style={styles.cellMidRight} onPress={() => gameOver == false ? markPosition(5) : null}>
                    {markers[5] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[5] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Bottom Left Cell */}
                <Pressable style={styles.cellBottomLeft} onPress={() => gameOver == false ? markPosition(6) : null}>
                    {markers[6] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[6] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Bottom Mid Cell */}
                <Pressable style={styles.cellBottomMid} onPress={() => gameOver == false ? markPosition(7) : null}>
                    {markers[7] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[7] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>

                {/* Bottom Right Cell */}
                <Pressable style={styles.cellBottomRight} onPress={() => gameOver == false ? markPosition(8) : null}>
                    {markers[8] === 'x' && <Image source={require('../../assets/x.png')} style={styles.icon} />}
                    {markers[8] === 'o' && <Image source={require('../../assets/o.png')} style={styles.icon} />}
                </Pressable>
            </View>
            <Pressable style={styles.cancelButton} onPress={resetMarkers}>
                <Image source={require('../../assets/restart.png')} style={styles.cancelIcon} />
            </Pressable>
        </View>
    );
}

export default Game;