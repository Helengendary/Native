import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [count, setcount] = useState(0);

    console.log(email, pass)
    console.log(typeof email, typeof pass)

    const onPress = () => {
        router.push("/(tabs)")
    };

    const imageBack = {
        uri: '../assets/images/fire.gif'
    };

    const caveira = {
        uri: '../assets/images/caveira.png'
    };

    const moto = {
        uri: '../assets/images/moto.webp'
    };
    return (

        <>
            <View >
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#FF0000FF', '#FF4D00FF', '#9F0A0AFF']}
                >
                    <View style={styles.cabecalho}>
                        <Text>Ghosters Riders</Text>
                        <Image source={caveira} style={styles.caveira}></Image>
                    </View>



                    <SafeAreaView>
                        <ImageBackground source={imageBack} width={30} height={20} borderRadius={10}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                placeholder="Digite seu E-mail"
                                value={email}
                                keyboardType="email-address"
                            />
                        </ImageBackground>

                        <ImageBackground source={imageBack} width={30} height={20} borderRadius={10}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setPass}
                                value={pass}
                                placeholder="Insira sua senha"
                                keyboardType="numeric"
                                secureTextEntry={true}
                                />
                        </ImageBackground>
                    </SafeAreaView>

                    <View>
                        <ImageBackground source={moto} style={styles.moto} borderRadius={10}>
                            <TouchableOpacity style={styles.button} onPress={onPress}>
                                <Text style={styles.colorbutton}>Ride Here</Text>
                            </TouchableOpacity>    
                        </ImageBackground>
                    </View>

                    <Link href={"/register"}>Cadatrar</Link>
                </LinearGradient>
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    input: {
        paddingHorizontal:15,
        paddingVertical:20,
        borderRadius: 10,
        color: "#ffffff",
        fontFamily: "Antom",
    },
    button: {
        alignItems: 'center',
        width: 300,
        height: 300,
        fontFamily: "aaa",
    },
    colorbutton: {
        color: "#ffffff",
        fontSize: 20,
    },
    caveira: {
        width: 100,
        height: 100,
    },
    moto: {
        width: "80%",
        height: "80%", 
    },
    cabecalho: {
        alignItems: "center",
    },
})