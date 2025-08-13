import React from 'react';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

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
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../assets/Google.png')}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.acbText}>Como deseja acessar?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.anotherButton}
            >
                <Text style={styles.anbText}>Outras opções</Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
    },
    title: {
        alignContent: 'center',
        fontSize: 34,
        marginBottom: 15,
        marginTop: 35,
        color: '#555555',
        fontWeight:470,
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        marginBottom: 35,
        color: '#555555',
        fontWeight:500,
    },
    icon: {
        width: 32,
        height: 32,
    },
    imgContainer: {
        width: 38,
        height: 38,
        position: 'absolute',
        left: 15,
        backgroundColor: '#fefefe',
        borderRadius: 5,
        padding: 3
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
        display: 'flex',
        flexDirection: 'row'
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
        fontWeight:400,
    },
    anbText: {
        color: '#555555',
        fontSize: 12,
        fontWeight:400,
    }
});