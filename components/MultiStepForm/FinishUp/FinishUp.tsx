import { Pressable, StyleSheet, View } from "react-native"
import { colorsPalette, globalStyles } from "../../../styles"
import { BodyText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"
import { useEffect } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MultiStepFormStackParamList } from "../../../types/Navigation"
import { MultiStepFormEnums } from "../MultiStepFormEnums"
import { PlanType } from "../../../types/Plan"
import { ADDONS, SELECT_PLAN } from "../../../utils/const"
import { ThankYou } from "../../ThankYou/ThankYou"
import { AddonsType } from "../../../types/Addons"

interface Props {
    currentStep: number,
    planType: PlanType,
    addonsChecked: string[],
    planSelected: string,
    formIsSubmit: boolean,
    togglePlanType: () => void,
    navigation: NativeStackNavigationProp<MultiStepFormStackParamList, "SelectPlan">,
}

export function FinishUp(props: Props): JSX.Element {

    const step: number = MultiStepFormEnums.FinishUp
    // const [planPrice, setPlanPrice] = useState<PlanPricesType>({ monthly: "", yearly: "" })
    // const [addonsChecked, setAddonsChecked] = useState<AddonsType>([])
    let planPrice = {
        monthly: "",
        yearly: "",
    }
    let addonsChecked: AddonsType = []
    let totalPrice: { montly: number, yearly: number } = { montly: 0, yearly: 0 }

    useEffect(() => {
        if (props.currentStep === step - 1) {
            props.navigation.navigate("PickAddons")
        }
        // if (props.currentStep === step + 1) {
        //     props.navigation.navigate("FinishUp")
        // }
    }, [props.currentStep])

    SELECT_PLAN.find(p => {
        if (p.label === props.planSelected) {
            planPrice = {
                monthly: `$${p.price.monthly}/mo`,
                yearly: `$${p.price.yearly}/yr`,
            }
            addToTotal(p.price.monthly, p.price.yearly)
        }
    })

    ADDONS.forEach(a => {
        if (props.addonsChecked.includes(a.name)) {
            addonsChecked.push({
                name: a.name,
                additionalPrice: {
                    monthly: `+$${a.additionalPrice.monthly}/mo`,
                    yearly: `+$${a.additionalPrice.yearly}/yr`,
                }
            })
            addToTotal(a.additionalPrice.monthly, a.additionalPrice.yearly)

        }
    })

    function addToTotal(monthly: number, yearly: number) {
        totalPrice = {
            montly: totalPrice.montly + monthly,
            yearly: totalPrice.yearly + yearly,
        }
    }

    // // States approach

    // function getPlanPrice() {
    //     SELECT_PLAN.find(p => {
    //         if (p.label === props.planSelected) {
    //             setPlanPrice({
    //                 monthly: `$${p.price.monthly}/mo`,
    //                 yearly: `$${p.price.yearly}/yr`,
    //             })
    //         }
    //     })


    // }

    // function getAddons() {
    //     const addons: AddonsType = []
    //     ADDONS.forEach(a => {
    //         if (props.addonsChecked.includes(a.name)) {
    //             addons.push({
    //                 name: a.name,
    //                 additionalPrice: {
    //                     monthly: `+$${a.additionalPrice.monthly}/mo`,
    //                     yearly: `+$${a.additionalPrice.yearly}/yr`,

    //                 }
    //             })
    //         }
    //     })
    //     setAddonsChecked(addons)

    // }

    // // useEffect(() => {
    // //     getPlanPrice()
    // // }, [props.planType])

    // useEffect(() => {
    //     getPlanPrice()
    //     getAddons()
    // }, [])

    return (
        <>
            <View style={globalStyles.stepContainer}>
                {props.formIsSubmit ?
                    <ThankYou />
                    :
                    <View style={globalStyles.stepSubContainer}>

                        <StepHeader
                            title="Finishing up"
                            subtitle="Double-check everything looks OK before confirming."
                        />
                        <View style={styles.summary}>
                            <View style={[styles.planTypeContainer, styles.line]}>
                                <View>
                                    <BodyText fontWeigth="medium" customStyle={styles.plan} >{props.planSelected} ({props.planType})</BodyText>
                                    <Pressable onPress={props.togglePlanType}>
                                        <BodyText customStyle={styles.togglePlan}>Change</BodyText>
                                    </Pressable>
                                </View>
                                <BodyText fontWeigth="bold" customStyle={styles.plan}>{props.planType === 'Monthly' ? planPrice.monthly : planPrice.yearly}</BodyText>
                            </View>
                            <View style={styles.separator} />
                            {addonsChecked.map((addon) => {
                                return (
                                    <View style={[styles.addon, styles.line]} key={`addon-${addon.name}`}>
                                        <BodyText customStyle={styles.addonName}>{addon.name}</BodyText>
                                        <BodyText>{props.planType === "Monthly" ? addon.additionalPrice.monthly : addon.additionalPrice.yearly}</BodyText>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={[styles.line, styles.total]}>
                            <BodyText>Total (per {props.planType === "Monthly" ? "month" : "year"})</BodyText>
                            <BodyText size="L" fontWeigth="bold" customStyle={styles.totalPrice}>
                                ${props.planType === "Monthly" ? totalPrice.montly.toString() + "/mo" : totalPrice.yearly.toString() + "/yr"}
                            </BodyText>
                        </View>
                    </View>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    summary: {
        backgroundColor: colorsPalette.veryLightGrey.color,
        padding: 16,
        marginTop: 22,
    },
    line: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    planTypeContainer: {
        alignItems: "center",
    },
    plan: {
        color: colorsPalette.denim.color,
        borderRadius: 8,
    },
    togglePlan: {
        color: colorsPalette.grey.color,
        paddingTop: 3,
        textDecorationLine: "underline",
    },
    separator: {
        borderColor: colorsPalette.grey.color,
        borderBottomWidth: 1,
        opacity: 0.20,
        marginTop: 12,
    },
    addon: {
        marginTop: 12,
    },
    addonName: {
        color: colorsPalette.grey.color,
    },
    total: {
        marginHorizontal: 16,
        marginTop: 24,
        display: "flex",
        alignItems: "center",
    },
    totalPrice: {
        color: colorsPalette.purple.color,
    }
})
