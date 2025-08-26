import React, { useState } from 'react';
import { Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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

            <View style={styles.containerSenha}>

                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder='Digite sua senha'
                    secureTextEntry={!showPassword}

                />

                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
                    <Icon
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={24}
                        color="#888"
                    />
                </TouchableOpacity>


            </View>


            <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={lembrarSenha}
                    onValueChange={setLembrarSenha}
                    color={lembrarSenha ? '#14c871' : '#14c871'}
                />
                <Text style={styles.remind}>Lembrar senha</Text>
                <Text style={styles.forgot}>Esqueci minha senha</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.acessButton}>
                    <Text style={styles.acbText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.subText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator}>
                <View style={styles.line}></View>
                <Text style={styles.continue}>Ou continue com</Text>
                <View style={styles.line}></View>
            </View>

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
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        marginBottom: 100
    },
    title: {
        fontSize: 34,
        marginBottom: 5,
        marginTop: 35,
        color: '#555555',
        fontWeight: 470,
        right: 115
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        marginBottom: 20,
        color: '#555555',
        fontWeight: 330,
        right: 115
    },
    icon: {
        width: 50,
        height: 50,

    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
        marginTop: 25,
        width: '65%',
    },
    acessButton: {
        backgroundColor: '#14c871',
        margin: 10,
        borderRadius: 10,
        width: 160,
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
        width: 160,
        height: 65,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 40,
        width: '90%',
    },
    line: {
        height: 1,
        backgroundColor: '#b6b6b6',
        width: "30%"
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
    remind: {
        color: '#555555',
        fontSize: 12,
        fontWeight: 350,
        right: 35,
        marginTop: 2,
    },
    forgot: {
        color: '#555555',
        fontSize: 12,
        fontWeight: 350,
        left: 40,
        marginTop: 2,
    },
    checkboxContainer: {
        flexDirection: 'row',
        margin: 10
    },
    checkbox: {
        right: 45
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        color: '#555555',
        fontSize: 12,
        fontWeight: 300,
        right: 155,
        marginTop: 10,
    },
    input: {
        backgroundColor: '#dbdbdb',
        margin: 10,
        marginTop: 5,
        borderRadius: 10,
        width: '100%',
        maxWidth: 350,
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15
    },
    iconButton: {
        right: 50
    },
    containerSenha: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        left: 10
    },
    continue: {
        color: '#6d6d6d',
        fontSize: 12,
        fontWeight: 350,
    },
});