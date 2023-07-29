import { StyleSheet, Text } from "react-native"
import { Styles } from "../../../Styles/Styles"
import { WelcomeWrapper } from "../../components/Welcome/WelcomeWrapper"
import { ButtonWhiteIcone } from "../../components/ButtonWhiteIcone"
import { World } from "../../../assets/svg/svgs"

export const ChooseLanguageScreen = () => {
    return <WelcomeWrapper buttonText='Confirm'>
        <Text style={styles.text}>Choose your language to continue.</Text>
        <ButtonWhiteIcone marginV={25} svg={<World />} title={'Choose your language'} />
    </WelcomeWrapper>
}
const styles = StyleSheet.create({
    text: {
        ...Styles.whiteBold,
        fontSize: 24,
        textAlign: 'left',
        lineHeight: 36
    }
})