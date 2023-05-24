
export type KeyboardType = "default" | "numeric" | "email-address"
export type AutoCapitalizeType = "none" | "sentences"

export interface IFormInput {
    name: string,
    label?: string;
    placeHolder?: string;
    keyboardType?: KeyboardType;
    maxLength?: number;
    autoCapitalize?: AutoCapitalizeType,
    autoCorrect?: boolean
}

export interface IPersonalInfo {
    [key: string]: string,
    name: string,
    email: string,
    phone: string,
}

