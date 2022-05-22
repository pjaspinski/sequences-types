export type InputType = 'NUMBER' | 'TEXT' | 'CHECKBOX' | 'DROPDOWN';

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
	value: boolean;
	type: 'CHECKBOX';
	required: false;
}

export interface DropdownInput extends InputBase {
	type: 'DROPDOWN';
	value: string;
	options: DropdownOption[];
}

export interface DropdownOption {
	text: string;
	value: string;
}

export type Input = TextInput | NumberInput | CheckboxInput | DropdownInput;
