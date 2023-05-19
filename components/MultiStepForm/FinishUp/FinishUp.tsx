import { StyleSheet, View } from "react-native"
import { colorsPalette } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"

interface Props {
}

export function FinishUp(props: Props): JSX.Element {

    return (
        <>
            <StepHeader
                title="Finishing up"
                subtitle="Double-check everything looks OK before confirming."
            />

        </>
    )
}

const styles = StyleSheet.create({

})
