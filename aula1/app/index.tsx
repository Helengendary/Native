import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [count, setcount] = useState(0);

    console.log(email, pass)
    console.log(typeof email, typeof pass)

    const onPress = () => {
        router.push("/(tabs)")
    };

    return (
        <>
            <View>
                <Text>Login</Text>

                <SafeAreaView>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        placeholder="Digite seu E-mail"
                        value={email}
                        keyboardType="email-address"
                        secureTextEntry={true}
                    />

                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPass}
                        value={pass}
                        placeholder="Insira sua senha"
                        keyboardType="numeric"
                        secureTextEntry={true}
                    />
                </SafeAreaView>

                    <View>
                        <Text>{count}</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text>Press Here</Text>
                    </TouchableOpacity>    

                    <Link href={"/register"}>Cadatrar</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    input: {
        paddingHorizontal:10,
        paddingVertical:5,
        borderWidth: 3,
        borderColor: "#D51111FF",
        borderRadius: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        fontFamily: "aaa",
      },
})