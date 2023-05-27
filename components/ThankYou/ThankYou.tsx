import { StyleSheet, Text, View } from 'react-native'
import { colorsPalette, globalStyles } from '../../styles'
import { IconThankYou } from '../../assets/icons/icons'
import { BodyText, HeaderText } from '../Text/Text'

export function ThankYou(): JSX.Element {
    return (
        <View style={[globalStyles.stepSubContainer, styles.thankYouContainer]}>
            <IconThankYou />
            <HeaderText customStyle={styles.title}>Thank you!</HeaderText>
            <BodyText size='L' customStyle={styles.text}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    thankYouContainer: {
        display: "flex",
        alignItems: "center",
        paddingVertical: 79,
    },
    title: {
        marginTop: 24,
    },
    text: {
        textAlign: "center",
        color: colorsPalette.grey.color,
        marginTop: 9,
    },
})
