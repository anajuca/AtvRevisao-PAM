import React from 'react';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LandingScreen({ navigation }) {
    return(
    <View style={styles.container}>

        <Image
            source={require('../../assets/casual_dog.png')}
        />

        <Text style={styles.title}>Ótimo dia!</Text>
        <Text style={styles.subtitle}>Como deseja acessar?</Text>

        <TouchableOpacity
            style={styles.acessButton}
            onPress={() => navigation.navigate('Login')}
        >
            <Image
                source={require('../../assets/Google.png')}
            />
            <Text style={styles.acbText}>Como deseja acessar?</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.anotherButton}
        >
            <Text style={styles.anbText}>Outras formas</Text>
        </TouchableOpacity>

    </View>
)};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefefe',
    },
    title: {
        alignContent: 'center',
        fontSize: 24,
        marginBottom: 25,
        color: '#555555'
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: '#555555'
    },
    acessButton: {
        backgroundColor: '#14c871',
        margin: 10,
        borderRadius: 20,
        width: windowWidth * 0.5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    anotherButton: {
        backgroundColor: '#fefefe',
        margin: 10,
        borderRadius: 20,
        width: windowWidth * 0.5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    acbText: {
        color: '#fefefe',
        fontSize: 16
    },
    anbText: {
        color: '#555555',
        fontSize: 16
    }
});