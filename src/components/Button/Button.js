import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { Colors } from "../../../Styles/Colors"
import { Styles } from "../../../Styles/Styles"

export const Button = ({ title }) => {
    return <TouchableOpacity style={styles.button}>
        <Text style={Styles.whiteBold}>{title}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        backgroundColor: Colors.red_color,
        // paddingHorizontal: 15,x`
        paddingVertical: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})