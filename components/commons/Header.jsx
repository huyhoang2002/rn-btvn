import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name="left" size={16}/>
            </TouchableOpacity>
            <Text style={{ width: "20%" }}>Dang Ky</Text>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        paddingHorizontal: 20
    }
})

export default Header