import { Text } from "react-native"
import { WelcomeWrapper } from "../../components/Welcome/WelcomeWrapper"
import { Styles } from "../../../Styles/Styles"

export const WelcomeScreen = () => {
    return <WelcomeWrapper buttonText={'Continue'}>
        <Text style={Styles.title}>Welcome!</Text>
    </WelcomeWrapper>
}