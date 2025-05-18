export const toTitle = (str: string) => {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
