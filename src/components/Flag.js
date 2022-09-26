import react from "react";
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]}/>
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]}/>
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]}/>
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
    },
    flagpole: {
        position: 'absolute',
        height: 22,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 13,
    },
    flag: {
        position: 'absolute',
        height: 10,
        width: 12,
        backgroundColor: '#f22',
        marginLeft: 5,
    },
    base1: {
        position: 'absolute',
        height: 4,
        width: 12,
        backgroundColor: '#222',
        marginLeft: 9,
        marginTop: 17,
    },
    base2: {
        position: 'absolute',
        height: 4,
        width: 20,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 20,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    }
})