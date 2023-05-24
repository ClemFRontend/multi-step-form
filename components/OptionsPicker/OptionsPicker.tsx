import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colorsPalette } from '../../styles'
import { BodyText } from '../Text/Text'

interface Props {
  label: string,
  price: string,
  optionSelected: string,
  logo: JSX.Element,
  handleSelectOption: (option: string) => void,
}

export function OptionPicker(props: Props) {

  function handlePress(): void {
    props.handleSelectOption(props.label)
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={[
        styles.container,
        {
          backgroundColor: props.optionSelected === props.label ? colorsPalette.veryLightGrey.color : colorsPalette.white.color,
          borderColor: props.optionSelected === props.label ? colorsPalette.purple.color : colorsPalette.lightGrey.color,
        }
      ]}>
        {props.logo}
        <View style={styles.labelPriceContainer}>
          <BodyText fontWeigth='medium'>{props.label}</BodyText>
          <BodyText customStyle={styles.price}>{props.price}</BodyText>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 77,
    borderRadius: 8,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  labelPriceContainer: {
    marginLeft: 14,
  },
  price: {
    color: colorsPalette.grey.color,
    marginTop: 7,
  },
})
