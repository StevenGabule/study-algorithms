public class TestOne {

  public static boolean isPalindromeCheck(String str) {
    int i = 0;
    int j = str.length() - 1;
    while (i <= j) {
      if (str.charAt(i) != str.charAt(j)) {
        return false;
      } else {
        i++;
        j--;
      }
    }
    return true;
  }

  public static void main(String[] args) {
    // String input = "racecar";
    String input = "racecar1";
    boolean isPalindrome = isPalindromeCheck(input);
    System.out.println("Is palindrome: " + isPalindrome);
  }
}
