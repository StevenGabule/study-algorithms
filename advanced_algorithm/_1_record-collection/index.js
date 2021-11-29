/*
  RECORD COLLECTION
*/
const collection = {
  2991: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let it rock', 'You give love a bad name'],
  },
  3991: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  2391: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  2491: {
    album: 'ABBA Gold',
  },
};

// const collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (prop === 'tracks' && value !== '') {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
  } else if (value !== '') {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }
  return collection;
}

console.log(updateRecords(2991, 'album', 'loose goose'));
console.log(updateRecords(3991, 'artist', 'sum 21'));
console.log(updateRecords(2391, 'artist', 'michael jackson'));
console.log(updateRecords(2491, 'album', 'hotel california'));
