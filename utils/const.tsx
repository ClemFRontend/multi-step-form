import { IBtnActionType } from "../interfaces/IBtnActionType"
import { IFormInput } from "../interfaces/IFormInput"

export const BTN_ACTION_TYPE: IBtnActionType = {
    goBack: "Go Back",
    nextStep: "Next Step",
    confirm: "Confirm",
}

export const PERSONAL_INFO_INPUTS: IFormInput[] = [
    {
        name: "name",
        label: "Name",
        placeHolder: "e.g. Stephen King",
        keyboardType: "default",
        maxLength: 20
    },
    {
        name: "emailAddress",
        label: "Email Address",
        placeHolder: "e.g. stephenking@lorem.com",
        keyboardType: "email-address",
        maxLength: 50
    },
    {
        name: "phoneNumber",
        label: "Phone Number",
        placeHolder: "e.g. +1 234 567 890",
        keyboardType: "numeric",
        maxLength: 10
    },
]