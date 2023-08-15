function ranges(start,end,step) {
	const range = [];
	if(step == null) step = 1;
	if(start > end) {
		for (let i = start; i >= end; i -= step) range.push(i)
	} else {
		for (let i = start; i <= end; i += step) range.push(i)
	}
	return range;
}

console.log(ranges(1, 10, 3));
console.log(ranges(10, 1, 2));