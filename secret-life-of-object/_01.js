function rowHeights(rows) {
	return rows.map(function (row) {
		return row.reduce(function (max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(rows) {
	return rows[0].map(function (_, i) {
		return rows.reduce(function (max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

// uses the internal helper function drawRow to draw 
// all rows and then joins them together with newline characters
function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows)

	// extracts lines that should appear next to each
	// other from an array of blocks and joins them with a space character to
	// create a one - character gap between the table’s columns.
	function drawLine(blocks, lineNo) {
		return blocks.map(function (block) {
			return block[lineNo]
		}).join(" ");
	}

	// function itself first converts the cell objects in the row to
	// blocks, which are arrays of strings representing the content of the cells, split by line.
	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});

		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n")
	}
	return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++) {
		result += string;
	}
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}

// returns a number indicating this cell’s minimum width (in characters)
TextCell.prototype.minWidth = function () {
	return this.text.reduce(function (width, line) {
		return Math.max(width, line.length)
	}, 0);
}

// returns a number indicating the minimum height this cell requires(in lines).
TextCell.prototype.minHeight = function () {
	return this.text.length;
}

// returns an array of length height, which contains a
// series of strings that are each width characters wide.This represents the
// content of the cell.
TextCell.prototype.draw = function (width, height) {
	var result = []
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || ""
		result.push(line + repeat(" ", width - line.length))
	}
	return result;
}

// var rows = []
// for (var i = 0; i < 5; i++) {
// 	var row = []
// 	for (var j = 0; j < 5; j++) {
// 		if ((j + i) % 2 === 0) {
// 			row.push(new TextCell("##"))
// 		} else {
// 			row.push(new TextCell("  "))
// 		}
// 	}
// 	rows.push(row)
// }

// console.log(drawTable(rows));

function UnderlinedCell(inner) {
	this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth()
}

UnderlinedCell.prototype.minHeight = function () {
	return this.inner.minHeight() + 1;
}

UnderlinedCell.prototype.draw = function (width, height) {
	return this.inner.draw(width, height - 1).concat([repeat("-", width)])
}

function RTextCell(text) {
	TextCell.call(this, text)
}

RTextCell.prototype = Object.create(TextCell.prototype)
RTextCell.prototype.draw = function (width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(repeat(" ", width - line.length) + line);
	}
	return result;
}

function dataTable(data) {
	var keys = Object.keys(data[0])
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name))
	});

	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name]
			if (typeof value === "number") {
				return new RTextCell(String(value))
			} else {
				return new TextCell(String(value))
			}
		});
	});
	return [headers].concat(body)
}


var MOUNTAINS = [
	{ Name: "Kilimanjaro", Height: 5895, Country: "Tanzania", City: "Valencia city", PostalCode: "1122", Job: "Data Scientist", Bio: "My name is oboo" },
	{ Name: "Everest", Height: 8848, Country: "Nepal", City: "Malaybalay city", PostalCode: "1132", Job: "Data Scientist", Bio: "My name is oboo" },
	{ Name: "Mount Fuji", Height: 3776, Country: "Japan", City: "Maramag city", PostalCode: "12222", Job: "Data Scientist", Bio: "My name is oboo" },
	{ Name: "Mont Blanc", Height: 4808, Country: "Italy/France", City: "Manolo city", PostalCode: "1122", Job: "Data Scientist", Bio: "My name is oboo" },
	{ Name: "Vaalserberg", Height: 323, Country: "Netherlands", City: "Cebu city", PostalCode: "1122", Job: "Data Scientist", Bio: "My name is oboo" },
	{ Name: "Denali", Height: 6168, Country: "United States", City: "Davao city", PostalCode: "1122", Job: "Data Scientist", Bio: "My name is oboo" },
	{ Name: "Popocatepetl", Height: 5465, Country: "Mexico", City: "Tagum city", PostalCode: "1122", Job: "Data Scientist", Bio: "My name is oboo" }
];

console.log(drawTable(dataTable(MOUNTAINS)));

// var pile = {
// 	elements: ['eggshell', 'orange peel', 'worm'],
// 	get height() {
// 		return this.elements.length
// 	},
// 	set height(value) {
// 		console.log('ignoring attempt to set height to', value);
// 	}
// }
















