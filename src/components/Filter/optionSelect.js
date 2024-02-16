export const makeUniq = (arr) => {
	const model = arr.map((item) => (item.make));
	const filterunig = model.filter((el, id) => model.indexOf(el) === id);
	const result = filterunig.map((item) => ({ value: item, label: item }));
	return result
}


export const createArrayWithStep = () => {
	const result = [];
	for (let i = 10; i <= 1000; i += 10) {
		result.push({ value: i, label: i });
	}
	return result;
}