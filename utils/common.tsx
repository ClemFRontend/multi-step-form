import { Keyboard, Platform } from "react-native";

export function exitField() {
    Keyboard.dismiss()
}

export function isEmptyObject(object: object): boolean {
    return Object.keys(object).length === 0 ? true : false
}

export const IS_WEB = Platform.OS === "web" ? true : false
