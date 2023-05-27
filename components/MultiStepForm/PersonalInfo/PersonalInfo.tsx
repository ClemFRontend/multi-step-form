import { StyleSheet, View } from "react-native"
import { globalStyles } from "../../../styles"
import { StepHeader } from "../StepHeader/StepHeader"
import { Field } from "../../Field/Field"
import { IPersonalInfo } from "../../../interfaces/IFormInput"
import { PERSONAL_INFO_INPUTS } from "../../../utils/const"
import { useEffect } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MultiStepFormStackParamList } from "../../../types/Navigation"
import { IPersonalInfoErrors } from "../../../interfaces/IErrors"
import { MultiStepFormEnums } from "../MultiStepFormEnums"

interface Props {
    handleChangeInfo?: (name: string, text: string) => void,
    personalInfo: IPersonalInfo,
    currentStep: number,
    navigation: NativeStackNavigationProp<MultiStepFormStackParamList, "PersonalInfo">,
    errors: IPersonalInfoErrors,
}

export function PersonalInfo(props: Props): JSX.Element {

    const step: number = MultiStepFormEnums.PersonalInfo
    useEffect(() => {
        if (props.currentStep === step + 1) {
            props.navigation.navigate("SelectPlan")
        }
    }, [props.currentStep])

    return (
        <View style={globalStyles.stepContainer}>
            <View style={globalStyles.stepSubContainer}>
                <StepHeader
                    title="Personal info"
                    subtitle="Please provide your name, email address, and phone number."
                    style={styles.header}
                />
                {PERSONAL_INFO_INPUTS.map((input) => {
                    return (
                        <View style={styles.field} key={input.name}>
                            <Field
                                name={input.name}
                                label={input.label}
                                placeholder={input.placeHolder}
                                keyboardType={input.keyboardType}
                                maxLenght={input.maxLength}
                                handleChange={props.handleChangeInfo}
                                value={props.personalInfo[input.name]}
                                errorMessage={props.errors[input.name]}
                                autoCapitalize={input.autoCapitalize}
                                autoCorrect={input.autoCorrect}
                            />
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 6,
    },
    field: {
        marginTop: 16,
    },
})
