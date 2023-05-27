import { StyleSheet, View } from 'react-native'
import Button from '../Button/Button'
import { BTN_ACTION_TYPE } from '../../utils/const'
import { colorsPalette } from '../../styles'

interface Props {
    currentStep: number,
    formIsSubmit: boolean,
    handleChangeStep: (step: number) => void,
}

export default function Footer(props: Props): JSX.Element {

    let buttons: JSX.Element = <></>

    switch (props.currentStep) {
        case 1:
            buttons = <Button
                type='secondary'
                handlePress={(e) => {
                    props.handleChangeStep(2)
                }}
            >{BTN_ACTION_TYPE.nextStep}</Button>
            break

        case 2:
            buttons = <>
                <Button
                    handlePress={(e) => {
                        props.handleChangeStep(1)

                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    type='secondary'
                    handlePress={(e) => {
                        props.handleChangeStep(3)
                    }}>
                    {BTN_ACTION_TYPE.nextStep}
                </Button>
            </>
            break

        case 3:
            buttons = <>
                <Button
                    handlePress={(e) => {
                        props.handleChangeStep(2)
                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    type='secondary'
                    handlePress={(e) => {
                        props.handleChangeStep(4)
                    }}>
                    {BTN_ACTION_TYPE.nextStep}
                </Button>
            </>
            break

        case 4:
            buttons = <>
                <Button
                    handlePress={(e) => {
                        props.handleChangeStep(3)
                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    handlePress={(e) => {
                        props.handleChangeStep(5)
                    }}>
                    {BTN_ACTION_TYPE.confirm}
                </Button>
            </>
            break

        default:
            buttons = <></>
            break
    }

    return (
        <>
            {props.formIsSubmit ?
                <></>
                :
                <View style={[
                    styles.footerContainer,
                    { justifyContent: props.currentStep === 1 ? "flex-end" : "space-between" }
                ]}>
                    {buttons}
                </View>}
        </>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        height: 72,
        backgroundColor: colorsPalette.white.color,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    }
})
