import React from 'react';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LandingScreen({ navigation }) {
    return(
    <View style={styles.container}>

        <Image
            source={require('../../assets/casual_dog.png')}
            style={{ width: '98%', height: 310 }}
        />

        <Text style={styles.title}>Ótimo dia!</Text>
        <Text style={styles.subtitle}>Como deseja acessar?</Text>

        <TouchableOpacity
            style={styles.acessButton}
            onPress={() => navigation.navigate('Login')}
        >
            <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../../assets/Google.png')}
                        style={{ width: 32, height: 32 }}
                    />
                </View>
                <Text style={styles.acbText}>Como deseja acessar?</Text>
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.anotherButton}
        >
            <Text style={styles.anbText}>Outras opções</Text>
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
        fontSize: 34,
        marginBottom: 10,
        marginTop: 35,
        color: '#555555'
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        marginBottom: 10,
        color: '#555555'
    },
    iconContainer: {
        backgroundColor: '#fafafa',
        borderRadius: 5,
        padding: 5,
        marginRight: 140,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    acessButton: {
        backgroundColor: '#14c871',
        margin: 10,
        borderRadius: 10,
        width: '100%',
        maxWidth: 350,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    anotherButton: {
        backgroundColor: '#fefefe',
        margin: 10,
        borderRadius: 10,
        borderColor: '#14c871',
        borderWidth: 1,
        width: 350,
        height: 65,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    acbText: {
        color: '#fefefe',
        fontSize: 12,
    },
    anbText: {
        color: '#555555',
        fontSize: 12
    }
});