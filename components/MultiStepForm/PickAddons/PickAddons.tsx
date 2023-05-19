import { StyleSheet, View } from "react-native"
import { colorsPalette } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"

interface Props {
}

export function PickAddons(props: Props): JSX.Element {

    return (
        <>
            <StepHeader
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />

        </>
    )
}

const styles = StyleSheet.create({

})
