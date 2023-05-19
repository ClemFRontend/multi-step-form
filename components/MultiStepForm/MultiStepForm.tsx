import { StyleSheet, View } from "react-native"
import { colorsPalette } from "../../styles"
import { PersonalInfo } from "./PersonalInfo/PersonalInfo"
import { SelectPlan } from "./SelectPlan/SelectPlan"
import { PickAddons } from "./PickAddons/PickAddons"
import { FinishUp } from "./FinishUp/FinishUp"

interface Props {
    currentStep: number,
}

export function MultiStepForm(props: Props): JSX.Element {
    const { currentStep = 1 } = props
    switch (currentStep) {
        case 1:
            return <PersonalInfo />
        case 2:
            return <SelectPlan />
        case 3:
            return <PickAddons />
        case 4:
            return <FinishUp />
        // Thank you page
        case 5:
            return <></>
        default:
            return <></>

    }
}

const styles = StyleSheet.create({
})
