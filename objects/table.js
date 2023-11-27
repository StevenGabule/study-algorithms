// table building system

// It uses reduce to compute the maximum height of an array of cells and 
// wraps that in map in order to do it for all rows in the rows array
function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max, cell.minHeight())
    }, 0);
  });
}

// first row and only using the mapping function’s second argument, colWidths 
// builds up an array with one element for every column index.
function colWidths(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth())
    }, 0);
  });
}

// uses the internal helper function drawRow to draw all rows and 
// then join them together with newline characters.
function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function (block) {
      return block[lineNo]
    }).join(" ")
  }

  // first converts the cell objects in the row to blocks, 
  // which are arrays of strings representing the content of the cells, split by line.
  function drawRow(row, rowNum) {
    var blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum])
    });

    return blocks[0].map(function (_, lineNo) {
      return drawLine(blocks, lineNo)
    }).join("\n")
  }
  return rows.map(drawRow).join("\n")
}

function repeat(string, times) {
  var result = ''
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

function TextCell(text) {
  this.text = text.split("\n")
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.height);
  }, 0)
};

TextCell.prototype.minHeight = function () {
  return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
  var result = []
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

// let's try everything we've written so far by building up 5x5 checkerboard.
var rows = []
for (var i = 0; i < 5; i++) {
  var row = []
  for (var j = 0; j < 5; j++) {
    if ((j + i) % 2 == 0) {
      row.push(new TextCell("##"))
    } else {
      row.push(new TextCell("  "))
    }
  }
  rows.push(row)
}

console.log(drawTable(rows));
// OUTPUT:
// ##    ##    ##
//    ##    ##
// ##    ##    ##
//    ##    ##
// ##    ##    ##


















