/*
ALGORITHM: Bucket Sort
Simplified Pseudocode
Create bucketSort function (array, bucket size)
  Create vars for i, min, max, and bucket size
  Find min and max value
  Create amount of buckets
  Push values to correct buckets 
  Sort buckets
*/

// InsertionSort to be used within bucket sort
function insertionSort(array) {
  var length = array.length;
  for (let i = 0; i < length; i++) {
    var temp = array[i]
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = temp;
  }
  return array;
}

// implement bucket sort
function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  var i, minValue = array[0], maxValue = array[0], bucketSize = bucketSize || 5
  array.forEach((currentVal) => {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  })
  // initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount)

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = []
  }

  // pushing values to buckets
  array.forEach((currentVal) => {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal)
  })

  // sorting buckets
  array.length = 0;

  allBuckets.forEach((bucket) => {
    insertionSort(bucket)
    bucket.forEach((elem) => {
      array.push(elem)
    })
  })
  return array;
}

const nums = [15, 8, 20, 16, 11, 14, 1, 22, 12, 20, 21]
bucketSort(nums)
console.log(nums);