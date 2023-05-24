import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colorsPalette } from '../../styles'
import { BodyText } from '../Text/Text'
import React, { ReactNode, cloneElement } from 'react';
import { ICON_CHECK } from '../../assets/icons/icons';

interface Props {
  addonsChecked: string[]
  children: ReactNode,
  handleCheckAddon: (addonName: string) => void,
}

export function AddonsPicker(props: Props) {
  const clonedChildren = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, { addonsChecked: props.addonsChecked, handleCheckAddon: props.handleCheckAddon });
    }
    return child
  });

  return (
    <>
      {clonedChildren}
    </>
  )
}

interface CheckboxProps {
  addonsChecked?: string[],
  name: string,
  description: string,
  additionnalPrice: string,
  handleCheckAddon?: (addonName: string) => void,
}

export function Addon(props: CheckboxProps): JSX.Element {
  const isChecked = props.addonsChecked?.includes(props.name)

  return (
    <Pressable onPress={() => props.handleCheckAddon?.(props.name)}>
      <View style={[
        styles.container,
        {
          backgroundColor: isChecked ? colorsPalette.veryLightGrey.color : colorsPalette.white.color,
          borderColor: isChecked ? colorsPalette.purple.color : colorsPalette.lightGrey.color,
        }
      ]}>
        <View style={[
          styles.checkbox, {
            borderWidth: isChecked ? 0 : 1,
            borderColor: isChecked ? "transparent" : colorsPalette.lightGrey.color,
            backgroundColor: isChecked ? colorsPalette.purple.color : "transparent",
          }]}>
          {isChecked && <ICON_CHECK />}
        </View>
        <View style={styles.textContainer}>
          <BodyText fontWeigth='medium'>{props.name}</BodyText>
          <BodyText size='S' customStyle={styles.description}>{props.description}</BodyText>
        </View>
        <BodyText size='S' customStyle={styles.additionalPrice}>{props.additionnalPrice}</BodyText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 62,
    borderRadius: 8,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginTop: 12,
  },
  labelPriceContainer: {
    marginLeft: 14,
  },
  price: {
    color: colorsPalette.grey.color,
    marginTop: 7,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 24,
    display: "flex",
    flex: 1,
  },
  description: {
    color: colorsPalette.grey.color,
    marginTop: 3,
  },
  additionalPrice: {
    marginHorizontal: 16,
    color: colorsPalette.purple.color,
  },
})
