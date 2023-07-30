import { Text } from "react-native"
import { WelcomeWrapper } from "../../components/Welcome/WelcomeWrapper"
import { Styles } from "../../../Styles/Styles"

export const WelcomeScreen = ({ navigation }) => {
    return <WelcomeWrapper buttonText={'Continue'} onPress={() => navigation.navigate('SliderScreen')}>
        <Text style={Styles.title}>Welcome!</Text>
    </WelcomeWrapper>
}