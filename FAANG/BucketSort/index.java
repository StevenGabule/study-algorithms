import java.util.*;

public class index {
  /**
   * @param arr
   * @param bktSize
   */
  public void binSort(int[] arr, int bktSize) {
    // creating a list of buckets for storing lists
    List<Integer>[] buckets = new List[bktSize];
    // linked list with each bucket array index
    for (int i = 0; i < bktSize; i++) {
      buckets[i] = new LinkedLists<>();
    }
    // calculate the index and assigns elements to the proper bucket
    for (int num: arr) {
      buckets[num/bktSize].add(num);
    }

    // iterate over the buckets and sorts the elements
    for(List<Integer>bucket: buckets) {
      Collections.sort(bucket);
    }
    
    int index = 0;
    for(List<Integer>bucket: buckets) {
      for(int num : bucket) {
        arr[index++] = num;
      }
    }
  }
}
