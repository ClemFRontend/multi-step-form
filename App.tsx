import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, KeyboardAvoidingView, Platform } from 'react-native';
import Header from './components/Header/Header';
import { colorsPalette } from './styles';
import Footer from './components/Footer/Footer';
import { exitField, isEmptyObject } from './utils/common';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersonalInfo } from './components/MultiStepForm/PersonalInfo/PersonalInfo';
import { SelectPlan } from './components/MultiStepForm/SelectPlan/SelectPlan';
import { horizontalTransition } from './utils/animations';
import { ERROR_FIELD_REQUIRED, ERROR_FORMAT_INVALID, ERROR_SELECT_PLAN, REGEX_EMAIL, REGEX_NAME, REGEX_PHONE, theme } from './utils/const';
import { IPersonalInfo } from './interfaces/IFormInput';
import { MultiStepFormStackParamList } from './types/Navigation';
import { PickAddons } from './components/MultiStepForm/PickAddons/PickAddons';
import { PlanType } from './types/Plan';
import { IPersonalInfoErrors } from './interfaces/IErrors';
import { FinishUp } from './components/MultiStepForm/FinishUp/FinishUp';
import { MultiStepFormEnums } from './components/MultiStepForm/MultiStepFormEnums';

const Stack = createStackNavigator<MultiStepFormStackParamList>();

export default function App(): JSX.Element {

  const [step, setStep] = useState<number>(MultiStepFormEnums.PersonalInfo)
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>({
    name: "Corinnnne Lebeault",
    email: "patrice.lbt@diiage.org",
    phone: "11111111",
  })
  const [errorMessages, setErrorMessages] = useState({})
  const [planSelected, setPlanSelected] = useState("")
  const [planType, setPlanType] = useState<PlanType>("Monthly")
  const [addons, setAddons] = useState<string[]>([])
  const [formIsSubmit, setFormIsSubmit] = useState<boolean>(false)

  let [fontsLoaded] = useFonts({
    "Ubuntu-Regular": Ubuntu_400Regular,
    "Ubuntu-Medium": Ubuntu_500Medium,
    "Ubuntu-Bold": Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <View><Text>Font not loaded</Text></View>
  }

  function handleSubmit() {
    // Actions to submit form...
    setFormIsSubmit(true)
  }

  function handleStepValidation(step: number): boolean {
    let errors: IPersonalInfoErrors = {}
    setErrorMessages({})
    let stepFormIsValid = true

    switch (step) {
      case 1:
        // Check name field
        if (!personalInfo.name.match(REGEX_NAME) || personalInfo.name.length > 30) {
          errors["name"] = ERROR_FORMAT_INVALID
          stepFormIsValid = false
        }

        // Check email field
        if (!personalInfo.email.match(REGEX_EMAIL)) {
          errors["email"] = ERROR_FORMAT_INVALID
          stepFormIsValid = false
        }

        if (!personalInfo.phone.match(REGEX_PHONE)) {
          errors["phone"] = ERROR_FORMAT_INVALID
          stepFormIsValid = false
        }

        for (const [key, value] of Object.entries(personalInfo)) {
          if (!value) {
            stepFormIsValid = false
            errors = {
              ...errors,
              [key]: ERROR_FIELD_REQUIRED
            }
          }
        }

        setErrorMessages(errors)
        return stepFormIsValid

      case 2:
        if (!planSelected) {
          errors = {
            plan: ERROR_SELECT_PLAN
          }
          stepFormIsValid = false
        }

        setErrorMessages(errors)
        return stepFormIsValid

      default:
        return stepFormIsValid

    }
  }

  function handleChangeStep(stepToGo: number): void {

    if (handleStepValidation(step)) {
      if (stepToGo !== 5) {
        setStep(stepToGo)
      }
      else {
        handleSubmit()
      }
    }
    else {
      console.log("Form invalid")
    }
  }

  function handleChangePersonalInfo(name: string, text: string): void {
    setPersonalInfo({
      ...personalInfo,
      [name]: text
    })
  }

  function togglePlanType(): void {
    const plan = planType === "Monthly" ? "Yearly" : "Monthly"
    setPlanType(plan)
  }

  function handleChangeAddons(label: string) {
    // If addon is in list, delete it
    if (addons.includes(label)) {
      setAddons(addons.filter(addon => addon !== label))
    }
    // Else, delete it
    else {
      setAddons([...addons, label])
    }
  }

  return (
    <>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback touchSoundDisabled onPress={() => exitField()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <Header currentStep={step} />
          <View style={styles.stepContainer}>
            <NavigationContainer theme={theme} >
              <Stack.Navigator
                initialRouteName="PersonalInfo"
                // initialRouteName="FinishUp"
                screenOptions={{
                  headerShown: false,
                  ...horizontalTransition,
                }}
              >
                <Stack.Screen name="PersonalInfo">
                  {(props) =>
                    <PersonalInfo
                      {...props}
                      currentStep={step}
                      handleChangeInfo={handleChangePersonalInfo}
                      personalInfo={personalInfo}
                      errors={errorMessages}

                    />}
                </Stack.Screen>
                <Stack.Screen name="SelectPlan">
                  {(props) =>
                    <SelectPlan
                      {...props}
                      currentStep={step}
                      planSelected={planSelected}
                      planType={planType}
                      handlePlanSelected={setPlanSelected}
                      togglePlanType={togglePlanType}
                      errors={errorMessages}
                    />}
                </Stack.Screen>
                <Stack.Screen name="PickAddons">
                  {(props) =>
                    <PickAddons
                      {...props}
                      currentStep={step}
                      planType={planType}
                      addonsChecked={addons}
                      handleChangeAddons={handleChangeAddons}

                    />}
                </Stack.Screen>
                <Stack.Screen name="FinishUp">
                  {(props) =>
                    <FinishUp
                      {...props}
                      planSelected={planSelected}
                      planType={planType}
                      addonsChecked={addons}
                      togglePlanType={togglePlanType}
                      currentStep={step}
                      formIsSubmit={formIsSubmit}
                    />}
                </Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
            <Footer
              handleChangeStep={handleChangeStep}
              currentStep={step}
              formIsSubmit={formIsSubmit}
            />
          </View>
        </KeyboardAvoidingView>
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
