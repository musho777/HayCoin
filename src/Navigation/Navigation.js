import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/welcome/WelcomeScreen';
import { ChooseLanguageScreen } from '../screens/welcome/ChooseLanguageScreen';
import SliderScreen from '../screens/welcome/SliderScreen';
import { SignUpScreen } from '../screens/signUp/SignUpScreen';



const Stack = createStackNavigator();

export const Navigation = ({ }) => {
    return <NavigationContainer >
        <Stack.Navigator
            initialRouteName={'WelcomeScreen'}
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ChooseLanguageScreen"
                component={ChooseLanguageScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SliderScreen"
                component={SliderScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>

};