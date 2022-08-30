export declare type InputType = 'NUMBER' | 'TEXT' | 'CHECKBOX' | 'DROPDOWN';
export interface InputBase {
    id: string;
    required: boolean;
    type: InputType;
    label: string;
}
export interface NumberInput extends InputBase {
    type: 'NUMBER';
    value: number;
    max?: number;
    min?: number;
}
export interface TextInput extends InputBase {
    type: 'TEXT';
    value: string;
    regex?: string;
}
export interface CheckboxInput extends InputBase {
    type: 'CHECKBOX';
    value: boolean;
    required: false;
}
export interface DropdownInput extends InputBase {
    type: 'DROPDOWN';
    value: string;
    placeholder: string;
    options: DropdownOption[];
}
export interface DropdownOption {
    text: string;
    value: string;
}
export declare type Input = TextInput | NumberInput | CheckboxInput | DropdownInput;
