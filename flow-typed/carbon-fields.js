export type ReduxAction = {
	type: string,
	payload: any,
	meta?: any,
	error?: boolean
};

export type FieldProps = {
	field: Object,
	children?: React$Element<*>
}
