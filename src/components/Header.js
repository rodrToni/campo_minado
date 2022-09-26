import react from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import Flag from "./Flag";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Flag bigger/>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        margintTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0080ff',
        padding: 5,
        borderRadius: 5,
    },
    buttonLabel: {
        fontsize: 20,
        color: '#ddd',
        fontWeight: 'bold',
    }
})