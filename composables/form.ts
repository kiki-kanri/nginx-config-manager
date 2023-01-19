type validatorType = (rule: any, value: any, callback: (message: string) => void) => void;

export const getFormRule = (
	message = '',
	options: {
		required?: boolean;
		trigger?: string;
		validator?: validatorType;
	} = {}
) => {
	let { required, trigger, validator } = options;
	if (required === undefined) required = true;
	if (trigger === undefined) trigger = 'blur';
	if (validator) return { validator, trigger };
	return { message, required, trigger };
}

export const getFormRuleUseValidator = (validator: validatorType) => getFormRule('', { validator });

export const publicFormRules = {
	domain: [getFormRule('請輸入域名')],
	name: [
		getFormRule('請輸入名稱'),
		{ max: 20, message: '名稱最長20個字', trigger: 'blur' }
	]
}
