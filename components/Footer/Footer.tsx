import { StyleSheet } from 'react-native'
import Button from '../Button/Button'
import { BTN_ACTION_TYPE } from '../../utils/const'

interface Props {
    currentStep: number,
    goToStep: (step: number) => void,
}

export default function Footer(props: Props): JSX.Element {
    switch (props.currentStep) {
        case 1:
            return <Button
                type='secondary'
                handlePress={(e) => {
                    props.goToStep(2)
                }}
            >{BTN_ACTION_TYPE.nextStep}</Button>
        case 2:
            return <>
                <Button
                    handlePress={(e) => {
                        props.goToStep(1)
                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    type='secondary'
                    handlePress={(e) => {
                        props.goToStep(3)
                    }}>
                    {BTN_ACTION_TYPE.nextStep}
                </Button>
            </>
        case 3:
            return <>
                <Button
                    handlePress={(e) => {
                        props.goToStep(2)
                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    type='secondary'
                    handlePress={(e) => {
                        props.goToStep(4)
                    }}>
                    {BTN_ACTION_TYPE.nextStep}
                </Button>
            </>
        case 4:
            return <>
                <Button
                    handlePress={(e) => {
                        props.goToStep(3)
                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    handlePress={(e) => {
                        props.goToStep(5)
                    }}>
                    {BTN_ACTION_TYPE.confirm}
                </Button>
            </>

        default:
            return <></>
    }
}

const styles = StyleSheet.create({

})
