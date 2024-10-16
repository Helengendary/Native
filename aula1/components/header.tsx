import { Image, ImageSourcePropType, Text, StyleSheet } from "react-native"
import { View } from "react-native"

export const Menu = ({image} : {image: ImageSourcePropType | undefined}) => {
    return (
        <>
            <View style={styles.background}>
                <Text style={styles.text}>Header exemplo</Text>
                <Image source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    background : {
        backgroundColor: "#090909",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    text: {
        color: "#ffffff",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900"
    }
});