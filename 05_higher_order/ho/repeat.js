function repeat(arr, action) {
	let txt = "";
	for (let i = 0; i < arr.length; i++) {
		txt += arr[i] + " ";
	}
	action(txt);
}

repeat([3, 5, 1, 7, 2], console.log);
