import react from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text>Jogo feito por: Antonio Rodrigues - antoniorod.com</Text>
        </View>
    )
} 

const styles = StyleSheet.create ({
    container: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
})