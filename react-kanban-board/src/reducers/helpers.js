export const arrayfyObject = (obj) =>
	Object.keys(obj)
		.map(id => ({
			...obj[id],
			id
		}))

export const removeKeyFromObject = (obj, key) => {
	const { [key]: _, ...rest } = obj;
	return rest;
}


export const dateToString = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`