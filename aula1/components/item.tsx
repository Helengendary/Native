import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export const Item = ({nome, idade, data, imagem} : {nome: string, idade: string, data: string, imagem: string}) => {
    return (
        <>
        <View style={styles.itemList}>
            <Image style={styles.imageStyle} source={imagem}></Image>
            <Text>{nome}</Text>
            <Text>{idade}</Text>
            <Text>{data}</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create ({
    itemList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4168a4d4",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
    },
    imageStyle: {
        width: 30,
        height: 30
    }
})