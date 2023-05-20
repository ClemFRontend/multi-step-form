import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from "react-native"
import { globalStyles } from "../../../styles"
import { StepHeader } from "../StepHeader/StepHeader"
import { Field } from "../../Field/Field"
import { IPersonalInfo } from "../../../interfaces/IFormInput"
import { PERSONAL_INFO_INPUTS } from "../../../utils/const"
import Footer from "../../Footer/Footer"
// import { Portal } from "@gorhom/portal"

interface Props {
    handleChangeStep: (step: number) => void,
    handleChangeInfo?: (name: string, text: string) => void,
    personalInfo: IPersonalInfo,
}


export function PersonalInfo(props: Props): JSX.Element {
    return (
        <View style={globalStyles.stepContainer}>
            <View style={globalStyles.formContainer}>
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
                            />
                        </View>
                    )
                })}
            </View>
            <Footer handleChangeStep={props.handleChangeStep} currentStep={1} />
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
