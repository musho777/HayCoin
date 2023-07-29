import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Logo } from "../../../assets/svg/svgs"
import { Styles } from "../../../Styles/Styles"
import { Button } from "../Button/Button"

export const WelcomeWrapper = ({ children, buttonText }) => {
    return <ImageBackground
        style={styles.block}
        source={require('../../../assets/img/Welcome.jpg')}
    >
        <SafeAreaView style={{ height: '93%' }}>
            <View style={styles.logo}>
                <Logo />
            </View>
            <View style={[Styles.wrapper]}>
                {children}
            </View>
            <View style={Styles.buttonWrapper}>
                <Button title={buttonText} />
            </View>
        </SafeAreaView>
    </ImageBackground>
}
const styles = StyleSheet.create({
    block: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    logo: {
        marginTop: 120,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 61
    },
})