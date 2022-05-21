export enum InputType {
	NUMBER = 'NUMBER',
	TEXT = 'TEXT',
	CHECKBOX = 'CHECKBOX',
	DROPDOWN = 'DROPDOWN',
}

export interface Input {
	id: string;
	required: boolean;
	type: InputType;
}

export interface NumberInput extends Input {
	type: InputType.NUMBER;
	value: number;
	max?: number;
	min?: number;
}

export interface TextInput extends Input {
	type: InputType.TEXT;
	value: string;
	regex?: RegExp;
}

export interface CheckboxInput extends Input {
	type: InputType.CHECKBOX;
	value: boolean;
}

export interface DropdownInput extends Input {
	type: InputType.DROPDOWN;
	value: string;
	options: DropdownOption[];
}

export interface DropdownOption {
	text: string;
	value: string;
}

export type Inputs = (TextInput | NumberInput | CheckboxInput | DropdownInput)[];
