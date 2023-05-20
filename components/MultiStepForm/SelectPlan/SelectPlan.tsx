import { StyleSheet, View } from "react-native"
import { colorsPalette, globalStyles } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"

interface Props {
    handleChangeStep: (step: number) => void,
}

export function SelectPlan(props: Props): JSX.Element {

    return (
        <>

            <View style={globalStyles.stepContainer}>
                <View>
                    <View style={globalStyles.formContainer}>

                        <StepHeader
                            title="Select your plan"
                            subtitle="You have the option of monthly or yearly billing."
                            style={styles.header}
                        />
                    </View>
                </View>
                <Footer handleChangeStep={props.handleChangeStep} currentStep={2} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 6,
    },
})
