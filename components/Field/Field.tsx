import { StyleSheet, TextInput, View } from 'react-native'
import { BodyText } from '../Text/Text'
import { colorsPalette } from '../../styles'
import { useState } from 'react'
import { KeyboardType } from '../../interfaces/IFormInput'


interface Props {
    label?: string,
    placeholder?: string,
    maxLenght?: number,
    keyboardType?: KeyboardType,
    errorMessage?: string
}

export function Field(props: Props): JSX.Element {

    const [isFocus, setIsFocus] = useState<boolean>(false)

    return (
        <>
            <View style={styles.labelErrorContainer}>
                <BodyText>{props.label}</BodyText>
                <BodyText customStyle={styles.errorMessage} >{props.errorMessage}</BodyText>
            </View>
            <TextInput
                style={[
                    styles.field,
                    {
                        borderColor: isFocus ?
                            colorsPalette.purple.color : props.errorMessage !== "" && props.errorMessage !== undefined ?
                                colorsPalette.red.color :
                                colorsPalette.borderColor.color,
                    }
                ]}
                placeholder={props.placeholder}
                placeholderTextColor={colorsPalette.grey.color}
                maxLength={props.maxLenght}
                keyboardType={props.keyboardType}
                onEndEditing={(e) => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                cursorColor={colorsPalette.denim.color}
            />
        </>
    )
}

const styles = StyleSheet.create({
    labelErrorContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    errorMessage: {
        color: colorsPalette.red.color,
    },
    field: {
        paddingLeft: 16,
        borderWidth: 1,
        borderRadius: 8,
        height: 48,
        fontFamily: "Ubuntu-Medium",
        fontSize: 15,
        color: colorsPalette.denim.color,
    },
})
