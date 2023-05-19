import { StyleSheet, View } from "react-native"
import { colorsPalette } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"

interface Props {
}

export function SelectPlan(props: Props): JSX.Element {

    return (
        <>
            <StepHeader
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />

        </>
    )
}

const styles = StyleSheet.create({

})
