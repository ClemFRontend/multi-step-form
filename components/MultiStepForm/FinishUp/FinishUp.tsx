import { StyleSheet, View } from "react-native"
import { colorsPalette, globalStyles } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"
import { useEffect } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MultiStepFormStackParamList } from "../../../interfaces/Navigation"

interface Props {
    currentStep: number,
    navigation: NativeStackNavigationProp<MultiStepFormStackParamList, "SelectPlan">,
}

export function FinishUp(props: Props): JSX.Element {

    const step: number = 4

    useEffect(() => {
        if (props.currentStep !== undefined) {
            if (props.currentStep === step - 1) {
                props.navigation.navigate("PickAddons")
            }
            // if (props.currentStep === step + 1) {
            //     props.navigation.navigate("FinishUp")
            // }
        }
    }, [props.currentStep])

    return (
        <>
            <View style={globalStyles.stepContainer}>
                <View style={globalStyles.stepSubContainer}>
                    <StepHeader
                        title="Finishing up"
                        subtitle="Double-check everything looks OK before confirming."
                    />
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({

})
