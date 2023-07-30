import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { WelcomeWrapper } from "../../components/Welcome/WelcomeWrapper"
import { Styles } from "../../../Styles/Styles"
import { Button } from "../../components/Button/Button"
import { AppleSvg, FbSvg, GSvg } from "../../../assets/svg/svgs"

export const SignUpScreen = ({ navigation }) => {
    return <WelcomeWrapper >
        <View style={styles.block}>
            <Text style={Styles.white700}>Sign up to continue</Text>
            <View style={{ marginVertical: 30 }}>
                <Button title={'Continue with email'} mb={20} onPress={() => navigation.navigate('SliderScreen')} />
                <Button white title={'Use phone number'} onPress={() => navigation.navigate('SliderScreen')} />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={styles.line} />
                <Text style={[Styles.white40012, { marginTop: -7 }]}>or sign up {'\n'} with</Text>
                <View style={styles.line} />
            </View>
            <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity>
                    <FbSvg />
                </TouchableOpacity>
                <TouchableOpacity>
                    <GSvg />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AppleSvg />
                </TouchableOpacity>
            </View>
        </View>
    </WelcomeWrapper>
}
const styles = StyleSheet.create({
    block: {
        backgroundColor: `rgba(6, 6, 6, 0.42)`,
        paddingVertical: 30,
        paddingHorizontal: 25,
    },
    line: {
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.40))',
        width: '33%',
        height: 0.1,
    }
})