import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header/Header';
import { colorsPalette } from './styles';
import { MultiStepForm } from './components/MultiStepForm/MultiStepForm';
import Footer from './components/Footer/Footer';
import { exitField } from './utils/common';

export default function App(): JSX.Element {

  const [step, setStep] = useState<number>(1)

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

  return (
    <>
      <TouchableWithoutFeedback touchSoundDisabled onPress={() => exitField()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header currentStep={step} maxStep={4} />
          <View style={styles.stepContainer}>
            <MultiStepForm currentStep={step} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Footer */}
      <View style={[
        styles.footerContainer,
        { justifyContent: step === 1 ? "flex-end" : "space-between" }
      ]}>
        <Footer currentStep={step} goToStep={handleChangeStep} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsPalette.bg.color,
  },
  stepContainer: {
    backgroundColor: colorsPalette.white.color,
    marginHorizontal: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 10,
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
