import { StyleSheet, View } from "react-native"
import { colorsPalette } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"
import { Field } from "../../Field/Field"
import { IFormInput } from "../../../interfaces/IFormInput"
import { PERSONAL_INFO_INPUTS } from "../../../utils/const"

interface Props {
}


export function PersonalInfo(props: Props): JSX.Element {

    return (
        <>
            <StepHeader
                title="Personal info"
                subtitle="Please provide your name, email address, and phone number."
                style={styles.header}
            />
            {PERSONAL_INFO_INPUTS.map((input) => {
                return (
                    <View style={styles.field} key={input.label}>
                        <Field
                            label={input.label}
                            placeholder={input.placeHolder}
                            keyboardType={input.keyboardType}
                        />
                    </View>
                )
            })}

        </>
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
