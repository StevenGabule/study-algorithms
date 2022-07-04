/**
 * @param {number[]} a 
 * @param {number} n 
 */
function mergeSort(a, n) {
  if (n < 2) {
    return;
  }

  let mid = n / 2;
  let l = new Array(mid);
  let r = new Array(n - mid);

  for (let i = 0; i < mid; i++)
    l[i] = a[i];

  for (let i = mid; i < n; i++)
    r[i - mid] = a[i];

  mergeSort(l, mid);
  mergeSort(r, n - mid);
  merge(a, l, r, mid, n - mid);
}

/**
 * @param {number[]} a 
 * @param {number[]} l 
 * @param {number[]} r 
 * @param {number} left 
 * @param {number} right 
 */
function merge(a, l, r, left, right) {
  let i = 0, j = 0, k = 0;
  while (i < left && j < right) {
    if (l[i] <= r[j]) {
      a[k++] = l[i++];
    } else {
      a[k++] = r[j++];
    }
  }
  while (i < left) {
    a[k++] = l[i++];
  }
  while (j < right) {
    a[k++] = r[j++];
  }
}

const nums = [2, 1, 0, 5, 8, 7, 6, 4];
mergeSort(nums, 8)
console.log(nums);