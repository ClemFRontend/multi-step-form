
export type KeyboardType = "default" | "numeric" | "email-address"

export interface IFormInput {
    name: string,
    label: string;
    placeHolder: string;
    keyboardType: KeyboardType;
    maxLength: number;
}

export interface IPersonalInfo {
    [key: string]: string,
    name: string,
    email: string,
    phone: string,
}