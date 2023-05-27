import { StyleSheet, View } from "react-native"
import { colorsPalette, globalStyles } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"
import { PlanType } from "../../../types/Plan"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MultiStepFormStackParamList } from "../../../types/Navigation"
import { useEffect, useState } from "react"
import { Addon, AddonsPicker } from "../../AddonsPicker/AddonsPicker"
import { ADDONS } from "../../../utils/const"
import { MultiStepFormEnums } from "../MultiStepFormEnums"

interface Props {
    planType: PlanType,
    currentStep: number,
    navigation: NativeStackNavigationProp<MultiStepFormStackParamList, "PickAddons">,
    addonsChecked: string[],
    handleChangeAddons: (addonName: string) => void
}

export function PickAddons(props: Props): JSX.Element {

    const step: number = MultiStepFormEnums.PickAddons

    useEffect(() => {
        if (props.currentStep === step - 1) {
            props.navigation.navigate("SelectPlan")
        }
        if (props.currentStep === step + 1) {
            props.navigation.navigate("FinishUp")
        }
    }, [props.currentStep])

    return (
        <>
            <View style={globalStyles.stepContainer}>
                <View style={globalStyles.stepSubContainer}>
                    <StepHeader
                        title="Pick add-ons"
                        subtitle="Add-ons help enhance your gaming experience."
                    />
                    <View style={styles.addonsPicker}>
                        <AddonsPicker
                            addonsChecked={props.addonsChecked}
                            handleCheckAddon={props.handleChangeAddons}
                        >
                            {ADDONS.map(addon => {
                                const additionalPriceStr = props.planType === "Monthly" ? `+$${addon.additionalPrice.monthly}/mo` : `+$${addon.additionalPrice.yearly}/yr`
                                return (
                                    <Addon
                                        key={`addon-${addon.name}`}
                                        name={addon.name}
                                        description={addon.description}
                                        additionnalPrice={additionalPriceStr}
                                    />
                                )
                            })}
                        </AddonsPicker>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    addon: {
        marginTop: 12,
    },
    addonsPicker: {
        marginTop: 10,
    }
})
