
export type KeyboardType = "default" | "numeric" | "email-address"

export interface IFormInput {
    name: string,
    label: string;
    placeHolder: string;
    keyboardType: KeyboardType;
    maxLength: number;
}

