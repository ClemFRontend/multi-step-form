import { StyleSheet, Text, TextStyle } from 'react-native'
import { colorsPalette } from '../../styles'

interface Props {
    children?: JSX.Element | string,
    customStyle?: Object,
    size?: "S" | "M" | "L",
    fontWeigth?: "regular" | "medium" | "bold",
}

export function HeaderText(props: Props): JSX.Element {
    return (
        <Text style={[styles.header, props.customStyle]}>
            {props.children}
        </Text>
    )
}

export function BodyText(props: Props): JSX.Element {
    const { size = "M", fontWeigth = "regular" } = props
    // let bodyStyle: Object | Array | undefined = undefined
    let bodyStyle: Object | undefined = undefined
    let fontFamily: string = ""

    switch (size.toUpperCase()) {
        case 'L':
            bodyStyle = styles.bodyL
            break;
        case 'M':
            bodyStyle = styles.bodyM
            break;
        case 'S':
            bodyStyle = styles.bodyS
            break;
        default:
            throw new Error("Size of Heading must be S, M or L.")
    }

    switch (fontWeigth) {
        case "regular":
            fontFamily = "Ubuntu-Regular"
            break;
        case "medium":
            fontFamily = "Ubuntu-Medium"
            break;
        case "bold":
            fontFamily = "Ubuntu-Bold"
            break;
        default:
            throw new Error("fontWeigth must be regular, medium or bold.")
    }

    return (
        <Text style={[
            styles.body,
            props.customStyle,
            bodyStyle,
            { fontFamily: props.fontWeigth && fontFamily },
        ]}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: "Ubuntu-Bold",
        color: colorsPalette.denim.color,
    },

    body: {
        fontFamily: "Ubuntu-Regular",
        color: colorsPalette.denim.color,
    },
    bodyS: {
        fontSize: 12,
        lineHeight: 14,
    },
    bodyM: {
        fontSize: 14,
        lineHeight: 20,
    },
    bodyL: {
        fontSize: 16,
        lineHeight: 25,
    },

})
