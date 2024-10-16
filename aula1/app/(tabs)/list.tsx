import { FlatList, SafeAreaView, Text, StyleSheet, Pressable, Modal, Alert } from "react-native";
import data from "@/constants/dataEx.json"
import {Item} from "@/components/item"
import { View } from "react-native";
import { useState } from "react";

export default function List() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <View style={styles.center}>
            <View style={styles.background}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}>

                    <Text>Olá Mundo!</Text>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Hide Modal</Text>
                    </Pressable>

                </Modal>
            </View>


            <Text>Aqui você está a lista</Text>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({item}) => <Item nome={item.nome} idade={item.idade} data={item.data} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            <Pressable
                onPress={() => setModalVisible(true)}>
                <Text>Show Modal</Text>
            </Pressable>
        </View>
        </>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },

    back: {
        paddingHorizontal: 20,
    },

    center: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
    },

    background: {
        backgroundColor: "#ffffff",
    }
});