import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {

        Map<Character, Integer> romanNumber = new HashMap<>();
        romanNumber.put('I', 1);
        romanNumber.put('V', 5);
        romanNumber.put('X', 10);
        romanNumber.put('L', 50);
        romanNumber.put('C', 100);
        romanNumber.put('D', 500);
        romanNumber.put('M', 1000);

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman number: ");
        String romanInput = scanner.nextLine().toUpperCase();
        int result = 0;
        int prevValue = 0;

        for (int i = romanInput.length() - 1; i >= 0; i--) {
            char currentSymbol = romanInput.charAt(i);
            int currentValue = romanNumber.get(currentSymbol);

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        System.out.println("The Roman number " + romanInput + " is: " + result);

        scanner.close();
    }
}
