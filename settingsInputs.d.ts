export interface Input {
	id: string;
	required: boolean;
}

export interface NumberInput extends Input {
	max?: number;
	min?: number;
	value: number;
}

export interface TextInput extends Input {
	value: string;
	regex?: RegExp;
}

export interface CheckboxInput extends Input {
	value: boolean;
}

export interface DropdownInput<T> extends Input {
	value: string;
	options: DropdownOption<T>[];
}

export interface DropdownOption<T> {
	text: string;
	value: T;
}
