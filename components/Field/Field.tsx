import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from 'react-native'
import { BodyText } from '../Text/Text'
import { colorsPalette } from '../../styles'
import { useState } from 'react'
import { KeyboardType, AutoCapitalizeType } from '../../interfaces/IFormInput'



interface Props {
    name: string,
    label?: string,
    placeholder?: string,
    maxLenght?: number,
    keyboardType?: KeyboardType,
    errorMessage?: string,
    value?: string,
    autoCapitalize?: AutoCapitalizeType,
    autoCorrect?: boolean
    handleChange?: (name: string, text: string) => void,
}

export function Field(props: Props): JSX.Element {

    const [isFocus, setIsFocus] = useState<boolean>(false)

    function handleChangeText(text: string) {
        if (props.handleChange) {
            props.handleChange(props.name, text)
        }
    }

    return (
        <>
            <View style={styles.labelErrorContainer}>
                <BodyText>{props.label}</BodyText>
                <BodyText fontWeigth='bold' customStyle={styles.errorMessage}>
                    {props.errorMessage}
                </BodyText>
            </View>
            <TextInput
                style={[
                    styles.field,
                    {
                        borderColor: isFocus ?
                            colorsPalette.purple.color :
                            props.errorMessage !== "" && props.errorMessage !== undefined ?
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
                value={props.value}
                onChangeText={handleChangeText}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={props.autoCorrect}

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
