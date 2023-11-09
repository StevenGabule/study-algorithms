var journal = [];

function addEntry(events, didTurnIntoASquirrel) {
	journal.push({
		events,
		squirrel: didTurnIntoASquirrel
	})
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.table(journal);