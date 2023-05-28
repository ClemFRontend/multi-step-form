import { ImageBackground, StyleSheet, View, } from 'react-native'
import { BodyText } from '../Text/Text'
import { colorsPalette } from '../../styles'

interface Props {
    currentStep: number,
}

const IMG_HEADER_BG = require("../../assets/images/bg-sidebar-mobile.png")

export default function Header(props: Props): JSX.Element {

    const steps: JSX.Element[] = []
    for (let i = 1; i < 5; i++) {
        steps.push(
            <View
                key={`step-${i}`}
                style={[
                    styles.ellipse,
                    props.currentStep === i ? styles.active : styles.unactive
                ]}>
                <BodyText
                    fontWeigth='bold'
                    customStyle={{
                        color: props.currentStep === i ? colorsPalette.denim.color : colorsPalette.white.color
                    }}>
                    {i.toString()}
                </BodyText>
            </View>
        )
    }

    return (
        <ImageBackground
            source={IMG_HEADER_BG}
            style={styles.imgHeaderBG}
        >
            {steps}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgHeaderBG: {
        height: 172,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
    },
    ellipse: {
        width: 33,
        height: 33,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginHorizontal: 8,
    },
    active: {
        backgroundColor: colorsPalette.skyBlue.color,
    },
    unactive: {
        borderWidth: 1,
        borderColor: colorsPalette.white.color,
    }
})
