import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { Colors } from "../../../Styles/Colors"
import { Styles } from "../../../Styles/Styles"
import { ButtonArrow } from "../../../assets/svg/svgs"

export const ButtonWhiteIcone = ({ svg, title, marginV }) => {
    return <TouchableOpacity style={[styles.button, { marginVertical: marginV }]}>
        {svg}
        <Text style={Styles.redBold}>{title}</Text>
        <ButtonArrow />
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        backgroundColor: Colors.white_color,
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
    },
})