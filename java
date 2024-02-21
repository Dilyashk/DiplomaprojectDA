import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Main {
  public static void main(String[] args) {

    // create first list
    // asList() converts the array into the arraylist
    List<Integer> prime = new ArrayList<>(Arrays.asList(2, 3, 5));
    System.out.println("First List: " + prime);

    // create second list
    List<Integer> even = new ArrayList<>(Arrays.asList(4, 6));
    System.out.println("Second List: " + even);

    // convert both lists into stream
    Stream<Integer> list1 = prime.stream();
    Stream<Integer> list2 = even.stream();

    // merge two streams
    Stream<Integer> merged = Stream.concat(list1, list2);

    // convert the merged stream into list
    List<Integer> numbers = merged.collect(Collectors.toList());

    System.out.println("Merged List: " + numbers);

  }
}



//

import java.util.Arrays;

class Test {


  // length of result string should be equal to sum of two strings
  static boolean checkLength(String first, String second, String result) {
    if (first.length() + second.length() != result.length()) {
      return false;
    }
    else {
      return true;
    }
  }

  // this method converts the string to char array 
  // sorts the char array
  // convert the char array to string and return it
  static String sortString(String str) {
  
    char[] charArray = str.toCharArray();
    Arrays.sort(charArray);

    // convert char array back to string
    str = String.valueOf(charArray);

    return str;
  }

  // this method compares each character of the result with 
  // individual characters of the first and second string
  static boolean shuffleCheck(String first, String second, String result) {
    
    // sort each string to make comparison easier
    first = sortString(first);
    second = sortString(second);
    result = sortString(result);

    // variables to track each character of 3 strings
    int i = 0, j = 0, k = 0;

    // iterate through all characters of result
    while (k != result.length()) {

      // check if first character of result matches
      // with first character of first string
      if (i < first.length() && first.charAt(i) == result.charAt(k))
        i++;

      // check if first character of result matches
      // with the first character of second string
      else if (j < second.length() && second.charAt(j) == result.charAt(k))
        j++;

      // if the character doesn't match
      else {
        return false;
      }

      // access next character of result
      k++;
    }

    // after accessing all characters of result
    // if either first or second has some characters left
    if(i < first.length() || j < second.length()) {
      return false;
    }

    return true;
  }

  public static void main(String[] args) {

    String first = "XY";
    String second = "12";
    String[] results = {"1XY2", "Y1X2", "Y21XX"};

    // call the method to check if result string is
    // shuffle of the string first and second
    for (String result : results) {
      if (checkLength(first, second, result) == true && shuffleCheck(first, second, result) == true) {
        System.out.println(result + " is a valid shuffle of " + first + " and " + second);
      }
      else {
        System.out.println(result + " is not a valid shuffle of " + first + " and " + second);
      }
    }
  }
}


public class Program{
      
    public static void main(String[] args) {
          
        Account<String> acc1 = new Account<String>("2345", 5000);
        String acc1Id = acc1.getId();
        System.out.println(acc1Id);
         
        Account<Integer> acc2 = new Account<Integer>(2345, 5000);
        Integer acc2Id = acc2.getId();
        System.out.println(acc2Id);
    }
}
class Account<T>{
     
    private T id;
    private int sum;
     
    Account(T id, int sum){
        this.id = id;
        this.sum = sum;
    }
     
    public T getId() { return id; }
    public int getSum() { return sum; }
    public void setSum(int sum) { this.sum = sum; }
}


public class Program{
      
    public static void main(String[] args) {
          
        Account<String, Double> acc1 = new Account<String, Double>("354", 5000.87);
        String id = acc1.getId();
        Double sum = acc1.getSum();
        System.out.printf("Id: %s  Sum: %f \n", id, sum);
    }
}
class Account<T, S>{
     
    private T id;
    private S sum;
     
    Account(T id, S sum){
        this.id = id;
        this.sum = sum;
    }
     
    public T getId() { return id; }
    public S getSum() { return sum; }
    public void setSum(S sum) { this.sum = sum; }
}


public class SumNatural {

    public static void main(String[] args) {

        int num = 50, i = 1, sum = 0;

        while(i <= num)
        {
            sum += i;
            i++;
        }

        System.out.println("Sum = " + sum);
    }
}


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ByteFile {

    public static void main(String[] args) {

        String path = System.getProperty("user.dir") + "\\src\\test.txt";
        String finalPath = System.getProperty("user.dir") + "\\src\\final.txt";

        try {
            byte[] encoded = Files.readAllBytes(Paths.get(path));
            Files.write(Paths.get(finalPath), encoded);
        } catch (IOException e) {

        }
    }
}




//jkl;


// import the Class
import java.util.Arrays;
import java.util.Scanner;

class Main {

  // create an object of scanner
  // to take input from the user
  Scanner input = new Scanner(System.in);

  // method to perform bubble sort
  void bubbleSort(int array[]) {
    int size = array.length;

    // for ascending or descending sort
    System.out.println("Choose Sorting Order:");
    System.out.println("1 for Ascending \n2 for Descending");
    int sortOrder = input.nextInt();

    // run loops two times
    // first loop access each element of the array
    for (int i = 0; i < size - 1; i++)

      // second loop performs the comparison in each iteration
      for (int j = 0; j < size - i - 1; j++)

        // sort the array in ascending order
        if (sortOrder == 1) {
          // compares the adjacent element
          if (array[j] > array[j + 1]) {

            // swap if left element is greater than right
            int temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }

        // sort the array in descending order
        else {
          // compares the adjacent element
          if (array[j] < array[j + 1]) {

            // swap if left element is smaller than right
            int temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }

  }


