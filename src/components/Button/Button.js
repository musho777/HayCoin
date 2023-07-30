import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { Colors } from "../../../Styles/Colors"
import { Styles } from "../../../Styles/Styles"

export const Button = ({ title, onPress, mb, white }) => {
    return <TouchableOpacity
        style={
            [styles.button,
            { marginBottom: mb },
            white && { backgroundColor: Colors.white_color }
            ]}
        onPress={onPress}>
        <Text style={[
            Styles.whiteBold,
            white && { color: Colors.red_color }

        ]}>{title}</Text>
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