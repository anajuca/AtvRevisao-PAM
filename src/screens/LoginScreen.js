import React, { useState } from 'react';
import { Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrarSenha, setLembrarSenha] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtitle}>com E-mail e senha</Text>

            <Text style={styles.label}>E-mail</Text>

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Digite seu E-mail'
                keyboardType="email-address"
            />

            <Text style={styles.label}>Senha</Text>

            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder='Digite sua senha'
                secureTextEntry={true}
            />

            <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={lembrarSenha}
                    onValueChange={setLembrarSenha}
                    color={lembrarSenha ? '#4630EB' : undefined}
                />
                <Text style={styles.acbText}>Lembrar senha</Text>
                <Text style={styles.acbText}>Esqueci minha senha</Text>
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

            <View style={styles.imgContainer}>
                <Image source={require('../../assets/Google.png')} style={styles.icon} />
                <Image source={require('../../assets/Facebook.png')} style={styles.icon} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#f3f3f3',
    },
    title: {
        fontSize: 34,
        marginBottom: 5,
        marginTop: 35,
        color: '#555555',
        fontWeight: 470,
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        marginBottom: 35,
        color: '#555555',
        fontWeight: 300,
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
        width: '50%',
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
        fontWeight: 400,
    },
    subText: {
        color: '#555555',
        fontSize: 12,
        fontWeight: 400,
    },
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    checkbox: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        color: '#555555',
        fontSize: 10,
        fontWeight: 300,
    },
    input: {
        backgroundColor: '#bec3c7',
        margin: 10,
        borderRadius: 10,
        width: '100%',
        maxWidth: 350,
        height: 65,
        display: 'flex',
        flexDirection: 'row'
    },
    continue: {
        color: '#6d6d6d',
        fontSize: 12,
        fontWeight: 350,
    }
});