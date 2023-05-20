import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Image, NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header/Header';
import { colorsPalette } from './styles';
import { MultiStepForm } from './components/MultiStepForm/MultiStepForm';
import Footer from './components/Footer/Footer';
import { exitField } from './utils/common';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { PersonalInfo } from './components/MultiStepForm/PersonalInfo/PersonalInfo';
import { SelectPlan } from './components/MultiStepForm/SelectPlan/SelectPlan';
import { horizontalTransition } from './utils/animations';
import { theme } from './utils/const';
import { IPersonalInfo } from './interfaces/IFormInput';

const Stack = createStackNavigator();

export default function App(): JSX.Element {

  const [step, setStep] = useState<number>(1)
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>({
    name: "",
    email: "",
    phone: "",
  })

  let [fontsLoaded] = useFonts({
    "Ubuntu-Regular": Ubuntu_400Regular,
    "Ubuntu-Medium": Ubuntu_500Medium,
    "Ubuntu-Bold": Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <View><Text>Font not loaded</Text></View>
  }

  function handleChangeStep(step: number): void {
    if (step !== 5) {
      setStep(step)
    }
    else {
      Alert.alert("Form confirmed !")
    }
  }

  function handleChangePersonalInfo(name: string, text: string): void {
    setPersonalInfo({
      ...personalInfo,
      [name]: text
    })
  }

  return (
    <>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback touchSoundDisabled onPress={() => exitField()}>
        <View style={styles.container}>
          <Header currentStep={step} />
          <View style={styles.stepContainer}>
            <NavigationContainer theme={theme} >
              <Stack.Navigator
                initialRouteName="PersonalInfo"
                screenOptions={{
                  headerShown: false,
                  ...horizontalTransition,
                }}
              >
                <Stack.Screen name="PersonalInfo">
                  {(props) =>
                    <PersonalInfo
                      {...props}
                      handleChangeStep={setStep}
                      handleChangeInfo={handleChangePersonalInfo}
                      personalInfo={personalInfo}
                    />}
                </Stack.Screen>
                <Stack.Screen name="SelectPlan">{(props) => <SelectPlan {...props} handleChangeStep={setStep} />}</Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsPalette.bg.color,
  },
  stepContainer: {
    flex: 1,
    marginTop: -73,
  },
  footerContainer: {
    height: 72,
    backgroundColor: colorsPalette.white.color,
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
});
