import { Animated, GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
import { colorsPalette } from '../../styles'
import { BodyText } from '../Text/Text'

interface Props {
    type?: "primary" | "secondary" | "tiercary",
    children: string,
    handlePress?: (e: GestureResponderEvent) => void,
}

export default function Button(props: Props): JSX.Element {

    const { type = "primary" } = props
    const scaleAnim = new Animated.Value(1)

    const pressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.90,
            useNativeDriver: true,
        }).start()
    }

    const pressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start()
    }

    let btnStyle: ViewStyle = {}
    let textStyle: TextStyle = {}
    switch (type) {
        case "primary":
            btnStyle = styles.btnPrimary
            textStyle = styles.textStyle1
            break;
        case "secondary":
            btnStyle = styles.btnSecondary
            textStyle = styles.textStyle1
            break;
        case "tiercary":
            btnStyle = styles.btnTiercary
            textStyle = styles.textStyle2
            break;
        default:
            break;
    }

    return (
        <Animated.View style={{
            transform: [{ scale: scaleAnim }]

        }}>
            <Pressable
                onPress={props.handlePress}
                onPressIn={pressIn}
                onPressOut={pressOut}
                style={[styles.btn, btnStyle]}>
                <BodyText customStyle={textStyle}
                    size='M'
                    fontWeigth='medium'
                >
                    {props.children}
                </BodyText>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 97,
        height: 40,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    btnPrimary: {
        backgroundColor: colorsPalette.purple.color,
    },

    btnSecondary: {
        backgroundColor: colorsPalette.denim.color,
    },
    btnTiercary: {
    },

    textStyle1: {
        color: colorsPalette.white.color
    },
    textStyle2: {
        color: colorsPalette.grey.color
    },

})
