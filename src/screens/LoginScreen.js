import React from 'react';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
    return(
         <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtitle}>com E-mail e senha</Text>

            <Text style={styles.label}>E-mail</Text>

            <TextInput 
                style={styles.input}
                value={email}
                placeholder='Digite seu E-mail'
            />

            <Text style={styles.label}>Senha</Text>

            <TextInput 
                style={styles.input}
                value={senha}
                placeholder='Digite sua senha'
            />

            <View style={styles.checkboxContainer}>
                <CheckBox style={styles.checkbox}/>
                <Text>Lembrar senha</Text>
                <Text>Esqueci minha senha</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.acessButton}>
                    <Text style={styles.acbText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signUpButton}> 
                    <Text style={styles.subText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.continue}>Ou continue com</Text>

            <View style={styles.images}>
                <Image source={require('../../assets/Google.png')}style={styles.icon}/>
                <Image source={require('../../assets/Facebook.png')}style={styles.icon}/>
            </View>
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
    signUpButton: {
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
    subText: {
        color: '#555555',
        fontSize: 12,
        fontWeight:400,
    },
    checkboxContainer: {

    },
    checkbox: {

    },
    buttons: {

    },
    label: {

    },
    continue: {

    }
});