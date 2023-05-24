import { StyleSheet, Switch, View } from "react-native"
import { colorsPalette, globalStyles } from "../../../styles"
import { StepHeader } from "../StepHeader/StepHeader"
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MultiStepFormStackParamList } from "../../../interfaces/Navigation";
import { OptionPicker } from "../../OptionsPicker/OptionsPicker";
import { SELECT_PLAN } from "../../../utils/const";
import { BodyText } from "../../Text/Text";
import { ISelectPlanError } from "../../../interfaces/IErrors";
import { PlanType } from "../../../interfaces/IPlan";

interface Props {
    currentStep: number,
    planSelected: string,
    errors: ISelectPlanError,
    planType: PlanType,
    handlePlanSelected: (option: string) => void,
    togglePlanType: () => void,
    navigation: NativeStackNavigationProp<MultiStepFormStackParamList, "SelectPlan">,
}

export function SelectPlan(props: Props): JSX.Element {

    const step: number = 2

    function handleChange() {
        if (props.togglePlanType) {
            props.togglePlanType()
        }
    }

    useEffect(() => {
        if (props.currentStep !== undefined) {
            if (props.currentStep === step - 1) {
                props.navigation.navigate("PersonalInfo")
            }
            if (props.currentStep === step + 1) {

                props.navigation.navigate("PickAddons")
            }
        }
    }, [props.currentStep])

    return (
        <>
            <View style={globalStyles.stepContainer}>
                <View style={globalStyles.stepSubContainer}>
                    <StepHeader
                        title="Select your plan"
                        subtitle="You have the option of monthly or yearly billing."
                        style={styles.header}
                    />
                    {props.errors.plan && <BodyText fontWeigth="bold" customStyle={styles.error} >{props.errors.plan}</BodyText>}
                    {SELECT_PLAN.map((plan) => {
                        const price = props.planType === "Monthly" ? plan.price.monthly : plan.price.yearly
                        const priceStr = props.planType === "Monthly" ? `$${price}/mo` : `$${price}/yr`
                        return (
                            <View style={styles.option} key={`option-${plan.label}`}>
                                <OptionPicker
                                    label={plan.label}
                                    handleSelectOption={props.handlePlanSelected}
                                    optionSelected={props.planSelected}
                                    logo={plan.logo}
                                    price={priceStr}
                                />
                            </View>
                        )
                    })}
                    <View style={styles.switchPlanType}>
                        <BodyText customStyle={[
                            styles.planTypeText,
                            { color: props.planType === "Monthly" ? colorsPalette.denim.color : colorsPalette.grey.color }
                        ]}
                            fontWeigth="medium">
                            Monthly
                        </BodyText>
                        <Switch
                            thumbColor={colorsPalette.white.color}
                            trackColor={{ true: colorsPalette.denim.color, false: colorsPalette.denim.color }}
                            ios_backgroundColor={colorsPalette.denim.color}
                            onChange={handleChange}
                            value={props.planType === "Monthly" ? false : true}
                        />
                        <BodyText customStyle={[
                            styles.planTypeText,
                            { color: props.planType === "Monthly" ? colorsPalette.grey.color : colorsPalette.denim.color }
                        ]}
                            fontWeigth="medium">
                            Yearly
                        </BodyText>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 6,
    },
    option: {
        marginTop: 12,
    },
    error: {
        color: colorsPalette.red.color,
        marginTop: 10,
    },
    switchPlanType: {
        backgroundColor: colorsPalette.veryLightGrey.color,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
        height: 48,
    },
    planTypeText: {
        marginHorizontal: 24,
    }
})
