import { StyleSheet, View, ViewStyle } from "react-native"
import { colorsPalette } from "../../../styles"
import { BodyText, HeaderText } from "../../Text/Text"

interface Props {
    title: string,
    subtitle: string,
    style?: ViewStyle,
}

export function StepHeader(props: Props): JSX.Element {

    return (
        <View style={props.style}>
            <HeaderText>{props.title}</HeaderText>
            <BodyText customStyle={styles.subtitle} size="L">{props.subtitle}</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: colorsPalette.grey.color,
        marginTop: 9,
    }
})
